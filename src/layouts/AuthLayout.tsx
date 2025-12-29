import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  console.log("Auth layout");
  return (
    <div>
      <h2>Auth</h2>
      <Outlet />
    </div>
  );
}
