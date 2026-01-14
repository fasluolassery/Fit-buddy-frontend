import { createBrowserRouter } from "react-router-dom";
import ForgotPassword from "../features/auth/pages/ForgotPasswordPage";
import LoginPage from "../features/auth/pages/LoginPage";
import ResetPasswordPage from "../features/auth/pages/ResetPasswordPage";
import SignupPage from "../features/auth/pages/SignupPage";
import VerifyOtpPage from "../features/auth/pages/VerifyOtpPage";
import TrainerDashboard from "../features/dashboard/pages/TrainerDashboard";
import UserDashboard from "../features/dashboard/pages/UserDashboard";
import LandingPage from "../features/landing/pages/LandingPage";
import AuthLayout from "../layouts/AuthLayout";
import TrainerLayout from "../layouts/TrainerLayout";
import UserLayout from "../layouts/UserLayout";
import Unauthorized from "./pages/Unauthorized";
import { RoleRedirect } from "../shared/utils/RoleRedirect.utils";
import RequireGuest from "./guards/RequireGuest";
import RequireAuth from "./guards/RequireAuth";
import RequireRole from "./guards/RequireRole";

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
          { path: "/forgot-password", element: <ForgotPassword /> },
          { path: "/reset-password", element: <ResetPasswordPage /> },
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
