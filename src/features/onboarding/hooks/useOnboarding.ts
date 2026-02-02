import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ApiErrorResponse } from "../../../shared/types/api";
import { ERROR_MESSAGES } from "../../../shared/constants/error-messages";
import { useAppDispatch } from "../../../shared/hooks/redux";
import type { UserOnboardingData } from "../types";
import {
  completeOnboardingRequest,
  submitTrainerOnboardingRequest,
} from "../onboarding.service";
import { updateUser } from "../../auth/auth.slice";
import { notify } from "../../../lib/notify";
import type { TrainerOnboardingInput } from "../validation";

function getErrorMessage(err: unknown): string {
  const apiError = err as ApiErrorResponse;
  return apiError?.error?.message ?? ERROR_MESSAGES.UNEXPECTED_ERROR;
}

export function useOnboarding() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const submitUserOnboarding = (payload: UserOnboardingData) =>
    handleRequest(async () => {
      const res = await completeOnboardingRequest(payload);
      const { data, message } = res;

      dispatch(updateUser(data));
      notify.success(message);
      navigate("/redirect", { replace: true });

      return res;
    });

  const submitTrainerOnboarding = (payload: TrainerOnboardingInput) =>
    handleRequest(async () => {
      const formData = new FormData();
      const { bio, certificates, experience, profilePhoto, specializations } =
        payload;

      formData.append("bio", bio);
      formData.append("experience", experience);

      specializations.forEach((s) => formData.append("specializations", s));
      if (profilePhoto) formData.append("profilePhoto", profilePhoto);
      certificates.forEach((file) => formData.append("certificates", file));

      const res = await submitTrainerOnboardingRequest(formData);
      const { data, message } = res;

      dispatch(updateUser(data));
      notify.success(message);
      navigate("/redirect", { replace: true });

      return res;
    });

  return {
    submitUserOnboarding,
    submitTrainerOnboarding,
    loading,
    apiError,
  };
}
