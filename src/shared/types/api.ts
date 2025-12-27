export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ApiErrorResponse {
  success: boolean;
  error: {
    message: string;
    code: string;
    details?: unknown;
  };
}
