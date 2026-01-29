import api from "../../lib/api";
import type { ApiResponse } from "../../shared/types/api";
import type { AdminUser } from "./types";

export const getAdminUsersRequest = (): Promise<ApiResponse<AdminUser[]>> => {
  return api
    .get<ApiResponse<AdminUser[]>>("/users/admin/users")
    .then(({ data }) => data);
};

export const blockUserRequest = (
  userId: string,
): Promise<ApiResponse<null>> => {
  return api
    .patch<ApiResponse<null>>(`/users/admin/users/${userId}/block`)
    .then(({ data }) => data);
};

export const unblockUserRequest = (
  userId: string,
): Promise<ApiResponse<null>> => {
  return api
    .patch<ApiResponse<null>>(`/users/admin/users/${userId}/unblock`)
    .then(({ data }) => data);
};
