import { useState } from "react";
import {
  TrendingUp,
  Target as TargetIcon,
  Flame,
  Clock,
  Calendar,
  Dumbbell,
  Heart,
  Zap,
  Award,
  ChevronRight,
  TrendingDown,
} from "lucide-react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

export default function UserDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const stats = [
    {
      label: "Energy Flux",
      value: "2,847",
      change: "+12%",
      trending: "up",
      icon: Flame,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    },
    {
      label: "Active Momentum",
      value: "342",
      change: "+8%",
      trending: "up",
      icon: Clock,
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    },
    {
      label: "Session Volume",
      value: "24",
      change: "-2%",
      trending: "down",
      icon: Dumbbell,
      image:
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800",
    },
    {
      label: "BPM Baseline",
      value: "142",
      change: "+3%",
      trending: "up",
      icon: Heart,
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    },
  ];

  //   const weeklyActivity = [
  //     { day: "Mon", value: 45 },
  //     { day: "Tue", value: 72 },
  //     { day: "Wed", value: 68 },
  //     { day: "Thu", value: 95 },
  //     { day: "Fri", value: 58 },
  //     { day: "Sat", value: 80 },
  //     { day: "Sun", value: 60 },
  //   ];

  const upcomingWorkouts = [
    {
      title: "Hypertrophy Upper",
      time: "Today, 6:00 PM",
      duration: "45m",
      difficulty: "Elite",
      type: "STRENGTH",
    },
    {
      title: "Metabolic HIIT",
      time: "Tomorrow, 7:00 AM",
      duration: "30m",
      difficulty: "Expert",
      type: "CARDIO",
    },
  ];

  return (
    <div className="space-y-10 font-['Inter']">
      {/* Metrics Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/10 bg-[#0c0c0c] p-7 transition-all hover:border-[#D4AF37]/30"
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={stat.image}
                  alt={stat.label}
                  className="h-full w-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/80 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-[#151515]/80 text-[#D4AF37] backdrop-blur-md transition-colors group-hover:border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/10">
                    <Icon size={22} />
                  </div>
                  <div
                    className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold backdrop-blur-md ${
                      stat.trending === "up"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {stat.trending === "up" ? (
                      <TrendingUp size={12} />
                    ) : (
                      <TrendingDown size={12} />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-3xl font-bold tabular-nums tracking-tight text-white">
                    {stat.value}
                  </h3>
                  <p className="mt-2 font-['Outfit'] text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]/60">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Performance Graph */}
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-[#D4AF37]/10 bg-[#0c0c0c] p-10 lg:col-span-2">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#D4AF37]/5 blur-[80px]" />
          <div className="relative z-10">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Performance Stream
                </h2>
                <p className="mt-1 text-xs text-zinc-500">
                  Weekly intensity distribution
                </p>
              </div>
              <div className="flex items-center gap-1.5 rounded-2xl border border-zinc-800 bg-[#151515] p-1">
                {["week", "month", "year"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`rounded-xl px-5 py-2 text-[10px] font-bold uppercase transition-all ${
                      selectedPeriod === period
                        ? "bg-[#D4AF37] text-black"
                        : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[300px] w-full">
              {/* <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={weeklyActivity}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorHybrid"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="5 5"
                    vertical={false}
                    stroke="rgba(212,175,55,0.05)"
                  />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#52525b", fontSize: 10, fontWeight: 700 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#52525b", fontSize: 10, fontWeight: 700 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0c0c0c",
                      border: "1px solid rgba(212,175,55,0.2)",
                      borderRadius: "16px",
                      fontSize: "12px",
                      color: "white",
                    }}
                    itemStyle={{ color: "#D4AF37" }}
                    cursor={{ stroke: "rgba(212,175,55,0.3)", strokeWidth: 2 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#D4AF37"
                    strokeWidth={4}
                    fill="url(#colorHybrid)"
                  />
                </AreaChart>
              </ResponsiveContainer> */}
            </div>
          </div>
        </div>

        {/* Focus Goal Widget */}
        <div className="group flex flex-col items-center rounded-[2.5rem] border border-[#D4AF37]/10 bg-[#0c0c0c] p-10">
          <div className="mb-10 flex w-full items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Target Focus
            </h3>
            <TargetIcon size={20} className="text-[#D4AF37]" />
          </div>
          <div className="relative mb-10 h-52 w-52">
            <svg className="h-full w-full -rotate-90">
              <circle
                cx="104"
                cy="104"
                r="92"
                fill="none"
                stroke="#151515"
                strokeWidth="12"
              />
              <circle
                cx="104"
                cy="104"
                r="92"
                fill="none"
                stroke="url(#hybridGold)"
                strokeWidth="12"
                strokeDasharray="578"
                strokeDashoffset="156"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="hybridGold"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#AA8B2E" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black text-white">
                73<span className="px-0.5 text-xl text-[#D4AF37]">%</span>
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                Calorie Cap
              </span>
            </div>
          </div>
          <div className="mt-auto w-full space-y-2">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
              <span className="text-zinc-500">Intake Today</span>
              <span className="text-[#D4AF37]">1,840 / 2,500</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full border border-zinc-900 bg-[#151515]">
              <div className="h-full w-[73%] rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA8B2E]" />
            </div>
          </div>
        </div>
      </div>

      {/* Lists Section */}
      <div className="grid gap-8 pb-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Upcoming Protocol
            </h2>
            <button className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] hover:underline">
              Full View
            </button>
          </div>
          <div className="space-y-4">
            {upcomingWorkouts.map((workout, i) => (
              <div
                key={i}
                className="group flex items-center justify-between rounded-[2rem] border border-zinc-900 bg-[#0c0c0c] p-6 transition-all hover:border-[#D4AF37]/20 hover:bg-[#111111]"
              >
                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-[#D4AF37] transition-all group-hover:border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/10">
                    <Zap size={20} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{workout.title}</h4>
                    <div className="mt-2 flex items-center gap-4 text-[10px] font-medium text-zinc-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} /> {workout.time}
                      </span>
                      <span className="rounded-full border border-[#D4AF37]/10 bg-[#D4AF37]/5 px-2 py-0.5 font-bold uppercase tracking-tight text-[#D4AF37]/60">
                        {workout.type}
                      </span>
                    </div>
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className="text-zinc-800 transition-colors group-hover:text-[#D4AF37]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Recent Achievements
            </h2>
            <button className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] hover:underline">
              Showcase All
            </button>
          </div>
          <div className="space-y-4">
            <div className="group flex items-center gap-6 rounded-[2rem] border border-zinc-900 bg-[#0c0c0c] p-6 transition-all hover:border-[#D4AF37]/20 hover:bg-[#111111]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <Award size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white">Elite Consistency</h4>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                  Unlocked: Streak Milestone
                </p>
              </div>
              <p className="text-[10px] font-bold text-zinc-700">2d ago</p>
            </div>
            <div className="group flex items-center gap-6 rounded-[2rem] border border-zinc-900 bg-[#0c0c0c] p-6 transition-all hover:border-[#D4AF37]/20 hover:bg-[#111111]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-600 transition-all group-hover:bg-[#151515] group-hover:text-white">
                <TrendingUp size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white">Volume King</h4>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                  Lifting capacity increased by 15%
                </p>
              </div>
              <p className="text-[10px] font-bold text-zinc-700">5d ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
