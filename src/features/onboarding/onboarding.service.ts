import api from "../../lib/api";
import type { ApiResponse } from "../../shared/types/api";
import type { AuthUser } from "../auth/types";
import type { UserOnboardingData } from "./types";

export interface OnboardingResponse {
  user: AuthUser;
}

export const completeOnboardingRequest = (
  data: UserOnboardingData,
): Promise<ApiResponse<OnboardingResponse>> => {
  return api
    .patch<ApiResponse<OnboardingResponse>>("/users/onboarding/user", data)
    .then(({ data }) => data);
};
