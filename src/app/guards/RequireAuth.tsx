import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../shared/hooks/redux";

export default function RequireAuth() {
  const { user, isLoading } = useAppSelector((s) => s.auth);

  if (isLoading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
}
