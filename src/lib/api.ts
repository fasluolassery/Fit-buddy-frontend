import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { store } from "../app/store";
import { setGlobalError } from "../app/store/global-error.slice";
import { refreshTokenRequest } from "../features/auth/auth.services";
import { logout, tokenRefreshed } from "../features/auth/auth.slice";
import {
  ERROR_CODES,
  ERROR_MESSAGES,
} from "../shared/constants/error-messages";
import { type ApiErrorResponse } from "../shared/types/api";

const LOCAL_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const FORWARD_BASE_URL = import.meta.env.VITE_API_NGROK_BASE_URL;

const { dispatch } = store;

const api = axios.create({
  baseURL: LOCAL_BASE_URL,
  withCredentials: true,
});

export const refreshApi = axios.create({
  baseURL: LOCAL_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = store.getState().auth.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const normalizeError = (
  error: Partial<ApiErrorResponse["error"]>,
): ApiErrorResponse => ({
  success: false,
  error: {
    message: error.message ?? "Something went wrong",
    code: error.code ?? "UNKNOWN_ERROR",
    details: error.details,
  },
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ApiErrorResponse>) => {
    const originalRequest = error.config as
      | (InternalAxiosRequestConfig & { _retry?: boolean })
      | undefined;

    if (!error.response) {
      dispatch(setGlobalError(ERROR_MESSAGES.NETWORK_ERROR));

      return Promise.reject(
        normalizeError({
          message: ERROR_MESSAGES.NETWORK_ERROR,
          code: ERROR_CODES.NETWORK_ERROR,
        }),
      );
    }
    console.log("Backend Err: ", error.response.data);

    if (!originalRequest || originalRequest._retry) {
      if (error.response.data) {
        return Promise.reject(
          normalizeError({
            message:
              error.response.data.error.message ??
              ERROR_MESSAGES.REQUEST_FAILED,
            code: error.response.data.error.code ?? ERROR_CODES.REQUEST_FAILED,
          }),
        );
      }

      return Promise.reject(
        normalizeError({
          message: ERROR_MESSAGES.REQUEST_FAILED,
          code: ERROR_CODES.REQUEST_FAILED,
        }),
      );
    }

    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      store.getState().auth.accessToken
    ) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await refreshTokenRequest();
        const { accessToken } = refreshResponse.data;

        console.log("Refresh Res: ", refreshResponse);
        dispatch(tokenRefreshed({ accessToken }));
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return api(originalRequest);
      } catch (err) {
        console.log(
          "Backend Err: ",
          err instanceof AxiosError ? err.response?.data : err,
        );

        dispatch(logout());
        dispatch(setGlobalError(ERROR_MESSAGES.SESSION_EXPIRED));

        return Promise.reject(
          normalizeError({
            message: ERROR_MESSAGES.SESSION_EXPIRED,
            code: ERROR_CODES.SESSION_EXPIRED,
          }),
        );
      }
    }

    if (error.response.status >= 500) {
      dispatch(setGlobalError(ERROR_MESSAGES.SERVER_ERROR));
    }

    if (error.response.data) {
      return Promise.reject(
        normalizeError({
          message:
            error.response.data.error.message ?? ERROR_MESSAGES.REQUEST_FAILED,
          code: error.response.data.error.code ?? ERROR_CODES.REQUEST_FAILED,
        }),
      );
    }

    return Promise.reject(
      normalizeError({
        message: ERROR_MESSAGES.UNEXPECTED_ERROR,
        code: ERROR_CODES.UNEXPECTED_ERROR,
      }),
    );
  },
);

export default api;
