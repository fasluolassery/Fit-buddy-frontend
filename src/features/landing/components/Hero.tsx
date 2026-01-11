import { Award, Calendar, Dumbbell, Target, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleSelectRole = (role: "user" | "trainer") => {
    sessionStorage.setItem("preferredRole", role);
    navigate("/login");
  };

  return (
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
                <button
                  onClick={() => handleSelectRole("user")}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 transition-all duration-300 hover:border-amber-800 hover:from-amber-950 hover:to-zinc-900"
                >
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
                <button
                  onClick={() => handleSelectRole("trainer")}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 transition-all duration-300 hover:border-amber-800 hover:from-amber-950 hover:to-zinc-900"
                >
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
                    <div className="text-2xl font-bold text-amber-400">12</div>
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
                  <div className="text-xs text-zinc-400">Goal Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
