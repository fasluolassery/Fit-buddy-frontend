import { Crown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import FluidBackground from "../shared/components/ui/FluidBackground";

type AuthRole = "user" | "trainer";

export default function DemoLayout() {
  const location = useLocation();

  const [role, setRole] = useState<AuthRole>(() => {
    const stored = sessionStorage.getItem("authRole");
    return stored === "trainer" ? "trainer" : "user";
  });

  useEffect(() => {
    sessionStorage.setItem("authRole", role);
  }, [role]);

  const isAuthPage = ["/signup"].includes(location.pathname);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <FluidBackground />

      {/* Header */}
      <header className="relative z-10 px-8 py-3">
        <Link to="/" className="group/logo flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5">
              <span className="text-lg font-bold tracking-tight text-white">
                F
              </span>
            </div>

            <span className="text-xl font-medium tracking-tight text-white">
              Fit<span className="text-amber-300">Buddy</span>
            </span>
          </div>
        </Link>
      </header>

      {/* Content */}
      <main className="relative z-10 flex min-h-[calc(100vh-76px)] flex-col items-center justify-center px-6 pb-10 pt-2">
        <div className="flex min-h-[520px] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-4 shadow-2xl ring-1 ring-white/5 backdrop-blur-3xl transition-all duration-500 md:h-[600px] md:flex-row lg:h-[620px]">
          {/* Left Side: Cinematic Visual */}
          <div className="group relative hidden h-full w-1/2 overflow-hidden border-r border-white/5 md:block md:rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
              alt="Elite Fitness"
              className="h-full w-full object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />

            {isAuthPage && (
              <div className="absolute inset-x-0 top-10 z-20 flex -translate-y-1/2 justify-center">
                <div className="relative mx-auto flex w-full max-w-[300px] items-center justify-between gap-1 overflow-hidden rounded-2xl border border-white/10 bg-black p-1.5 ring-1 ring-white/5 backdrop-blur-2xl">
                  {/* Glass Indicator - V1 Sidebar Style */}
                  <div
                    className="ease-[cubic-bezier(0.34,1.56,0.64,1)] absolute h-[calc(100%-12px)] rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-md transition-all duration-500"
                    style={{
                      left: role === "trainer" ? "calc(50% + 3px)" : "6px",
                      width: "calc(50% - 9px)",
                    }}
                  />

                  <button
                    onClick={() => setRole("user")}
                    className={`relative z-10 flex-1 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${role === "user" ? "text-[#D4AF37]" : "text-zinc-500 hover:text-white"}`}
                  >
                    Member
                  </button>
                  <button
                    onClick={() => setRole("trainer")}
                    className={`relative z-10 flex-1 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${role === "trainer" ? "text-[#D4AF37]" : "text-zinc-500 hover:text-white"}`}
                  >
                    Trainer
                  </button>
                </div>
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
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

          {/* Right Side: Forms */}
          <div className="custom-scrollbar flex h-full flex-1 flex-col overflow-y-auto rounded-3xl p-6 md:p-7">
            <div className="flex flex-1 flex-col justify-start">
              <Outlet context={{ role }} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
