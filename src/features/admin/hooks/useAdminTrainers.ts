// hooks/useAdminTrainers.ts
import { useCallback, useState } from "react";
import { ERROR_MESSAGES } from "../../../shared/constants/error-messages";
import type { ApiErrorResponse } from "../../../shared/types/api";
import type { AdminTrainer } from "../types";
import {
  getAdminTrainersRequest,
  approveTrainerRequest,
  rejectTrainerRequest,
  blockUserRequest,
  unblockUserRequest,
} from "../admin.services";

function getErrorMessage(err: unknown): string {
  const apiError = err as ApiErrorResponse;
  return apiError?.error?.message ?? ERROR_MESSAGES.UNEXPECTED_ERROR;
}

export function useAdminTrainers() {
  const [trainers, setTrainers] = useState<AdminTrainer[]>([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

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

  const fetchTrainers = useCallback(() => {
    return handleRequest(async () => {
      const res = await getAdminTrainersRequest();
      setTrainers(res.data);
      return res;
    });
  }, []);

  const approveTrainer = async (trainerId: string) => {
    await handleRequest(async () => {
      await approveTrainerRequest(trainerId);
      setTrainers((prev) =>
        prev.map((t) =>
          t._id === trainerId ? { ...t, trainerApprovalStatus: "approved" } : t,
        ),
      );
    });
  };

  const rejectTrainer = async (trainerId: string, reason: string) => {
    await handleRequest(async () => {
      await rejectTrainerRequest(trainerId, reason);
      setTrainers((prev) =>
        prev.map((t) =>
          t._id === trainerId ? { ...t, trainerApprovalStatus: "rejected" } : t,
        ),
      );
    });
  };

  const blockTrainer = async (trainerId: string) => {
    await handleRequest(async () => {
      await blockUserRequest(trainerId);
      setTrainers((prev) =>
        prev.map((t) => (t._id === trainerId ? { ...t, isBlocked: true } : t)),
      );
    });
  };

  const unblockTrainer = async (trainerId: string) => {
    await handleRequest(async () => {
      await unblockUserRequest(trainerId);
      setTrainers((prev) =>
        prev.map((t) => (t._id === trainerId ? { ...t, isBlocked: false } : t)),
      );
    });
  };

  return {
    trainers,
    fetchTrainers,
    approveTrainer,
    rejectTrainer,
    blockTrainer,
    unblockTrainer,
    loading,
    apiError,
  };
}
