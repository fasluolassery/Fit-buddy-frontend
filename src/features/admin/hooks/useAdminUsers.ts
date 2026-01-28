import { useCallback, useState } from "react";
import { ERROR_MESSAGES } from "../../../shared/constants/error-messages";
import type { ApiErrorResponse } from "../../../shared/types/api";
import { getAdminUsersRequest } from "../admin.services";
import type { AdminUser } from "../types";

function getErrorMessage(err: unknown): string {
  const apiError = err as ApiErrorResponse;
  return apiError?.error?.message ?? ERROR_MESSAGES.UNEXPECTED_ERROR;
}

export function useAdminUsers() {
  const [users, setUsers] = useState<AdminUser[]>([]);
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

  const fetchUsers = useCallback(() => {
    return handleRequest(async () => {
      const res = await getAdminUsersRequest();
      setUsers(res.data);
      return res;
    });
  }, []);

  return {
    users,
    fetchUsers,
    loading,
    apiError,
  };
}
