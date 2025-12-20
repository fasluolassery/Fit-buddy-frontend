import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <h2>Auth</h2>
      <Outlet />
    </div>
  );
}
