import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

export default function RequireAuth() {
  const { isAuthenticated } = useAppSelector((s) => s.auth);

  console.log("here at requireAuth: ", isAuthenticated);

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
}
