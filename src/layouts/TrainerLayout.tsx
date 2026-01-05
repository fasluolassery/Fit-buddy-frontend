import { useState } from "react";
import {
  Users,
  Calendar,
  Video,
  MessageSquare,
  Wallet,
  LayoutDashboard,
  Dumbbell,
  UtensilsCrossed,
  BarChart3,
  ChevronRight,
  Bell,
  Settings,
  Search,
  User,
  LogOut,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Outlet } from "react-router-dom";

export default function TrainerLayout() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const trainer = {
    name: "Aravind Kumar",
    role: "Certified Trainer",
    avatar: "AK",
    email: "aravind@fitcoach.com",
  };

  const navigation = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "clients", label: "Clients", icon: Users, badge: "47" },
    { id: "sessions", label: "Sessions", icon: Video, badge: "6" },
    { id: "workouts", label: "Workout Library", icon: Dumbbell },
    { id: "meals", label: "Meal Library", icon: UtensilsCrossed },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "messages", label: "Messages", icon: MessageSquare, badge: "3" },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "wallet", label: "Wallet", icon: Wallet },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-['Inter'] selection:bg-[#D4AF37] selection:text-black">
      {/* Subtle Background Effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="bg-[#D4AF37]/3 absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full blur-[150px]" />
        <div className="bg-[#D4AF37]/2 absolute bottom-0 right-1/4 h-[800px] w-[800px] rounded-full blur-[200px]" />
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`${
          sidebarCollapsed ? "w-20" : "w-72"
        } fixed left-4 top-4 z-40 hidden h-[calc(100vh-2rem)] transition-all duration-300 lg:block`}
      >
        <div className="flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-zinc-900 bg-[#0c0c0c]/80 shadow-2xl backdrop-blur-2xl">
          {/* Logo */}
          <div className="flex h-20 items-center justify-between border-b border-zinc-900 px-6">
            {!sidebarCollapsed && (
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA8B2E] shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <Dumbbell
                    size={20}
                    className="text-black"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <h1 className="text-sm font-bold leading-none text-white">
                    FitCoach <span className="text-[#D4AF37]">Pro</span>
                  </h1>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]/60">
                    Trainer Portal
                  </p>
                </div>
              </div>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white"
            >
              <ChevronRight
                size={18}
                className={`transition-transform ${sidebarCollapsed ? "" : "rotate-180"}`}
              />
            </button>
          </div>

          {/* Navigation */}
          <nav className="no-scrollbar relative flex-1 space-y-1 overflow-y-auto px-4 py-6">
            {/* Active indicator background */}
            <div
              className="absolute inset-x-3 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{
                top: `${24 + navigation.findIndex((n) => n.id === activeTab) * 52 + 2}px`,
                height: "48px",
                opacity:
                  navigation.findIndex((n) => n.id === activeTab) !== -1
                    ? 1
                    : 0,
              }}
            />

            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`group relative z-10 flex h-[48px] w-full items-center gap-3 rounded-xl px-4 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                  {!sidebarCollapsed && (
                    <>
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <span className="rounded-full bg-[#D4AF37] px-2 py-0.5 text-[10px] font-bold text-black">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Profile Section */}
          <div className="relative border-t border-zinc-900 p-4">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className={`flex w-full items-center gap-3 rounded-2xl p-2 transition-all hover:bg-white/5 ${
                profileOpen ? "bg-white/5" : ""
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white">
                {trainer.avatar}
              </div>
              {!sidebarCollapsed && (
                <>
                  <div className="flex-1 text-left">
                    <p className="text-xs font-bold text-white">
                      {trainer.name}
                    </p>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-[#D4AF37]/60">
                      {trainer.role}
                    </p>
                  </div>
                  <ChevronDown
                    size={14}
                    className={`text-zinc-500 transition-transform ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                  />
                </>
              )}
            </button>

            {/* Profile Dropdown */}
            {profileOpen && !sidebarCollapsed && (
              <div className="mt-2 rounded-xl border border-white/10 bg-zinc-900/60 p-2 backdrop-blur-xl">
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
                  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-400 transition-colors hover:bg-red-500/10">
                    <LogOut size={16} />
                    <span>Sign out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="transition-all duration-500 lg:pl-80">
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-zinc-900 bg-[#0a0a0a]/60 px-8 backdrop-blur-2xl">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-zinc-400 transition-colors hover:text-white lg:hidden"
            >
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white">
                {navigation.find((n) => n.id === activeTab)?.label}
              </h1>
              <p className="mt-0.5 text-xs text-zinc-500">
                Monday, January 05, 2026 • Good Morning!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search clients, sessions..."
                className="h-10 w-80 rounded-xl border border-zinc-800 bg-[#0c0c0c] px-4 pl-10 text-sm text-white placeholder-zinc-600 focus:border-[#D4AF37]/30 focus:outline-none"
              />
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600"
              />
            </div>
            <button className="relative rounded-xl border border-zinc-800 bg-[#0c0c0c] p-2.5 text-zinc-400 transition-colors hover:border-[#D4AF37]/30 hover:text-white">
              <Bell size={20} />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#D4AF37]" />
            </button>
            <button className="rounded-xl border border-zinc-800 bg-[#0c0c0c] p-2.5 text-zinc-400 transition-colors hover:border-[#D4AF37]/30 hover:text-white">
              <Settings size={20} />
            </button>
          </div>
        </header>

        {/* Dashboard Content Area - This will be replaced by the separate dashboard component */}
        <main className="relative z-10 p-8">
          {/* outlet here */}
          <Outlet />
          {/* <div className="flex h-[60vh] items-center justify-center rounded-[2rem] border border-zinc-900 bg-[#0c0c0c]">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">
                Dashboard Content Goes Here
              </h2>
              <p className="mt-2 text-sm text-zinc-500">
                This will be replaced by the TrainerDashboard component
              </p>
            </div>
          </div> */}
        </main>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="fixed left-0 top-0 h-full w-72 border-r border-zinc-900 bg-[#0c0c0c] p-8 shadow-2xl">
            <div className="mb-12 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA8B2E]">
                  <Dumbbell className="text-black" size={20} />
                </div>
                <span className="text-lg font-bold text-white">
                  FitCoach Pro
                </span>
              </div>
              <button onClick={() => setSidebarOpen(false)}>
                <X size={24} className="text-zinc-500" />
              </button>
            </div>
            <nav className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold ${
                      activeTab === item.id
                        ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                        : "text-zinc-500"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto rounded-full bg-[#D4AF37] px-2 py-0.5 text-[10px] font-bold text-black">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}
