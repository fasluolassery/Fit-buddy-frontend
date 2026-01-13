import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import SignupPage from "../features/auth/pages/SignupPage";
import VerifyOtpPage from "../features/auth/pages/VerifyOtpPage";
import TrainerDashboard from "../features/dashboard/pages/TrainerDashboard";
import UserDashboard from "../features/dashboard/pages/UserDashboard";
import LandingPage from "../features/landing/pages/LandingPage";
import AuthLayout from "../layouts/AuthLayout";
import TrainerLayout from "../layouts/TrainerLayout";
import UserLayout from "../layouts/UserLayout";
import RequireAuth from "../shared/guards/RequireAuth";
import RequireGuest from "../shared/guards/RequireGuest";
import RequireRole from "../shared/guards/RequireRole";
import Unauthorized from "../shared/pages/Unauthorized";
import { RoleRedirect } from "../shared/utils/RoleRedirect.utils";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/redirect", element: <RoleRedirect /> },
  { path: "/unauthorized", element: <Unauthorized /> },
  {
    element: <RequireGuest />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: "/login", element: <LoginPage /> },
          { path: "/signup", element: <SignupPage /> },
          { path: "/verify-otp", element: <VerifyOtpPage /> },
        ],
      },
    ],
  },
  {
    element: <RequireAuth />,
    children: [
      {
        element: <RequireRole allowedRoles={["user"]} />,
        children: [
          {
            element: <UserLayout />,
            children: [{ path: "/dashboard", element: <UserDashboard /> }],
          },
        ],
      },
    ],
  },
  {
    element: <RequireAuth />,
    children: [
      {
        element: <RequireRole allowedRoles={["trainer"]} />,
        children: [
          {
            element: <TrainerLayout />,
            children: [
              { path: "/trainer/dashboard", element: <TrainerDashboard /> },
            ],
          },
        ],
      },
    ],
  },
]);
