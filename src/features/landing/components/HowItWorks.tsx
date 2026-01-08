export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-b from-transparent via-amber-950/5 to-transparent px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-5xl font-bold">How FitBuddy Works</h2>
          <p className="mx-auto max-w-2xl text-xl text-zinc-400">
            Simple steps to start your fitness transformation
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-3xl font-black text-black">
                1
              </div>
              <h3 className="mb-4 text-2xl font-bold">Sign Up & Assess</h3>
              <p className="leading-relaxed text-zinc-400">
                Complete your profile and fitness questionnaire. Get assigned
                default weekly workout and meal templates to start immediately.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-3xl font-black text-black">
                2
              </div>
              <h3 className="mb-4 text-2xl font-bold">Choose Your Trainer</h3>
              <p className="leading-relaxed text-zinc-400">
                Browse certified trainers, compare pricing plans (Lite,
                Standard, Premium), and select the perfect coach for your goals.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-3xl font-black text-black">
                3
              </div>
              <h3 className="mb-4 text-2xl font-bold">Train & Transform</h3>
              <p className="leading-relaxed text-zinc-400">
                Follow custom weekly templates, book video sessions, track
                progress, and chat with your trainer. Watch your fitness goals
                become reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
