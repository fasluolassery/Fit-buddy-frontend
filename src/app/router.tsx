import { createBrowserRouter } from "react-router-dom";
import AdminLoginpage from "../features/admin/pages/AdminLoginpage";
import AdminTrainersPage from "../features/admin/pages/AdminTrainersPage";
import AdminUsersPage from "../features/admin/pages/AdminUsersPage";
import ForgotPassword from "../features/auth/pages/ForgotPasswordPage";
import LoginPage from "../features/auth/pages/LoginPage";
import ResetPasswordPage from "../features/auth/pages/ResetPasswordPage";
import SignupPage from "../features/auth/pages/SignupPage";
import VerifyOtpPage from "../features/auth/pages/VerifyOtpPage";
import AdminDashboard from "../features/dashboard/pages/AdminDashboard";
import TrainerDashboard from "../features/dashboard/pages/TrainerDashboard";
import UserDashboard from "../features/dashboard/pages/UserDashboard";
import { LandingPage } from "../features/landing/pages/LandingPage";
import AdminLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";
import TrainerLayout from "../layouts/TrainerLayout";
import UserLayout from "../layouts/UserLayout";
import { RoleRedirect } from "../shared/utils/RoleRedirect.utils";
import RequireAuth from "./guards/RequireAuth";
import RequireGuest from "./guards/RequireGuest";
import RequireRole from "./guards/RequireRole";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";
import RequireOnboarding from "./guards/RequireOnboarding";
import UserOnboardingPage from "../features/onboarding/pages/UserOnboardingPage";

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
                element: <RequireOnboarding />,
                children: [
                  {
                    path: "/onboarding",
                    element: <UserOnboardingPage />,
                  },
                  {
                    element: <UserLayout />,
                    children: [
                      { path: "/dashboard", element: <UserDashboard /> },
                    ],
                  },
                ],
              },
            ],
          },
          {
            element: <RequireRole allowedRoles={["trainer"]} />,
            children: [
              {
                element: <RequireOnboarding />,
                children: [
                  {
                    element: <TrainerLayout />,
                    children: [
                      {
                        path: "/trainer/dashboard",
                        element: <TrainerDashboard />,
                      },
                      {
                        path: "/trainer/onboarding",
                        element: <h1>Trainer onboarding</h1>,
                      },
                      {
                        path: "/trainer/status",
                        element: <h1>Trainer Status</h1>,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            element: <RequireRole allowedRoles={["admin"]} />,
            children: [
              {
                element: <AdminLayout />,
                children: [
                  { path: "/admin/dashboard", element: <AdminDashboard /> },
                  { path: "/admin/users", element: <AdminUsersPage /> },
                  { path: "/admin/trainers", element: <AdminTrainersPage /> },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
