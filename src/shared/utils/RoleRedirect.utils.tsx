import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

export function RoleRedirect() {
  const { user, isLoading } = useAppSelector((s) => s.auth);

  if (isLoading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  const { isVerified, role } = user;

  if (!isVerified) {
    return <Navigate to="/verify-otp" replace />;
  }

  switch (role) {
    case "admin": {
      return <Navigate to="/admin/dashboard" replace />;
    }
    case "trainer": {
      return <Navigate to="/trainer/dashboard" replace />;
    }
    case "user": {
      return <Navigate to="/dashboard" replace />;
    }
    default:
      return <Navigate to="/unauthorized" replace />;
  }
}
