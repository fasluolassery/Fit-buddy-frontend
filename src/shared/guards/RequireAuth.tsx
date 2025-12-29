import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

export default function RequireAuth() {
  console.log("RequireAuth 4");
  const { user, isLoading } = useAppSelector((s) => s.auth);

  if (isLoading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
}
