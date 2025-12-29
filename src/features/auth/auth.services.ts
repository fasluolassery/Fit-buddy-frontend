import api, { refreshApi } from "../../lib/api";
import type { ApiResponse } from "../../shared/types/api";
import type {
  LoginResponseData,
  MeResponseData,
  SignupResponseData,
  VerifyOtpResponseData,
} from "./types";
import type { LoginInput, SignupInput, VerifyOtpInput } from "./validation";

export const signupRequest = (
  data: SignupInput,
): Promise<ApiResponse<SignupResponseData>> => {
  return api
    .post<ApiResponse<SignupResponseData>>("/auth/signup", data)
    .then((res) => res.data);
};

export const verifyOtpRequest = (
  data: VerifyOtpInput,
): Promise<ApiResponse<VerifyOtpResponseData>> => {
  return api
    .post<ApiResponse<VerifyOtpResponseData>>("/auth/verify-otp", data)
    .then((res) => res.data);
};

export const loginRequest = (
  data: LoginInput,
): Promise<ApiResponse<LoginResponseData>> => {
  return api
    .post<ApiResponse<LoginResponseData>>("/auth/login", data)
    .then((res) => res.data);
};

export const getMeRequest = async (): Promise<ApiResponse<MeResponseData>> => {
  return api
    .get<ApiResponse<MeResponseData>>("/users/me")
    .then((res) => res.data);
};

export const refreshTokenRequest = (): Promise<
  ApiResponse<LoginResponseData>
> => {
  return refreshApi
    .post<ApiResponse<LoginResponseData>>("/auth/refresh")
    .then((res) => res.data);
};

export const logoutRequest = (): Promise<ApiResponse<null>> => {
  return api.post<ApiResponse<null>>("/auth/logout").then((res) => res.data);
};
