import api, { refreshApi } from "../../lib/api";
import type { ApiResponse } from "../../shared/types/api";
import type {
  LoginResponseData,
  MeResponseData,
  ResendOtpResponseData,
  SignupResponseData,
  VerifyOtpResponseData,
} from "./types";
import type {
  ForgotPasswordInput,
  LoginInput,
  ResendOtpInput,
  SignupInput,
  VerifyOtpInput,
} from "./validation";

export const signupRequest = (
  data: SignupInput,
): Promise<ApiResponse<SignupResponseData>> => {
  return api
    .post<ApiResponse<SignupResponseData>>("/auth/signup", data)
    .then(({ data }) => data);
};

export const verifyOtpRequest = (
  data: VerifyOtpInput,
): Promise<ApiResponse<VerifyOtpResponseData>> => {
  return api
    .post<ApiResponse<VerifyOtpResponseData>>("/auth/verify-otp", data)
    .then(({ data }) => data);
};

export const resendOtpRequest = (
  data: ResendOtpInput,
): Promise<ApiResponse<ResendOtpResponseData>> => {
  return api
    .post<ApiResponse<VerifyOtpResponseData>>("/auth/resend-otp", data)
    .then(({ data }) => data);
};

export const loginRequest = (
  data: LoginInput,
): Promise<ApiResponse<LoginResponseData>> => {
  return api
    .post<ApiResponse<LoginResponseData>>("/auth/login", data)
    .then(({ data }) => data);
};

export const getMeRequest = async (): Promise<ApiResponse<MeResponseData>> => {
  return api
    .get<ApiResponse<MeResponseData>>("/users/me")
    .then(({ data }) => data);
};

export const refreshTokenRequest = (): Promise<
  ApiResponse<LoginResponseData>
> => {
  return refreshApi
    .post<ApiResponse<LoginResponseData>>("/auth/refresh")
    .then(({ data }) => data);
};

export const forgotPasswordRequest = (
  data: ForgotPasswordInput,
): Promise<ApiResponse<null>> => {
  return api
    .post<ApiResponse<null>>("/auth/forgot-password", data)
    .then(({ data }) => data);
};

export const logoutRequest = (): Promise<ApiResponse<null>> => {
  return api.post<ApiResponse<null>>("/auth/logout").then(({ data }) => data);
};
