import { Outlet, Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-600/20 blur-[140px]" />

      {/* Header */}
      <header className="relative z-10 px-8 py-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-black text-black">F</span>
            </div>
          </div>
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-xl font-bold text-transparent">
            FitBuddy
          </span>
        </Link>
      </header>

      {/* Content */}
      <main className="relative z-10 flex items-start justify-center px-6 pb-16 pt-6">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-900/50 p-6 shadow-2xl shadow-black/60 backdrop-blur-2xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
