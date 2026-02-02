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

export interface AuthUser {
  _id: string;
  email: string;
  role: UserRole;
  name?: string;
  profilePhoto?: string;
  onboardingComplete: boolean;
  isVerified: boolean;
  isActive: boolean;
  trainerApprovalStatus?: "approved" | "pending" | "rejected";
  createdAt: Date;
}

export interface LoginResponseData {
  user: AuthUser;
  accessToken: string;
}

export interface RefreshResponseData {
  accessToken: string;
}

export interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  isLoading: boolean;
}

export interface ResetPasswordReqData {
  token: string;
  newPassword: string;
}
