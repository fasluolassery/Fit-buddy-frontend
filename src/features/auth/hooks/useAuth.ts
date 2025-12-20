import { useState } from "react";
import {
  loginRequest,
  signupRequest,
  verifyOtpRequest,
} from "../auth.services";
import type { LoginInput, SignupInput, VerifyOtpInput } from "../validation";
import type { ApiErrorResponse } from "../../../shared/types/api";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signup = async (data: SignupInput) => {
    try {
      setLoading(true);
      setError(null);
      return await signupRequest(data);
    } catch (err: unknown) {
      const apiError = err as ApiErrorResponse;
      setError(apiError?.error?.message || "Error");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (data: VerifyOtpInput) => {
    try {
      setLoading(true);
      setError(null);
      return await verifyOtpRequest(data);
    } catch (err) {
      const apiError = err as ApiErrorResponse;
      setError(apiError?.error?.message || "Error");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (data: LoginInput) => {
    try {
      setLoading(true);
      setError(null);
      return await loginRequest(data);
    } catch (err) {
      const apiError = err as ApiErrorResponse;
      setError(apiError.error.message || "Error");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    signup,
    verifyOtp,
    login,
    loading,
    error,
  };
}
