export default function Navbar({
  selectRole,
}: {
  selectRole: (role: "user" | "trainer") => void;
}) {
  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[95%] max-w-6xl -translate-x-1/2">
      <div className="rounded-3xl border border-white/10 bg-zinc-900/40 px-8 py-4 shadow-2xl shadow-black/50 backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div
              onClick={() =>
                document
                  .getElementById("page-root")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex cursor-pointer items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5">
                <span className="text-lg font-bold tracking-tight text-white">
                  F
                </span>
              </div>

              <span className="text-xl font-medium tracking-tight text-white">
                Fit<span className="text-amber-300">Buddy</span>
              </span>
            </div>

            <div className="hidden gap-8 text-sm lg:flex">
              <button
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-zinc-400 transition-all duration-300 hover:text-white"
              >
                Features
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("trainers")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-zinc-400 transition-all duration-300 hover:text-white"
              >
                Find Trainers
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-zinc-400 transition-all duration-300 hover:text-white"
              >
                Pricing
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* <button className="rounded-xl px-6 py-2.5 text-sm text-zinc-300 transition-all duration-300 hover:bg-white/5 hover:text-white">
                Sign In
              </button> */}
            <button
              onClick={() => selectRole("user")}
              className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-amber-900/50 transition-all duration-300 hover:from-amber-400 hover:to-amber-500"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
