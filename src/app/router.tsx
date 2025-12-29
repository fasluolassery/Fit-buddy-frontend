import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import SignupPage from "../features/auth/pages/SignupPage";
import VerifyOtpPage from "../features/auth/pages/VerifyOtpPage";
import LoginPage from "../features/auth/pages/LoginPage";
import Unauthorized from "../shared/pages/Unauthorized";
import RequireGuest from "../shared/guards/RequireGuest";
import LandingPage from "../features/landing/pages/LandingPage";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
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
  { path: "/unauthorized", element: <Unauthorized /> },
]);
