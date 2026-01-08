import {
  Utensils,
  BarChart3,
  MessageCircle,
  Video,
  Store,
  Calendar,
} from "lucide-react";

export default function Features() {
  return (
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
                <p className="leading-relaxed text-zinc-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
