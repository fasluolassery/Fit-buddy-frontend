import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../shared/hooks/redux";

export default function RequireOnboarding() {
  const { user, isLoading } = useAppSelector((s) => s.auth);
  const location = useLocation();

  if (isLoading) return null;
  if (!user) return <Navigate to="/login" replace />;

  if (!user.onboardingComplete) {
    if (user.role === "trainer") {
      if (location.pathname !== "/trainer/onboarding") {
        return <Navigate to="/trainer/onboarding" replace />;
      }
    }

    if (user.role === "user") {
      if (location.pathname !== "/onboarding") {
        return <Navigate to="/onboarding" replace />;
      }
    }
  }

  return <Outlet />;
}
