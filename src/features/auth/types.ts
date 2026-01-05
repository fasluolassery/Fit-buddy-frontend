import type { UserRole } from "../../shared/types/roles";

export interface SignupResponseData {
  email: string;
}

export interface VerifyOtpResponseData {
  email: string;
  isVerified: boolean;
}

export interface ResendOtpResponseData {
  email: string;
}

export interface LoginResponseData {
  accessToken: string;
  user: {
    _id: string;
    email: string;
    role: UserRole;
  };
}

export interface MeResponseData {
  _id: string;
  email: string;
  role: UserRole;
}
