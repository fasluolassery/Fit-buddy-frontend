import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

export function RoleRedirect() {
  const { user, isLoading } = useAppSelector((s) => s.auth);

  if (isLoading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  const { isActive, isVerified, role } = user;

  if (!isActive) {
    return <Navigate to="/unauthorized" replace />;
  }

  if (!isVerified) {
    return <Navigate to="/verify-otp" replace />;
  }

  switch (role) {
    case "admin":
      return <Navigate to="/admin/dashboard" replace />;
    case "trainer": {
      // if (!onboardingComplete) {
      //   return <Navigate to="/trainer/onboarding" replace />;
      // }
      // if (status !== "active") {
      //   return <Navigate to="/trainer/status" replace />;
      // }
      return <Navigate to="/trainer/dashboard" replace />;
    }
    case "user": {
      // if (!onboardingComplete) {
      //   return <Navigate to="/onboarding" replace />;
      // }
      return <Navigate to="/dashboard" replace />;
    }
    default:
      return <Navigate to="/unauthorized" replace />;
  }
}
