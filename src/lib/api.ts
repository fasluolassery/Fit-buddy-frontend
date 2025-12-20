import axios, { AxiosError } from "axios";
import type { ApiErrorResponse } from "../shared/types/api";
import { store } from "../app/store";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    if (error.response?.data) {
      return Promise.reject(error.response.data);
    }

    return Promise.reject({
      success: false,
      error: {
        message: "Network error",
        code: "NETWORK_ERROR",
      },
    } satisfies ApiErrorResponse);
  },
);

api.interceptors.request.use((config) => {
  const token = store.getState().auth.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
