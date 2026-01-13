import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

export default function RequireGuest() {
  const { user, isLoading } = useAppSelector((s) => s.auth);

  if (isLoading) return <div>Loading....</div>;

  if (user) return <Navigate to="/redirect" replace />;

  return <Outlet />;
}
