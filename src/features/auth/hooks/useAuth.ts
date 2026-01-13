import { useState } from "react";
import { ERROR_MESSAGES } from "../../../shared/constants/error-messages";
import { useAppDispatch } from "../../../shared/hooks/redux";
import type { ApiErrorResponse } from "../../../shared/types/api";
import {
  loginRequest,
  logoutRequest,
  resendOtpRequest,
  signupRequest,
  verifyOtpRequest,
} from "../auth.services";
import { authSuccess, logout as logoutAction } from "../auth.slice";
import type {
  LoginInput,
  ResendOtpInput,
  SignupInput,
  VerifyOtpInput,
} from "../validation";

function getErrorMessage(err: unknown): string {
  const apiError = err as ApiErrorResponse;
  return apiError?.error?.message ?? ERROR_MESSAGES.UNEXPECTED_ERROR;
}

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

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

  const resendOtp = (data: ResendOtpInput) =>
    handleRequest(() => resendOtpRequest(data));

  const login = (data: LoginInput) =>
    handleRequest(async () => {
      const res = await loginRequest(data);
      const { user, accessToken } = res.data;

      dispatch(
        authSuccess({
          user,
          accessToken,
        }),
      );

      return res;
    });

  const startEmailVerification = (data: ResendOtpInput) =>
    handleRequest(async () => {
      const { email } = data;
      const res = await resendOtp(data);
      sessionStorage.setItem("authMail", email);

      return res;
    });

  const logout = () =>
    handleRequest(async () => {
      const res = await logoutRequest();
      dispatch(logoutAction());

      return res;
    });

  return {
    signup,
    verifyOtp,
    resendOtp,
    login,
    startEmailVerification,
    logout,
    loading,
    apiError,
  };
}
