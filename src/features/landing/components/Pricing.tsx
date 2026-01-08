import { Crown, CheckCircle2 } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-32">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-5xl font-bold">
            Trainer Plans That Fit Your Goals
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-zinc-400">
            Choose your training intensity. All plans include custom weekly
            templates and chat support.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {/* Lite */}
          <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-amber-900/50">
            <div className="mb-4 text-sm uppercase tracking-wider text-zinc-500">
              Lite
            </div>
            <div className="mb-8">
              <div className="mb-2 text-5xl font-bold">
                ₹1,999<span className="text-2xl text-zinc-500">/mo</span>
              </div>
              <div className="text-zinc-400">Perfect to get started</div>
            </div>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-950">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                </div>
                2 video sessions/month
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-950">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                </div>
                Custom weekly templates
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-950">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                </div>
                Chat support
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-950">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                </div>
                Progress tracking
              </li>
            </ul>
            <button className="w-full rounded-xl border border-zinc-700 bg-zinc-800 py-4 font-semibold transition-all duration-300 hover:bg-zinc-700">
              Choose Lite
            </button>
          </div>

          {/* Standard - Featured */}
          <div className="relative scale-105 transform rounded-3xl border-2 border-amber-800/50 bg-gradient-to-br from-amber-950/30 to-zinc-900/50 p-8 shadow-2xl shadow-amber-900/20 backdrop-blur-xl">
            <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2 text-xs font-bold text-black">
              <Crown className="h-3 w-3" />
              MOST POPULAR
            </div>
            <div className="mb-4 text-sm uppercase tracking-wider text-amber-400">
              Standard
            </div>
            <div className="mb-8">
              <div className="mb-2 text-5xl font-bold">
                ₹3,499<span className="text-2xl text-zinc-500">/mo</span>
              </div>
              <div className="text-zinc-400">For serious progress</div>
            </div>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-3 text-white">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600">
                  <CheckCircle2
                    className="h-4 w-4 text-black"
                    strokeWidth={3}
                  />
                </div>
                4 video sessions/month
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600">
                  <CheckCircle2
                    className="h-4 w-4 text-black"
                    strokeWidth={3}
                  />
                </div>
                Custom weekly templates
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600">
                  <CheckCircle2
                    className="h-4 w-4 text-black"
                    strokeWidth={3}
                  />
                </div>
                Priority chat support
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600">
                  <CheckCircle2
                    className="h-4 w-4 text-black"
                    strokeWidth={3}
                  />
                </div>
                Progress tracking
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600">
                  <CheckCircle2
                    className="h-4 w-4 text-black"
                    strokeWidth={3}
                  />
                </div>
                Nutrition guidance
              </li>
            </ul>
            <button className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-4 font-bold text-black shadow-lg shadow-amber-900/50 transition-all duration-300 hover:from-amber-400 hover:to-amber-500">
              Choose Standard
            </button>
          </div>

          {/* Premium */}
          <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-amber-900/50">
            <div className="mb-4 text-sm uppercase tracking-wider text-zinc-500">
              Premium
            </div>
            <div className="mb-8">
              <div className="mb-2 text-5xl font-bold">
                ₹5,999<span className="text-2xl text-zinc-500">/mo</span>
              </div>
              <div className="text-zinc-400">Maximum transformation</div>
            </div>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-950">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                </div>
                8 video sessions/month
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-950">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                </div>
                Custom weekly templates
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-950">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                </div>
                24/7 chat support
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-950">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                </div>
                Progress tracking
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-950">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                </div>
                Full nutrition plans
              </li>
            </ul>
            <button className="w-full rounded-xl border border-zinc-700 bg-zinc-800 py-4 font-semibold transition-all duration-300 hover:bg-zinc-700">
              Choose Premium
            </button>
          </div>
        </div>

        <div className="mt-12 text-center text-zinc-500">
          Plans renew monthly. Sessions expire if unused. No hidden fees.
        </div>
      </div>
    </section>
  );
}
