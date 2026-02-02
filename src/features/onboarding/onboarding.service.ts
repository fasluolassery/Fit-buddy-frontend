import api from "../../lib/api";
import type { ApiResponse } from "../../shared/types/api";
import type { AuthUser } from "../auth/types";
import type { UserOnboardingData } from "./types";

export const completeOnboardingRequest = (
  data: UserOnboardingData,
): Promise<ApiResponse<AuthUser>> => {
  return api
    .patch<ApiResponse<AuthUser>>("/users/onboarding/user", data)
    .then(({ data }) => data);
};
