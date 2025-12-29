import { useState } from "react";
import {
  loginRequest,
  signupRequest,
  verifyOtpRequest,
} from "../auth.services";
import type { LoginInput, SignupInput, VerifyOtpInput } from "../validation";
import type { ApiErrorResponse } from "../../../shared/types/api";

function getErrorMessage(err: unknown): string {
  const apiError = err as ApiErrorResponse;
  return apiError?.error?.message ?? "Something went wrong";
}

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  async function handleRequest<T>(fn: () => Promise<T>): Promise<T> {
    try {
      setLoading(true);
      setApiError(null);
      return await fn();
    } catch (err) {
      setApiError(getErrorMessage(err));
      throw err;
    } finally {
      setLoading(false);
    }
  }

  const signup = (data: SignupInput) =>
    handleRequest(() => signupRequest(data));

  const verifyOtp = (data: VerifyOtpInput) =>
    handleRequest(() => verifyOtpRequest(data));

  const login = (data: LoginInput) => handleRequest(() => loginRequest(data));

  return {
    signup,
    verifyOtp,
    login,
    loading,
    apiError,
  };
}
