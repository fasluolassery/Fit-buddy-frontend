import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ApiErrorResponse } from "../../../shared/types/api";
import { ERROR_MESSAGES } from "../../../shared/constants/error-messages";
import { useAppDispatch } from "../../../shared/hooks/redux";
import type { UserOnboardingData } from "../types";
import { completeOnboardingRequest } from "../onboarding.service";
import { updateUser } from "../../auth/auth.slice";
import { notify } from "../../../lib/notify";

function getErrorMessage(err: unknown): string {
  const apiError = err as ApiErrorResponse;
  return apiError?.error?.message ?? ERROR_MESSAGES.UNEXPECTED_ERROR;
}

export function useOnboarding() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitOnboarding = async (data: UserOnboardingData) => {
    try {
      setLoading(true);
      setApiError(null);

      const res = await completeOnboardingRequest(data);
      dispatch(updateUser(res.data));
      notify.success(res.message);

      navigate("/redirect", { replace: true });
    } catch (err) {
      setApiError(getErrorMessage(err));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    submitOnboarding,
    loading,
    apiError,
  };
}
