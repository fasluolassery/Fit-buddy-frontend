import {
  Bell,
  //   DollarSign,
  Dumbbell,
  LayoutDashboard,
  LogOut,
  //   Settings,
  //   Shield,
  Users,
} from "lucide-react";
// import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";
import { notify } from "../lib/notify";

export default function AdminLayout() {
  //   const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const navigation = [
    { label: "Overview", icon: LayoutDashboard, path: "/admin/dashboard" },
    { label: "Users", icon: Users, path: "/admin/users" },
    { label: "Trainers", icon: Dumbbell, path: "/admin/trainers" },
    // { label: "Transactions", icon: DollarSign, path: "/admin/payments" },
    // { label: "System", icon: Shield, path: "/admin/system" },
    // { label: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  const handleLogout = async () => {
    const res = await logout();
    notify.success(res.message);
    navigate("/login", { replace: true });
  };

  return (
    <div className="relative min-h-screen bg-[#080808] font-['Inter']">
      {/* Sidebar */}
      <aside className="fixed left-4 top-4 hidden h-[calc(100vh-2rem)] w-72 lg:block">
        <div className="flex h-full flex-col rounded-[2.5rem] border border-[#D4AF37]/10 bg-[#0c0c0c]/90 backdrop-blur-xl">
          <div className="flex h-20 items-center border-b border-zinc-900 px-6">
            <h1 className="text-sm font-bold text-white">
              FitCoach <span className="text-[#D4AF37]">Admin</span>
            </h1>
          </div>

          <nav className="flex-1 space-y-1 px-4 py-6">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-500 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="border-t border-zinc-900 p-4">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-400 hover:bg-red-500/10"
            >
              <LogOut size={18} />
              Sign out
            </button>
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="lg:pl-80">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-zinc-900 bg-[#080808]/70 px-8 backdrop-blur-xl">
          <h2 className="text-xl font-bold text-white">Admin Console</h2>
          <button className="relative rounded-xl border border-zinc-800 bg-[#0c0c0c] p-2.5 text-zinc-400">
            <Bell size={20} />
          </button>
        </header>

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
