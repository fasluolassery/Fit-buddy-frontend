import api from "../../lib/api";
import type { ApiResponse } from "../../shared/types/api";
import type {
  LoginResponseData,
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

export const getMeRequest = async (): Promise<
  ApiResponse<LoginResponseData>
> => {
  return api
    .get<ApiResponse<LoginResponseData>>("/auth/me")
    .then((res) => res.data);
};
