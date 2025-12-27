import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { type ApiErrorResponse } from "../shared/types/api";
import { store } from "../app/store";
import { refreshTokenRequest } from "../features/auth/auth.services";
import { tokenRefreshed } from "../features/auth/auth.slice";

const { dispatch } = store;

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export const refreshApi = axios.create({
  baseURL: "http://localhost:3000/api",
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
      return Promise.reject(
        normalizeError({
          message: "Network error",
          code: "NETWORK_ERROR",
        }),
      );
    }
    console.log("Backend Err: ", error.response.data);

    if (!originalRequest || originalRequest._retry) {
      if (error.response.data) {
        return Promise.reject(error.response.data);
      }

      return Promise.reject(
        normalizeError({
          message: "Request failed",
          code: "REQUEST_FAILED",
        }),
      );
    }

    if (error.response.status === 401) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await refreshTokenRequest();
        const { accessToken } = refreshResponse.data;

        console.log("refresh res: ", refreshResponse);
        dispatch(tokenRefreshed({ accessToken }));
        // console.log("auth state after refresh:", store.getState().auth);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch {
        return Promise.reject(
          normalizeError({
            message: "Session expired",
            code: "SESSION_EXPIRED",
          }),
        );
      }
    }

    if (error.response.data) {
      return Promise.reject(error.response.data);
    }

    return Promise.reject(
      normalizeError({
        message: "Unexpected error",
        code: "UNEXPECTED_ERROR",
      }),
    );
  },
);

export default api;
