import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import type { UserRole } from "../types/roles";

type Props = {
  allowedRoles: UserRole[];
};

export default function RequireRole({ allowedRoles }: Props) {
  const { user, isLoading } = useAppSelector((state) => state.auth);
  console.log("RequireRole 5");

  if (isLoading) return <div>Loading....</div>;

  if (!user) {
    return <Navigate to={"/login"} replace />;
  }

  const { role } = user;
  if (!allowedRoles.includes(role)) {
    return <Navigate to={"/unauthorized"} replace />;
  }

  return <Outlet />;
}
