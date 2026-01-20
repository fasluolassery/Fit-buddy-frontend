import {
  AlertTriangle,
  DollarSign,
  Dumbbell,
  // Shield,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      label: "Total Users",
      value: "12,482",
      change: "+4.2%",
      trending: "up",
      icon: Users,
    },
    {
      label: "Active Trainers",
      value: "312",
      change: "+12",
      trending: "up",
      icon: Dumbbell,
    },
    {
      label: "Platform Revenue",
      value: "₹18.6L",
      change: "+9.1%",
      trending: "up",
      icon: DollarSign,
    },
    {
      label: "Pending Verifications",
      value: "17",
      change: "-5",
      trending: "down",
      icon: UserCheck,
    },
  ];

  const alerts = [
    {
      title: "Trainer payout delay detected",
      level: "high",
      time: "15 mins ago",
    },
    {
      title: "Spike in failed payments",
      level: "medium",
      time: "2 hours ago",
    },
    {
      title: "New trainer verification backlog",
      level: "low",
      time: "Today",
    },
  ];

  return (
    <div className="space-y-10 font-['Inter']">
      {/* System Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/10 bg-[#0c0c0c] p-7"
            >
              <div className="absolute right-0 top-0 h-40 w-40 bg-[#D4AF37]/5 blur-[80px]" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-[#151515] text-[#D4AF37]">
                    <Icon size={20} />
                  </div>
                  <span
                    className={`flex items-center gap-1 text-xs font-bold ${
                      stat.trending === "up"
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {stat.trending === "up" ? (
                      <TrendingUp size={14} />
                    ) : (
                      <TrendingDown size={14} />
                    )}
                    {stat.change}
                  </span>
                </div>
                <div className="mt-8">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Control + Alerts */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Platform Health */}
        {/* <div className="rounded-[2.5rem] border border-[#D4AF37]/10 bg-[#0c0c0c] p-10 lg:col-span-2">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Platform Health</h2>
              <p className="mt-1 text-xs text-zinc-500">
                System-wide activity overview
              </p>
            </div>
            <Shield className="text-[#D4AF37]" size={24} />
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-900 bg-[#0a0a0a] p-6">
              <p className="text-sm font-semibold text-white">API Status</p>
              <p className="mt-3 text-2xl font-bold text-emerald-400">
                Operational
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-900 bg-[#0a0a0a] p-6">
              <p className="text-sm font-semibold text-white">
                Payment Gateway
              </p>
              <p className="mt-3 text-2xl font-bold text-emerald-400">Stable</p>
            </div>
            <div className="rounded-2xl border border-zinc-900 bg-[#0a0a0a] p-6">
              <p className="text-sm font-semibold text-white">Error Rate</p>
              <p className="mt-3 text-2xl font-bold text-[#D4AF37]">0.8%</p>
            </div>
          </div>
        </div> */}

        {/* Alerts */}
        <div className="rounded-[2.5rem] border border-[#D4AF37]/10 bg-[#0c0c0c] p-8">
          <h3 className="mb-6 text-lg font-bold text-white">System Alerts</h3>
          <div className="space-y-4">
            {alerts.map((alert, i) => (
              <div
                key={i}
                className="flex gap-3 rounded-xl border border-zinc-900 bg-[#0a0a0a] p-4"
              >
                <AlertTriangle
                  size={18}
                  className={
                    alert.level === "high"
                      ? "text-red-400"
                      : alert.level === "medium"
                        ? "text-amber-400"
                        : "text-zinc-500"
                  }
                />
                <div>
                  <p className="text-sm font-medium text-white">
                    {alert.title}
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-500">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
