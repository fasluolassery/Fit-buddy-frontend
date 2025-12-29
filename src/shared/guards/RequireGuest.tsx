import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

export default function RequireGuest() {
  console.log("RequireGuest 6");
  const { user, isLoading } = useAppSelector((s) => s.auth);

  if (isLoading) return <div>Loading....</div>;

  if (user) {
    return user.role === "admin" ? (
      <Navigate to="/admin" replace />
    ) : (
      <Navigate to="/dashboard" replace />
    );
  }

  return <Outlet />;
}
