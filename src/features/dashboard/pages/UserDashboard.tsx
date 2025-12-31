import { useState } from "react";
import {
  TrendingUp,
  Target,
  Flame,
  Clock,
  Calendar,
  Award,
  Activity,
  Dumbbell,
  Heart,
  Zap,
  ChevronRight,
  Play,
  MoreVertical,
  CheckCircle2,
  TrendingDown,
} from "lucide-react";

export default function UserDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const stats = [
    {
      label: "Calories Burned",
      value: "2,847",
      change: "+12%",
      trending: "up",
      icon: Flame,
      color: "amber",
    },
    {
      label: "Active Minutes",
      value: "342",
      change: "+8%",
      trending: "up",
      icon: Clock,
      color: "blue",
    },
    {
      label: "Workouts",
      value: "24",
      change: "-2%",
      trending: "down",
      icon: Dumbbell,
      color: "purple",
    },
    {
      label: "Avg Heart Rate",
      value: "142",
      change: "+3%",
      trending: "up",
      icon: Heart,
      color: "red",
    },
  ];

  const weeklyActivity = [
    { day: "Mon", value: 85 },
    { day: "Tue", value: 92 },
    { day: "Wed", value: 78 },
    { day: "Thu", value: 95 },
    { day: "Fri", value: 88 },
    { day: "Sat", value: 100 },
    { day: "Sun", value: 70 },
  ];

  const upcomingWorkouts = [
    {
      id: 1,
      title: "Upper Body Strength",
      time: "Today, 6:00 PM",
      duration: "45 min",
      difficulty: "Advanced",
      type: "Strength",
    },
    {
      id: 2,
      title: "HIIT Cardio Blast",
      time: "Tomorrow, 7:00 AM",
      duration: "30 min",
      difficulty: "Intermediate",
      type: "Cardio",
    },
    {
      id: 3,
      title: "Yoga Flow",
      time: "Tomorrow, 6:30 PM",
      duration: "60 min",
      difficulty: "Beginner",
      type: "Flexibility",
    },
  ];

  const recentAchievements = [
    {
      id: 1,
      title: "7 Day Streak",
      description: "Completed workouts 7 days in a row",
      date: "2 days ago",
      icon: Flame,
    },
    {
      id: 2,
      title: "Speed Demon",
      description: "Ran 5K under 25 minutes",
      date: "5 days ago",
      icon: Zap,
    },
    {
      id: 3,
      title: "Consistency King",
      description: "30 days of active training",
      date: "1 week ago",
      icon: Target,
    },
  ];

  const goals = [
    { name: "Weekly Workouts", current: 5, target: 7, unit: "workouts" },
    { name: "Calories Burned", current: 2847, target: 3500, unit: "kcal" },
    { name: "Active Minutes", current: 342, target: 400, unit: "min" },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-400 bg-green-500/10 border-green-500/20";
      case "Intermediate":
        return "text-amber-400 bg-amber-500/10 border-amber-500/20";
      case "Advanced":
        return "text-red-400 bg-red-500/10 border-red-500/20";
      default:
        return "text-zinc-400 bg-zinc-500/10 border-zinc-500/20";
    }
  };

  const getStatColor = (color: string) => {
    switch (color) {
      case "amber":
        return "from-amber-500/20 to-amber-600/10 ring-amber-500/30 text-amber-400";
      case "blue":
        return "from-blue-500/20 to-blue-600/10 ring-blue-500/30 text-blue-400";
      case "purple":
        return "from-purple-500/20 to-purple-600/10 ring-purple-500/30 text-purple-400";
      case "red":
        return "from-red-500/20 to-red-600/10 ring-red-500/30 text-red-400";
      default:
        return "from-zinc-500/20 to-zinc-600/10 ring-zinc-500/30 text-zinc-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-amber-500/10 via-zinc-900/60 to-zinc-900/40 p-8 backdrop-blur-xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-white">
              Welcome back, Alex!
            </h1>
            {/* <p className="text-zinc-400">
              You've burned{" "}
              <span className="font-semibold text-amber-400">
                2,847 calories
              </span>{" "}
              this week. Keep it up!
            </p> */}
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-amber-500/30 hover:bg-amber-500/5">
              View Progress
            </button>
            <button className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 active:scale-95">
              Start Workout
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-zinc-900/60"
            >
              <div className="mb-4 flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ${getStatColor(stat.color)}`}
                >
                  <Icon size={24} />
                </div>
                <div
                  className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                    stat.trending === "up"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
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
              <h3 className="mb-1 text-3xl font-bold text-white">
                {stat.value}
              </h3>
              <p className="text-sm text-zinc-400">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Weekly Activity Chart */}
        <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-xl lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Weekly Activity</h2>
              <p className="text-sm text-zinc-400">
                Your workout intensity this week
              </p>
            </div>
            <div className="flex gap-2 rounded-xl border border-white/10 bg-zinc-900/60 p-1">
              <button
                onClick={() => setSelectedPeriod("week")}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  selectedPeriod === "week"
                    ? "bg-amber-500/20 text-amber-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setSelectedPeriod("month")}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  selectedPeriod === "month"
                    ? "bg-amber-500/20 text-amber-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setSelectedPeriod("year")}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  selectedPeriod === "year"
                    ? "bg-amber-500/20 text-amber-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Year
              </button>
            </div>
          </div>

          {/* Chart */}
          <div className="flex h-64 items-end justify-between gap-3">
            {weeklyActivity.map((day, index) => (
              <div
                key={index}
                className="flex flex-1 flex-col items-center gap-3"
              >
                <div className="relative w-full flex-1">
                  <div className="absolute bottom-0 w-full overflow-hidden rounded-t-xl bg-zinc-800/50">
                    <div
                      className="bg-gradient-to-t from-amber-500 to-amber-400 transition-all duration-500"
                      style={{ height: `${day.value}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs font-medium text-zinc-400">
                  {day.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Goals Progress */}
        {/* <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Goals</h2>
            <button className="text-amber-400 hover:text-amber-300">
              <MoreVertical size={20} />
            </button>
          </div>

          <div className="space-y-6">
            {goals.map((goal, index) => {
              const percentage = (goal.current / goal.target) * 100;
              return (
                <div key={index}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-white">
                      {goal.name}
                    </span>
                    <span className="text-sm text-zinc-400">
                      {goal.current}/{goal.target} {goal.unit}
                    </span>
                  </div>
                  <div className="relative h-2 overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-500"
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-amber-600/5 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/20">
                <Target size={20} className="text-amber-400" />
              </div>
              <div className="flex-1">
                <p className="mb-1 text-sm font-semibold text-amber-400">
                  You're 71% there!
                </p>
                <p className="text-xs text-zinc-400">
                  Just 2 more workouts to hit your weekly goal
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upcoming Workouts */}
        {/* <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Upcoming Workouts</h2>
            <button className="flex items-center gap-1 text-sm font-medium text-amber-400 hover:text-amber-300">
              View All
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="space-y-3">
            {upcomingWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="group rounded-xl border border-white/10 bg-zinc-900/60 p-4 transition-all hover:border-amber-500/30 hover:bg-zinc-900/80"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="mb-1 font-semibold text-white">
                      {workout.title}
                    </h3>
                    <div className="mb-2 flex items-center gap-2 text-xs text-zinc-400">
                      <Calendar size={12} />
                      <span>{workout.time}</span>
                      <span>•</span>
                      <Clock size={12} />
                      <span>{workout.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full border px-2 py-0.5 text-xs font-medium ${getDifficultyColor(workout.difficulty)}`}
                      >
                        {workout.difficulty}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium text-zinc-400">
                        {workout.type}
                      </span>
                    </div>
                  </div>
                  <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 transition-all hover:bg-amber-500/30 group-hover:scale-110">
                    <Play size={18} fill="currentColor" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Recent Achievements */}
        {/* <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              Recent Achievements
            </h2>
            <button className="flex items-center gap-1 text-sm font-medium text-amber-400 hover:text-amber-300">
              View All
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="space-y-3">
            {recentAchievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.id}
                  className="group flex items-start gap-4 rounded-xl border border-white/10 bg-zinc-900/60 p-4 transition-all hover:border-amber-500/30 hover:bg-zinc-900/80"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 ring-1 ring-amber-500/30">
                    <Icon size={20} className="text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 font-semibold text-white">
                      {achievement.title}
                    </h3>
                    <p className="mb-2 text-sm text-zinc-400">
                      {achievement.description}
                    </p>
                    <p className="text-xs text-zinc-500">{achievement.date}</p>
                  </div>
                  <CheckCircle2 size={20} className="text-amber-400" />
                </div>
              );
            })}
          </div>
        </div> */}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <button className="group rounded-xl border border-white/10 bg-zinc-900/40 p-6 text-left transition-all hover:border-amber-500/30 hover:bg-zinc-900/60">
          <Activity size={24} className="mb-3 text-amber-400" />
          <h3 className="mb-1 font-semibold text-white">Track Workout</h3>
          <p className="text-sm text-zinc-400">Start a new session</p>
        </button>
        <button className="group rounded-xl border border-white/10 bg-zinc-900/40 p-6 text-left transition-all hover:border-amber-500/30 hover:bg-zinc-900/60">
          <Calendar size={24} className="mb-3 text-blue-400" />
          <h3 className="mb-1 font-semibold text-white">Schedule</h3>
          <p className="text-sm text-zinc-400">Plan your week</p>
        </button>
        <button className="group rounded-xl border border-white/10 bg-zinc-900/40 p-6 text-left transition-all hover:border-amber-500/30 hover:bg-zinc-900/60">
          <Award size={24} className="mb-3 text-purple-400" />
          <h3 className="mb-1 font-semibold text-white">Achievements</h3>
          <p className="text-sm text-zinc-400">View all badges</p>
        </button>
        <button className="group rounded-xl border border-white/10 bg-zinc-900/40 p-6 text-left transition-all hover:border-amber-500/30 hover:bg-zinc-900/60">
          <Dumbbell size={24} className="mb-3 text-red-400" />
          <h3 className="mb-1 font-semibold text-white">Programs</h3>
          <p className="text-sm text-zinc-400">Browse workouts</p>
        </button>
      </div>
    </div>
  );
}
