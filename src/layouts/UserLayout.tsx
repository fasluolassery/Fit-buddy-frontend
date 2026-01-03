import { useState } from "react";
import {
  Home,
  Dumbbell,
  //   Users,
  //   Calendar,
  //   Award,
  User,
  Settings,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  Flame,
} from "lucide-react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function UserLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navbarProfileOpen, setNavbarProfileOpen] = useState(false);
  const [sidebarProfileOpen, setSidebarProfileOpen] = useState(false);

  const navigation = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: Home,
      path: "/dashboard",
    },
    // {
    //   id: "workouts",
    //   name: "Workouts",
    //   icon: Dumbbell,
    //   path: "/hybrid/workouts",
    // },
    // {
    //   id: "community",
    //   name: "Community",
    //   icon: Users,
    //   path: "/hybrid/community",
    // },
    // {
    //   id: "schedule",
    //   name: "Schedule",
    //   icon: Calendar,
    //   path: "/hybrid/schedule",
    // },
    // {
    //   id: "achievements",
    //   name: "Achievements",
    //   icon: Award,
    //   path: "/hybrid/achievements",
    // },
  ];

  const user = {
    name: "Alex Johnson",
    email: "alex@fitbuddy.com",
    avatar: "AJ",
    streak: 12,
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-300 selection:bg-[#D4AF37] selection:text-black">
      {/* Subtle Depth Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />
        <div className="bg-[#D4AF37]/3 absolute bottom-0 right-1/4 h-[800px] w-[800px] rounded-full blur-[200px]" />
      </div>

      {/* Sidebar - Desktop */}
      <aside className="fixed left-4 top-4 z-40 hidden h-[calc(100vh-2rem)] w-72 lg:block">
        <div className="flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-[#D4AF37]/10 bg-[#0c0c0c]/80 shadow-2xl backdrop-blur-2xl">
          {/* Logo */}
          <div className="flex h-24 items-center gap-3 border-b border-[#D4AF37]/5 px-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#AA8B2E] shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <Dumbbell className="text-black" size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col tracking-tight">
              <span className="text-xl font-extrabold leading-none text-white">
                Fit<span className="text-[#D4AF37]">Buddy</span>
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]/80">
                Elite Edition
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="no-scrollbar relative flex-1 space-y-1 overflow-y-auto px-4 py-6">
            {/* Sliding Background Indicator */}
            <div
              className="absolute inset-x-3 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{
                top: `${24 + navigation.findIndex((n) => isActive(n.path)) * 52 + 2}px`,
                height: "48px",
                opacity:
                  navigation.findIndex((n) => isActive(n.path)) !== -1 ? 1 : 0,
              }}
            />

            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className={`group relative z-10 flex h-[48px] w-full items-center gap-3 rounded-xl px-5 transition-all duration-300 ${
                    active ? "text-[#D4AF37]" : "text-zinc-500 hover:text-white"
                  }`}
                >
                  <Icon
                    size={20}
                    className={`transition-all duration-300 ${active ? "text-[#D4AF37]" : "group-hover:text-white"}`}
                  />
                  <span className="font-semibold">{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Streak Card */}
          <div className="mx-4 mb-4 rounded-3xl border border-[#D4AF37]/10 bg-gradient-to-br from-[#D4AF37]/5 to-transparent p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 shadow-inner">
                <Flame size={24} className="text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-2xl font-bold tabular-nums text-white">
                  {user.streak}
                </p>
                <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                  Day Streak
                </p>
              </div>
            </div>
          </div>

          {/* User Profile - Sidebar Trigger */}
          <div className="relative border-t border-[#D4AF37]/5 p-4">
            <button
              onClick={() => setSidebarProfileOpen(!sidebarProfileOpen)}
              className={`flex w-full items-center gap-3 rounded-2xl p-2 transition-all hover:bg-white/5 ${sidebarProfileOpen ? "bg-white/5" : ""}`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#151515] text-xs font-bold text-[#D4AF37]">
                {user.avatar}
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs font-bold tracking-wide text-white">
                  {user.name}
                </p>
                <p className="text-[10px] font-medium uppercase text-[#D4AF37]/60">
                  Management
                </p>
              </div>
              <ChevronDown
                size={14}
                className={`text-zinc-500 transition-transform ${sidebarProfileOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Sidebar Dropdown Card (V1 Style) - Now below the button */}
            {sidebarProfileOpen && (
              <div className="animate-in fade-in slide-in-from-top-2 mt-2 rounded-xl border border-white/10 bg-zinc-900/60 p-2 backdrop-blur-xl duration-200">
                <div className="space-y-1">
                  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white">
                    <User size={16} />
                    <span>Profile</span>
                  </button>
                  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white">
                    <Settings size={16} />
                    <span>Settings</span>
                  </button>
                  <div className="my-1 h-px bg-white/10" />
                  <button
                    onClick={() => navigate("/login")}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-400 transition-colors hover:bg-red-500/10"
                  >
                    <LogOut size={16} />
                    <span>Sign out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="transition-all duration-500 lg:pl-80">
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-24 items-center justify-between border-b border-[#D4AF37]/5 bg-[#050505]/60 px-8 backdrop-blur-2xl">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-zinc-400 transition-colors hover:text-white lg:hidden"
            >
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                {navigation.find((n) => isActive(n.path))?.name || "Overview"}
              </h1>
              <p className="mt-0.5 text-xs font-medium text-zinc-500">
                Welcome back to growth, {user.name.split(" ")[0]}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
              />
              <input
                type="text"
                placeholder="Universal Search..."
                className="w-72 rounded-full border border-zinc-800 bg-zinc-900/30 py-2.5 pl-11 pr-6 text-xs text-white backdrop-blur-md transition-all placeholder:text-zinc-600 focus:border-[#D4AF37]/30 focus:outline-none"
              />
            </div>

            {/* Notifications */}
            <button className="relative rounded-2xl border border-zinc-800 bg-[#0c0c0c] p-3 text-zinc-500 transition-all hover:border-[#D4AF37]/20 hover:text-[#D4AF37]">
              <Bell size={20} />
              <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-[#D4AF37] ring-4 ring-[#050505]" />
            </button>

            {/* Profile - Navbar Trigger (Desktop) */}
            <div className="relative">
              <button
                onClick={() => setNavbarProfileOpen(!navbarProfileOpen)}
                className={`hidden items-center gap-3 rounded-full border border-[#D4AF37]/10 bg-[#0c0c0c] p-1.5 pr-4 transition-all hover:border-[#D4AF37]/30 hover:bg-[#111111] lg:flex ${navbarProfileOpen ? "border-[#D4AF37]/30 bg-[#111111]" : ""}`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA8B2E] text-sm font-bold text-black shadow-inner">
                  {user.avatar}
                </div>
                <span className="text-sm font-semibold text-white">
                  {user.name.split(" ")[0]}
                </span>
                <ChevronDown
                  size={14}
                  className={`text-zinc-500 transition-transform ${navbarProfileOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Card (Navbar Style) */}
              {navbarProfileOpen && (
                <div className="animate-in fade-in zoom-in slide-in-from-top-4 absolute right-0 top-full mt-4 w-72 rounded-[2rem] border border-[#D4AF37]/10 bg-[#0c0c0c] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl duration-200">
                  <div className="mb-4 flex flex-col items-center border-b border-[#D4AF37]/5 pb-6">
                    <div className="mb-4 h-20 w-20 rounded-full border-2 border-[#D4AF37]/20 p-1">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA8B2E] text-2xl font-black text-black">
                        {user.avatar}
                      </div>
                    </div>
                    <p className="text-lg font-bold tracking-tight text-white">
                      {user.name}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase italic tracking-[0.2em] text-[#D4AF37]">
                      Elite Member
                    </p>
                  </div>
                  <div className="space-y-2">
                    <button className="group flex w-full items-center gap-4 rounded-[1.25rem] px-4 py-3.5 text-sm font-semibold text-zinc-400 transition-all hover:bg-[#D4AF37]/10 hover:text-white">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 group-hover:border-[#D4AF37]/20 group-hover:text-[#D4AF37]">
                        <User size={16} />
                      </div>
                      <span>Profile Matrix</span>
                    </button>
                    <button className="group flex w-full items-center gap-4 rounded-[1.25rem] px-4 py-3.5 text-sm font-semibold text-zinc-400 transition-all hover:bg-[#D4AF37]/10 hover:text-white">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 group-hover:border-[#D4AF37]/20 group-hover:text-[#D4AF37]">
                        <Settings size={16} />
                      </div>
                      <span>System Config</span>
                    </button>
                    <div className="my-4 h-px bg-[#D4AF37]/5" />
                    <button
                      onClick={() => navigate("/login")}
                      className="group flex w-full items-center gap-4 rounded-[1.25rem] px-4 py-3.5 text-sm font-bold text-red-500 transition-all hover:bg-red-500/10"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10">
                        <LogOut size={16} />
                      </div>
                      <span>Terminate Session</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="p-8">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="fixed left-0 top-0 h-full w-72 border-r border-[#D4AF37]/10 bg-[#0c0c0c] p-8 shadow-2xl">
            <div className="mb-12 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA8B2E]">
                  <Dumbbell className="text-black" size={20} />
                </div>
                <span className="text-lg font-bold">FitBuddy</span>
              </div>
              <button onClick={() => setSidebarOpen(false)}>
                <X size={24} className="text-zinc-500" />
              </button>
            </div>
            <nav className="space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(item.path);
                    setSidebarOpen(false);
                  }}
                  className={`flex w-full items-center gap-4 py-3 text-sm font-semibold ${isActive(item.path) ? "text-[#D4AF37]" : "text-zinc-500"}`}
                >
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}
