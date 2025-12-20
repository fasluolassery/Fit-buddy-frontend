import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import SignupPage from "../features/auth/pages/SignupPage";
import VerifyOtpPage from "../features/auth/pages/VerifyOtpPage";
import LoginPage from "../features/auth/pages/LoginPage";
import RequireAuth from "../shared/guards/RequireAuth";
import RequireRole from "../shared/guards/RequireRole";
import Unauthorized from "../shared/pages/Unauthorized";

// placeholder pages
// eslint-disable-next-line react-refresh/only-export-components
const UserDashboard = () => <div>User Dashboard</div>;
// eslint-disable-next-line react-refresh/only-export-components
const AdminDashboard = () => <div>Admin Dashboard</div>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "signup", element: <SignupPage /> },
      {
        path: "verify-otp",
        element: <VerifyOtpPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
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
            path: "/dashboard",
            element: <UserDashboard />,
          },
        ],
      },
      {
        element: <RequireRole allowedRoles={["admin"]} />,
        children: [
          {
            path: "/admin",
            element: <AdminDashboard />,
          },
        ],
      },
    ],
  },

  { path: "/unauthorized", element: <Unauthorized /> },
]);
