import {
  Dumbbell,
  Target,
  Utensils,
  BarChart3,
  MessageCircle,
  Video,
  Store,
  Crown,
  Calendar,
  TrendingUp,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function FitBuddy() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* Liquid Navbar - iOS Style */}
      <nav className="fixed left-1/2 top-4 z-50 w-[95%] max-w-6xl -translate-x-1/2">
        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 px-8 py-4 shadow-2xl shadow-black/50 backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-black text-black">F</span>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-black bg-gradient-to-br from-emerald-400 to-emerald-600"></div>
                </div>
                <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-2xl font-bold text-transparent">
                  FitBuddy
                </div>
              </div>
              <div className="hidden gap-8 text-sm lg:flex">
                <a
                  href="#features"
                  className="text-zinc-400 transition-all duration-300 hover:text-white"
                >
                  Features
                </a>
                <a
                  href="#trainers"
                  className="text-zinc-400 transition-all duration-300 hover:text-white"
                >
                  Find Trainers
                </a>
                <a
                  href="#pricing"
                  className="text-zinc-400 transition-all duration-300 hover:text-white"
                >
                  Pricing
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-xl px-6 py-2.5 text-sm text-zinc-300 transition-all duration-300 hover:bg-white/5 hover:text-white">
                Sign In
              </button>
              <button className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-amber-900/50 transition-all duration-300 hover:from-amber-400 hover:to-amber-500">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32">
        {/* Animated Background Gradients */}
        <div className="absolute left-0 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-600/20 blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/2 translate-y-1/2 rounded-full bg-yellow-600/10 blur-[120px]"></div>

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Side - Content */}
            <div>
              {/* <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-900/50 bg-amber-950/30 px-4 py-2 text-xs text-amber-400">
                <Sparkles className="h-3 w-3" />
                YOUR PERSONAL FITNESS COMPANION
              </div> */}

              <h1 className="mb-6 text-7xl font-bold leading-[1.1]">
                Your Buddy in
                <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  Fitness Journey
                </span>
              </h1>

              <p className="mb-10 max-w-xl text-xl leading-relaxed text-zinc-400">
                Connect with expert trainers, get personalized weekly workout &
                meal plans, and transform your fitness with video sessions and
                real-time guidance.
              </p>

              {/* Login Options */}
              <div className="mb-10 rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-xl">
                <div className="mb-6 text-sm text-zinc-500">
                  Join FitBuddy As:
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="group relative overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 transition-all duration-300 hover:border-amber-800 hover:from-amber-950 hover:to-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-600/0 transition-all duration-300 group-hover:from-amber-600/10 group-hover:to-transparent"></div>
                    <div className="relative">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 transition-all duration-300 group-hover:bg-amber-950/50">
                        <Target className="h-6 w-6 text-amber-400" />
                      </div>
                      <div className="mb-1 font-semibold">Member</div>
                      <div className="text-xs text-zinc-500">
                        Start your transformation
                      </div>
                    </div>
                  </button>
                  <button className="group relative overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 transition-all duration-300 hover:border-amber-800 hover:from-amber-950 hover:to-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-600/0 transition-all duration-300 group-hover:from-amber-600/10 group-hover:to-transparent"></div>
                    <div className="relative">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 transition-all duration-300 group-hover:bg-amber-950/50">
                        <Dumbbell className="h-6 w-6 text-amber-400" />
                      </div>
                      <div className="mb-1 font-semibold">Trainer</div>
                      <div className="text-xs text-zinc-500">
                        Build your coaching business
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="mb-1 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-3xl font-bold text-transparent">
                    500+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-zinc-500">
                    Certified Trainers
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-1 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-3xl font-bold text-transparent">
                    150K
                  </div>
                  <div className="text-xs uppercase tracking-wider text-zinc-500">
                    Active Members
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-1 flex items-center justify-center gap-1">
                    <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-3xl font-bold text-transparent">
                      4.9
                    </span>
                    <Award className="h-5 w-5 text-amber-400" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-zinc-500">
                    User Rating
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="group relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/30 to-yellow-600/30 blur-3xl transition-all duration-700 group-hover:blur-[80px]"></div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black shadow-2xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1000&fit=crop"
                    alt="Fitness Training"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Floating Stats Cards */}
                  <div className="absolute left-6 top-6 rounded-2xl border border-white/10 bg-black/60 p-4 shadow-xl backdrop-blur-xl">
                    <div className="mb-1 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-amber-400" />
                      <div className="text-2xl font-bold text-amber-400">
                        12
                      </div>
                    </div>
                    <div className="text-xs text-zinc-400">Weekly Workouts</div>
                  </div>
                  <div className="absolute bottom-6 right-6 rounded-2xl border border-white/10 bg-black/60 p-4 shadow-xl backdrop-blur-xl">
                    <div className="mb-1 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                      <div className="text-2xl font-bold text-emerald-400">
                        94%
                      </div>
                    </div>
                    <div className="text-xs text-zinc-400">
                      Goal Success Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-5xl font-bold">
              Complete Fitness Ecosystem
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-zinc-400">
              Everything you need to achieve your fitness goals in one powerful
              platform.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Calendar,
                title: "Weekly Templates",
                desc: "Get repeating weekly workout and meal plans that automatically adapt to your progress.",
              },
              {
                icon: Video,
                title: "Live Video Sessions",
                desc: "Book and attend HD video calls with your trainer during scheduled time slots.",
              },
              {
                icon: Utensils,
                title: "Custom Meal Plans",
                desc: "Personalized nutrition plans with breakfast, lunch, dinner, and snacks for each day.",
              },
              {
                icon: BarChart3,
                title: "Progress Tracking",
                desc: "Monitor your workouts, meals, and overall fitness journey with detailed analytics.",
              },
              {
                icon: MessageCircle,
                title: "Real-time Chat",
                desc: "Instant messaging with your trainer. Share photos, files, and get quick feedback.",
              },
              {
                icon: Store,
                title: "Trainer Marketplace",
                desc: "Browse certified trainers, compare plans, and choose the perfect coach for you.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border border-white/5 bg-zinc-900/50 p-8 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-amber-900/50"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-600/0 to-amber-600/0 transition-all duration-500 group-hover:from-amber-600/5 group-hover:to-transparent"></div>
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-950 to-zinc-900 transition-all duration-300 group-hover:from-amber-900 group-hover:to-zinc-800">
                    <feature.icon
                      className="h-7 w-7 text-amber-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold transition-colors duration-300 group-hover:text-amber-400">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-zinc-400">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
                  default weekly workout and meal templates to start
                  immediately.
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
                  Standard, Premium), and select the perfect coach for your
                  goals.
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

      {/* Pricing Section */}
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

      {/* Final CTA */}
      <section className="relative px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-[3rem] border border-amber-900/30 bg-gradient-to-br from-amber-950/30 via-zinc-900/50 to-black p-16 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent"></div>
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-600/20 blur-3xl"></div>
            <div className="relative text-center">
              <h2 className="mb-6 text-5xl font-bold">
                Ready to Meet Your FitBuddy?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-xl text-zinc-400">
                Join thousands transforming their fitness journey. Start with
                personalized templates today.
              </p>
              <button className="rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-12 py-5 text-lg font-bold text-black shadow-2xl shadow-amber-900/50 transition-all duration-300 hover:from-amber-400 hover:to-amber-500">
                Start Your Journey
              </button>
              <div className="mt-8 text-sm text-zinc-500">
                Free signup • Get default templates instantly • Choose trainer
                anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="relative h-10 w-10">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-black text-black">F</span>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-black bg-gradient-to-br from-emerald-400 to-emerald-600"></div>
                </div>
                <div className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-2xl font-bold text-transparent">
                  FitBuddy
                </div>
              </div>
              <p className="text-sm text-zinc-500">
                Your fitness companion for every journey.
              </p>
            </div>
            <div>
              <div className="mb-4 text-sm font-semibold text-white">
                Product
              </div>
              <div className="space-y-2 text-sm text-zinc-500">
                <div className="cursor-pointer transition-colors hover:text-white">
                  Features
                </div>
                <div className="cursor-pointer transition-colors hover:text-white">
                  Trainers
                </div>
                <div className="cursor-pointer transition-colors hover:text-white">
                  Pricing
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 text-sm font-semibold text-white">
                Company
              </div>
              <div className="space-y-2 text-sm text-zinc-500">
                <div className="cursor-pointer transition-colors hover:text-white">
                  About
                </div>
                <div className="cursor-pointer transition-colors hover:text-white">
                  Blog
                </div>
                <div className="cursor-pointer transition-colors hover:text-white">
                  Contact
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 text-sm font-semibold text-white">Legal</div>
              <div className="space-y-2 text-sm text-zinc-500">
                <div className="cursor-pointer transition-colors hover:text-white">
                  Privacy
                </div>
                <div className="cursor-pointer transition-colors hover:text-white">
                  Terms
                </div>
                <div className="cursor-pointer transition-colors hover:text-white">
                  Support
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-sm text-zinc-600">
            © 2025 FitBuddy. Your companion in fitness.
          </div>
        </div>
      </footer>
    </div>
  );
}
