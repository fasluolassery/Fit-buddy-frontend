import {
  Search,
  ShieldCheck,
  ShieldX,
  Star,
  UserCheck,
  UserX,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { GlassCard } from "../../../shared/components/ui";

type Trainer = {
  id: string;
  name: string;
  email: string;
  avatar?: string;

  approvalStatus: "pending" | "active" | "rejected";
  isVerified: boolean;
  isBlocked: boolean;

  rating: number;
  experienceYears: number;
  createdAt: string;
};

const TRAINERS: Trainer[] = [
  {
    id: "1",
    name: "Arjun Menon",
    email: "arjun@fit.com",
    avatar: "https://i.pravatar.cc/150?img=21",
    approvalStatus: "pending",
    isVerified: false,
    isBlocked: false,
    rating: 4.6,
    experienceYears: 5,
    createdAt: "2025-10-10",
  },
  {
    id: "2",
    name: "Sneha Kapoor",
    email: "sneha@fit.com",
    avatar: "https://i.pravatar.cc/150?img=22",
    approvalStatus: "active",
    isVerified: true,
    isBlocked: false,
    rating: 4.9,
    experienceYears: 8,
    createdAt: "2025-09-01",
  },
];

export default function AdminTrainersPage() {
  const [trainers, setTrainers] = useState<Trainer[]>(TRAINERS);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "blocked">("all");

  const filtered = useMemo(() => {
    return trainers.filter(
      (t) =>
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        t.email.toLowerCase().includes(query.toLowerCase()),
    );
  }, [trainers, query]);

  const approveTrainer = (id: string) => {
    setTrainers((prev) =>
      prev.map((t) => (t.id === id ? { ...t, approvalStatus: "active" } : t)),
    );
  };

  const rejectTrainer = (id: string) => {
    setTrainers((prev) =>
      prev.map((t) => (t.id === id ? { ...t, approvalStatus: "rejected" } : t)),
    );
  };

  const toggleBlock = (id: string) => {
    setTrainers((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isBlocked: !t.isBlocked } : t)),
    );
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <GlassCard className="rounded-2xl p-4">
        <div className="space-y-3">
          <div className="relative max-w-xs">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name or email"
              className="w-full rounded-xl border border-white/10 bg-[#0c0c0c] py-2 pl-9 pr-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
            />
          </div>

          <div className="flex gap-2">
            {(["all", "active", "blocked"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
                  filter === f
                    ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                    : "border border-white/10 text-zinc-400 hover:bg-white/5"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Table */}
      <GlassCard className="overflow-hidden rounded-2xl">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-zinc-400">
            <Users size={36} className="mb-3 opacity-50" />
            <p className="text-sm font-medium text-white">No trainers found</p>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="border-b border-white/10 text-zinc-400">
              <tr>
                <th className="px-6 py-4 text-left">Trainer</th>
                <th className="px-6 py-4 text-left">Approval</th>
                <th className="px-6 py-4 text-left">Verified</th>
                <th className="px-6 py-4 text-left">Rating</th>
                <th className="px-6 py-4 text-left">Experience</th>
                <th className="px-6 py-4 text-left">Joined</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((t) => (
                <tr
                  key={t.id}
                  className="border-b border-white/5 hover:bg-white/[0.03]"
                >
                  {/* Trainer */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        className="h-9 w-9 rounded-full"
                        alt={t.name}
                      />
                      <div>
                        <p className="font-medium text-white">{t.name}</p>
                        <p className="text-xs text-zinc-400">{t.email}</p>
                      </div>
                    </div>
                  </td>

                  {/* Approval */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex w-24 justify-center rounded-full px-3 py-1 text-xs font-medium ${
                        t.approvalStatus === "active"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : t.approvalStatus === "pending"
                            ? "bg-yellow-500/15 text-yellow-400"
                            : "bg-red-500/15 text-red-400"
                      }`}
                    >
                      {t.approvalStatus}
                    </span>
                  </td>

                  {/* Verified */}
                  <td className="px-6 py-4">
                    {t.isVerified ? (
                      <span className="inline-flex items-center gap-1 text-xs text-emerald-400">
                        <ShieldCheck size={14} /> Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs text-yellow-400">
                        <ShieldX size={14} /> Unverified
                      </span>
                    )}
                  </td>

                  {/* Rating */}
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-xs text-[#D4AF37]">
                      <Star size={14} /> {t.rating.toFixed(1)}
                    </span>
                  </td>

                  {/* Experience */}
                  <td className="px-6 py-4 text-xs text-zinc-400">
                    {t.experienceYears} yrs
                  </td>

                  {/* Joined */}
                  <td className="px-6 py-4 text-xs text-zinc-400">
                    {new Date(t.createdAt).toLocaleDateString()}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="relative mx-auto h-8 w-[208px]">
                      {/* Pending actions */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center gap-2 transition-opacity ${
                          t.approvalStatus === "pending"
                            ? "opacity-100"
                            : "pointer-events-none opacity-0"
                        }`}
                      >
                        <button
                          onClick={() => approveTrainer(t.id)}
                          className="inline-flex w-24 items-center justify-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-emerald-400 hover:bg-emerald-500/10"
                        >
                          <UserCheck size={14} /> Approve
                        </button>

                        <button
                          onClick={() => rejectTrainer(t.id)}
                          className="inline-flex w-24 items-center justify-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-red-400 hover:bg-red-500/10"
                        >
                          <UserX size={14} /> Reject
                        </button>
                      </div>

                      {/* Active / Block actions */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                          t.approvalStatus !== "pending"
                            ? "opacity-100"
                            : "pointer-events-none opacity-0"
                        }`}
                      >
                        <button
                          onClick={() => toggleBlock(t.id)}
                          className={`inline-flex w-24 items-center justify-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium ${
                            t.isBlocked
                              ? "text-emerald-400 hover:bg-emerald-500/10"
                              : "text-red-400 hover:bg-red-500/10"
                          }`}
                        >
                          {t.isBlocked ? (
                            <>
                              <UserCheck size={14} /> Unblock
                            </>
                          ) : (
                            <>
                              <UserX size={14} /> Block
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </GlassCard>
    </div>
  );
}
