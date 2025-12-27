import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import type { UserRole } from "../types/roles";

type Props = {
  allowedRoles: UserRole[];
};

export default function RequireRole({ allowedRoles }: Props) {
  const { user } = useAppSelector((state) => state.auth);
  console.log("here at requireRole: ", user?.email);

  if (!user) {
    return <Navigate to={"/login"} replace />;
  }

  const { role } = user;
  if (!allowedRoles.includes(role)) {
    return <Navigate to={"/unauthorized"} replace />;
  }

  return <Outlet />;
}
