import api from "../../lib/api";
import type { ApiResponse } from "../../shared/types/api";
import type { AdminUser } from "./types";

export const getAdminUsersRequest = (): Promise<ApiResponse<AdminUser[]>> => {
  return api
    .get<ApiResponse<AdminUser[]>>("/users/admin/users")
    .then(({ data }) => data);
};
