import { useState } from "react";
import {
  Home,
  Dumbbell,
  Users,
  Calendar,
  Award,
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
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("dashboard");
  const [profileOpen, setProfileOpen] = useState(false);

  const navigation = [
    { id: "dashboard", name: "Dashboard", icon: Home, path: "/dashboard" },
    { id: "workouts", name: "Workouts", icon: Dumbbell, path: "/workouts" },
    { id: "community", name: "Community", icon: Users, path: "/community" },
    { id: "schedule", name: "Schedule", icon: Calendar, path: "/schedule" },
    {
      id: "achievements",
      name: "Achievements",
      icon: Award,
      path: "/achievements",
    },
  ];

  const user = {
    name: "Alex Johnson",
    email: "alex@fitbuddy.com",
    avatar: "AJ",
    streak: 12,
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-950 text-white">
      {/* Ambient Background Effects */}
      <div className="fixed left-0 top-0 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-amber-600/10 blur-[140px]" />
      <div className="fixed bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-amber-500/10 blur-[120px]" />

      {/* Sidebar - Desktop */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 border-r border-white/5 bg-zinc-900/40 backdrop-blur-xl lg:block">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center gap-3 border-b border-white/5 px-6">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-lg shadow-amber-500/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-black text-black">F</span>
              </div>
            </div>
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-xl font-bold tracking-tight text-transparent">
              FitBuddy
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-6">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={`group relative flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-amber-500/10 text-amber-400 shadow-lg shadow-amber-500/5"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 h-8 w-1 rounded-r-full bg-gradient-to-b from-amber-400 to-amber-600" />
                  )}
                  <Icon
                    size={20}
                    className={isActive ? "text-amber-400" : ""}
                  />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Streak Card */}
          <div className="mx-4 mb-4 rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-amber-600/5 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20">
                <Flame size={24} className="text-amber-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-400">
                  {user.streak} Days
                </p>
                <p className="text-xs text-zinc-400">Current Streak</p>
              </div>
            </div>
          </div>

          {/* User Profile */}
          <div className="border-t border-white/5 p-4">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="group flex w-full items-center gap-3 rounded-xl p-3 transition-all hover:bg-white/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 font-semibold text-black">
                {user.avatar}
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-zinc-500">View Profile</p>
              </div>
              <ChevronDown
                size={16}
                className={`text-zinc-400 transition-transform ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Profile Dropdown */}
            {profileOpen && (
              <div className="mt-2 space-y-1 rounded-xl border border-white/10 bg-zinc-900/60 p-2 backdrop-blur-xl">
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
            )}
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <aside
            className="absolute left-0 top-0 h-screen w-72 border-r border-white/5 bg-zinc-900/95 backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full flex-col">
              {/* Mobile Header */}
              <div className="flex h-20 items-center justify-between border-b border-white/5 px-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-black text-black">F</span>
                    </div>
                  </div>
                  <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-xl font-bold text-transparent">
                    FitBuddy
                  </span>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-6">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeNav === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveNav(item.id);
                        setSidebarOpen(false);
                      }}
                      className={`group relative flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                        isActive
                          ? "bg-amber-500/10 text-amber-400"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute left-0 h-8 w-1 rounded-r-full bg-gradient-to-b from-amber-400 to-amber-600" />
                      )}
                      <Icon size={20} />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Streak Card */}
              <div className="mx-4 mb-4 rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-amber-600/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20">
                    <Flame size={24} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-amber-400">
                      {user.streak} Days
                    </p>
                    <p className="text-xs text-zinc-400">Current Streak</p>
                  </div>
                </div>
              </div>

              {/* User Profile */}
              <div className="border-t border-white/5 p-4">
                <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 font-semibold text-black">
                    {user.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">
                      {user.name}
                    </p>
                    <p className="text-xs text-zinc-500">{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Top Header */}
        <header className="sticky top-0 z-30 border-b border-white/5 bg-zinc-900/40 backdrop-blur-xl">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Mobile Menu Button & Title */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-zinc-400 transition-colors hover:text-white lg:hidden"
              >
                <Menu size={24} />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white sm:text-2xl">
                  {navigation.find((n) => n.id === activeNav)?.name}
                </h1>
                <p className="text-xs text-zinc-500 sm:text-sm">
                  Welcome back, {user.name.split(" ")[0]}!
                </p>
              </div>
            </div>

            {/* Search & Actions */}
            <div className="flex items-center gap-3">
              {/* Search - Hidden on mobile */}
              <div className="relative hidden sm:block">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 rounded-xl border border-white/10 bg-zinc-900/60 py-2 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              {/* Notifications */}
              <button className="relative rounded-xl border border-white/10 bg-zinc-900/60 p-2.5 text-zinc-400 transition-all hover:border-amber-500/30 hover:bg-amber-500/5 hover:text-amber-400">
                <Bell size={20} />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-amber-500 ring-2 ring-zinc-900" />
              </button>

              {/* Profile - Desktop Only */}
              <button className="hidden items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/60 p-2 pr-3 transition-all hover:border-amber-500/30 hover:bg-amber-500/5 lg:flex">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-sm font-semibold text-black">
                  {user.avatar}
                </div>
                <span className="text-sm font-medium text-white">
                  {user.name.split(" ")[0]}
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content - Outlet renders here */}
        <main className="relative min-h-[calc(100vh-5rem)]">
          {/* This is where your routed pages will render via <Outlet /> */}
          <div className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
