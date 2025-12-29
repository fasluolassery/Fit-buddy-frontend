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

  const signup = async (data: SignupInput) => {
    try {
      setLoading(true);
      setApiError(null);
      return await signupRequest(data);
    } catch (err: unknown) {
      setApiError(getErrorMessage(err));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (data: VerifyOtpInput) => {
    try {
      setLoading(true);
      setApiError(null);
      return await verifyOtpRequest(data);
    } catch (err) {
      setApiError(getErrorMessage(err));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (data: LoginInput) => {
    try {
      setLoading(true);
      setApiError(null);
      return await loginRequest(data);
    } catch (err) {
      setApiError(getErrorMessage(err));
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
    apiError,
  };
}
