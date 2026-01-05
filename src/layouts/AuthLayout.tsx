import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Crown } from "lucide-react";
import FluidBackground from "../shared/components/ui/FluidBackground";

export default function AuthLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthPage = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <FluidBackground />

      {/* Header */}
      <header className="relative z-10 px-8 py-3">
        <Link to="/" className="group/logo flex items-center gap-3">
          <div className="border-brand-primary/20 bg-brand-primary/5 relative flex h-11 w-11 items-center justify-center rounded-xl border backdrop-blur-md">
            <Crown
              size={22}
              className="text-brand-primary"
              fill="currentColor"
            />
          </div>
          <div className="flex flex-col tracking-widest">
            <span className="text-lg font-black leading-none text-white">
              FITBUDDY
            </span>
            <span className="text-brand-primary/80 mt-1 text-[9px] font-bold uppercase">
              ELITE
            </span>
          </div>
        </Link>
      </header>

      {/* Content */}
      <main className="animate-in fade-in slide-in-from-bottom-4 relative z-10 flex min-h-[calc(100vh-76px)] flex-col items-center justify-center px-6 pb-10 pt-2 duration-700">
        <div className="flex w-full max-w-5xl flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-900/40 shadow-2xl ring-1 ring-white/5 backdrop-blur-3xl transition-all duration-500 md:h-[600px] md:flex-row">
          {/* Left Side: Cinematic Visual */}
          <div className="relative hidden h-full w-1/2 overflow-hidden border-r border-white/5 md:block">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
              alt="Elite Fitness"
              className="duration-10000 h-full w-full object-cover opacity-60 transition-transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] backdrop-blur-md">
                <Crown size={12} />
                Elite Access
              </div>
              <h2 className="font-['Outfit'] text-4xl font-black uppercase italic leading-tight text-white">
                The Future of <br />
                <span className="text-gradient-gold">Performance</span>
              </h2>
              <p className="max-w-xs text-sm font-medium leading-relaxed text-zinc-400">
                Join the world's most exclusive fitness community and unlock
                your peak potential.
              </p>
            </div>
          </div>

          {/* Right Side: Auth Machine */}
          <div className="custom-scrollbar flex h-full flex-1 flex-col overflow-y-auto bg-black/20 p-6 md:p-7">
            {/* Integrated Liquid Hub */}
            {isAuthPage && (
              <div className="mb-7">
                <div className="relative mx-auto flex w-full max-w-[300px] items-center justify-between gap-1 overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-1.5 ring-1 ring-white/5 backdrop-blur-2xl">
                  {/* Glass Indicator - V1 Sidebar Style */}
                  <div
                    className="absolute h-[calc(100%-12px)] rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    style={{
                      left: location.pathname.includes("signup")
                        ? "calc(50% + 3px)"
                        : "6px",
                      width: "calc(50% - 9px)",
                    }}
                  />

                  <button
                    onClick={() => navigate("/login")}
                    className={`relative z-10 flex-1 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${!location.pathname.includes("signup") ? "text-[#D4AF37]" : "text-zinc-500 hover:text-white"}`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => navigate("/signup")}
                    className={`relative z-10 flex-1 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${location.pathname.includes("signup") ? "text-[#D4AF37]" : "text-zinc-500 hover:text-white"}`}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-1 flex-col justify-start">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
