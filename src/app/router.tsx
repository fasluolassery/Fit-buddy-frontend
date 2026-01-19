import { createBrowserRouter } from "react-router-dom";
import AdminLoginpage from "../features/admin/pages/AdminLoginpage";
import ForgotPassword from "../features/auth/pages/ForgotPasswordPage";
import LoginPage from "../features/auth/pages/LoginPage";
import ResetPasswordPage from "../features/auth/pages/ResetPasswordPage";
import SignupPage from "../features/auth/pages/SignupPage";
import VerifyOtpPage from "../features/auth/pages/VerifyOtpPage";
import TrainerDashboard from "../features/dashboard/pages/TrainerDashboard";
import UserDashboard from "../features/dashboard/pages/UserDashboard";
import { LandingPage } from "../features/landing/pages/LandingPage";
import AuthLayout from "../layouts/AuthLayout";
import TrainerLayout from "../layouts/TrainerLayout";
import UserLayout from "../layouts/UserLayout";
import { RoleRedirect } from "../shared/utils/RoleRedirect.utils";
import RequireAuth from "./guards/RequireAuth";
import RequireGuest from "./guards/RequireGuest";
import RequireRole from "./guards/RequireRole";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
    children: [
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
          { path: "/admin/login", element: <AdminLoginpage /> },
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
                children: [
                  { path: "/dashboard", element: <UserDashboard /> },
                  { path: "/onboarding", element: <h1>User Onboarding</h1> },
                ],
              },
            ],
          },
          {
            element: <RequireRole allowedRoles={["trainer"]} />,
            children: [
              {
                element: <TrainerLayout />,
                children: [
                  { path: "/trainer/dashboard", element: <TrainerDashboard /> },
                  {
                    path: "/trainer/onboarding",
                    element: <h1>Trainer onboarding</h1>,
                  },
                  { path: "/trainer/status", element: <h1>Trainer Status</h1> },
                ],
              },
            ],
          },
          { path: "/admin/dashboard", element: <h1>Admin Dashboard</h1> },
        ],
      },
    ],
  },
]);
