import {
  Users,
  Video,
  TrendingUp,
  Clock,
  DollarSign,
  Star,
  Plus,
  CheckCircle2,
  AlertCircle,
  TrendingDown,
} from "lucide-react";

export default function TrainerDashboardTwo() {
  // Mock Data
  const stats = [
    {
      label: "Active Clients",
      value: "47",
      change: "+8 this month",
      trending: "up",
      icon: Users,
      color: "emerald",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    },
    {
      label: "Revenue (MTD)",
      value: "₹1,24,580",
      change: "+23% vs last month",
      trending: "up",
      icon: DollarSign,
      color: "blue",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800",
    },
    {
      label: "Sessions Today",
      value: "6",
      change: "2 pending",
      trending: "neutral",
      icon: Video,
      color: "purple",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    },
    {
      label: "Avg Rating",
      value: "4.9",
      change: "142 reviews",
      trending: "up",
      icon: Star,
      color: "amber",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const upcomingSessions = [
    {
      client: "Rajesh Kumar",
      time: "10:00 AM",
      duration: "45 min",
      type: "Standard",
      status: "confirmed",
      avatar: "RK",
    },
    {
      client: "Priya Sharma",
      time: "11:30 AM",
      duration: "60 min",
      type: "Premium",
      status: "confirmed",
      avatar: "PS",
    },
    {
      client: "Arjun Menon",
      time: "2:00 PM",
      duration: "45 min",
      type: "Lite",
      status: "pending",
      avatar: "AM",
    },
    {
      client: "Sneha Patel",
      time: "4:30 PM",
      duration: "60 min",
      type: "Premium",
      status: "confirmed",
      avatar: "SP",
    },
  ];

  const recentClients = [
    {
      name: "Vikram Singh",
      plan: "Premium",
      progress: 85,
      sessionsLeft: 6,
      lastSession: "2 days ago",
      status: "active",
      avatar: "VS",
    },
    {
      name: "Ananya Das",
      plan: "Standard",
      progress: 62,
      sessionsLeft: 2,
      lastSession: "5 days ago",
      status: "active",
      avatar: "AD",
    },
    {
      name: "Karthik Reddy",
      plan: "Lite",
      progress: 45,
      sessionsLeft: 0,
      lastSession: "1 week ago",
      status: "expiring",
      avatar: "KR",
    },
  ];

  const pendingActions = [
    {
      type: "template",
      message: "Assign workout template to Rajesh Kumar",
      priority: "high",
      time: "2 hours ago",
    },
    {
      type: "message",
      message: "3 unread messages from clients",
      priority: "medium",
      time: "4 hours ago",
    },
    {
      type: "renewal",
      message: "2 clients due for plan renewal this week",
      priority: "medium",
      time: "1 day ago",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-zinc-900 bg-[#0c0c0c] p-6 transition-all hover:border-[#D4AF37]/20"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={stat.image}
                    alt=""
                    className="h-full w-full object-cover opacity-10 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/90 to-transparent" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-[#0a0a0a] text-[#D4AF37] transition-all group-hover:border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/10">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-3xl font-bold text-white">
                      {stat.value}
                    </h3>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                      {stat.label}
                    </p>
                    <p className="mt-2 flex items-center gap-1 text-xs font-medium text-emerald-400">
                      {stat.trending === "up" && <TrendingUp size={12} />}
                      {stat.trending === "down" && <TrendingDown size={12} />}
                      {stat.change}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Today's Sessions */}
          <div className="lg:col-span-2">
            <div className="rounded-[2rem] border border-zinc-900 bg-[#0c0c0c] p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white">
                    Today's Sessions
                  </h2>
                  <p className="mt-0.5 text-xs text-zinc-500">
                    {upcomingSessions.length} sessions scheduled
                  </p>
                </div>
                <button className="flex items-center gap-2 rounded-xl bg-[#D4AF37] px-4 py-2 text-xs font-bold text-black transition-all hover:bg-[#C4A030]">
                  <Plus size={16} />
                  Add Session
                </button>
              </div>
              <div className="space-y-3">
                {upcomingSessions.map((session, i) => (
                  <div
                    key={i}
                    className="group flex items-center justify-between rounded-2xl border border-zinc-900 bg-[#0a0a0a] p-5 transition-all hover:border-[#D4AF37]/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white">
                        {session.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {session.client}
                        </h4>
                        <div className="mt-1 flex items-center gap-3 text-[10px] text-zinc-500">
                          <span className="flex items-center gap-1">
                            <Clock size={12} /> {session.time}
                          </span>
                          <span>•</span>
                          <span>{session.duration}</span>
                          <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-2 py-0.5 font-bold uppercase text-[#D4AF37]">
                            {session.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {session.status === "confirmed" ? (
                        <CheckCircle2 size={20} className="text-emerald-500" />
                      ) : (
                        <AlertCircle size={20} className="text-amber-500" />
                      )}
                      <button className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#D4AF37]/20 hover:bg-[#D4AF37]/10">
                        Join
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pending Actions */}
          <div>
            <div className="rounded-[2rem] border border-zinc-900 bg-[#0c0c0c] p-8">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-white">
                  Pending Actions
                </h2>
                <p className="mt-0.5 text-xs text-zinc-500">
                  {pendingActions.length} items need attention
                </p>
              </div>
              <div className="space-y-4">
                {pendingActions.map((action, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-zinc-900 bg-[#0a0a0a] p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 rounded-lg p-2 ${
                          action.priority === "high"
                            ? "bg-red-500/10 text-red-400"
                            : "bg-amber-500/10 text-amber-400"
                        }`}
                      >
                        <AlertCircle size={16} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">
                          {action.message}
                        </p>
                        <p className="mt-1 text-[10px] text-zinc-600">
                          {action.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Clients */}
        <div className="rounded-[2rem] border border-zinc-900 bg-[#0c0c0c] p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Recent Clients</h2>
              <p className="mt-0.5 text-xs text-zinc-500">
                Track progress and manage plans
              </p>
            </div>
            <button className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline">
              View All Clients
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentClients.map((client, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-zinc-900 bg-[#0a0a0a] p-6 transition-all hover:border-[#D4AF37]/20"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-sm font-bold text-white">
                      {client.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {client.name}
                      </h4>
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                        {client.plan} Plan
                      </p>
                    </div>
                  </div>
                  {client.status === "expiring" && (
                    <span className="rounded-full bg-red-500/10 px-2 py-1 text-[9px] font-bold uppercase text-red-400">
                      Expiring
                    </span>
                  )}
                </div>
                <div className="mt-6 space-y-3">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-[10px]">
                      <span className="font-semibold uppercase text-zinc-500">
                        Progress
                      </span>
                      <span className="font-bold text-[#D4AF37]">
                        {client.progress}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full border border-zinc-900 bg-[#0c0c0c]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA8B2E]"
                        style={{ width: `${client.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-500">
                      {client.sessionsLeft} sessions left
                    </span>
                    <span className="text-zinc-600">{client.lastSession}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
