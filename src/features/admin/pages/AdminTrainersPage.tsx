import {
  Search,
  ShieldCheck,
  ShieldX,
  Star,
  UserCheck,
  UserX,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { GlassCard } from "../../../shared/components/ui";
import type { AdminTrainer } from "../types";
import { useAdminTrainers } from "../hooks/useAdminTrainers";

export default function AdminTrainersPage() {
  const {
    trainers,
    fetchTrainers,
    approveTrainer,
    rejectTrainer,
    blockTrainer,
    unblockTrainer,
    loading,
    apiError,
  } = useAdminTrainers();

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "blocked">("all");

  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectTrainerId, setRejectTrainerId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState("");

  useEffect(() => {
    fetchTrainers();
  }, [fetchTrainers]);

  const filtered = useMemo(() => {
    return trainers.filter((t: AdminTrainer) => {
      const matchQuery =
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        t.email.toLowerCase().includes(query.toLowerCase());

      const matchFilter =
        filter === "all"
          ? true
          : filter === "blocked"
            ? t.isBlocked
            : !t.isBlocked;

      return matchQuery && matchFilter;
    });
  }, [trainers, query, filter]);

  const openRejectModal = (id: string) => {
    setRejectTrainerId(id);
    setRejectReason("");
    setShowRejectModal(true);
  };

  const handleRejectSubmit = async () => {
    if (rejectTrainerId && rejectReason) {
      await rejectTrainer(rejectTrainerId, rejectReason);
      setShowRejectModal(false);
    }
  };

  if (apiError) {
    return (
      <GlassCard className="px-6 py-4 text-sm text-red-400">
        {apiError}
      </GlassCard>
    );
  }

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

      {loading ? (
        <GlassCard className="px-6 py-4 text-sm">Loading trainers…</GlassCard>
      ) : (
        <GlassCard className="overflow-hidden rounded-2xl">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-zinc-400">
              <Users size={36} className="mb-3 opacity-50" />
              <p className="text-sm font-medium text-white">
                No trainers found
              </p>
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
                {filtered.map((t: any) => (
                  <tr
                    key={t._id}
                    className="border-b border-white/5 hover:bg-white/[0.03]"
                  >
                    {/* Trainer */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={t.avatar || "https://i.pravatar.cc/150"}
                          className="h-9 w-9 rounded-full object-cover"
                          alt={t.name}
                        />
                        <div className="min-w-0">
                          <p className="truncate font-medium text-white">
                            {t.name}
                          </p>
                          <p className="truncate text-xs text-zinc-400">
                            {t.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Approval */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex w-24 justify-center rounded-full px-3 py-1 text-xs font-medium ${
                          t.trainerApprovalStatus === "approved"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : t.trainerApprovalStatus === "pending"
                              ? "bg-yellow-500/15 text-yellow-400"
                              : "bg-red-500/15 text-red-400"
                        }`}
                      >
                        {t.trainerApprovalStatus}
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
                      <div className="mx-auto flex w-32 justify-center gap-2">
                        {t.trainerApprovalStatus === "pending" ? (
                          <>
                            <button
                              onClick={() => approveTrainer(t._id)}
                              className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs text-emerald-400 hover:bg-emerald-500/10"
                            >
                              <UserCheck size={14} /> Approve
                            </button>
                            <button
                              onClick={() => openRejectModal(t._id)}
                              className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs text-red-400 hover:bg-red-500/10"
                            >
                              <UserX size={14} /> Reject
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() =>
                              t.isBlocked
                                ? unblockTrainer(t._id)
                                : blockTrainer(t._id)
                            }
                            className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs ${
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
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </GlassCard>
      )}

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-80 rounded-2xl bg-[#0c0c0c] p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-medium text-white">
              Reject Trainer
            </h3>

            <label className="mb-1 block text-sm text-zinc-400">Reason</label>
            <select
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              className="mb-3 w-full rounded-xl bg-[#1a1a1a] p-2 text-white"
            >
              <option value="">Select a reason</option>
              <option value="Incomplete profile">Incomplete profile</option>
              <option value="Invalid documents">Invalid documents</option>
              <option value="Other">Other</option>
            </select>

            {rejectReason === "Other" && (
              <input
                type="text"
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
                placeholder="Type your reason"
                className="mb-4 w-full rounded-xl bg-[#1a1a1a] p-2 text-white"
              />
            )}

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowRejectModal(false)}
                className="rounded-lg px-4 py-2 text-xs text-zinc-400 hover:bg-white/5"
              >
                Cancel
              </button>
              <button
                onClick={handleRejectSubmit}
                disabled={!rejectReason}
                className="rounded-lg bg-red-500 px-4 py-2 text-xs text-white hover:bg-red-600 disabled:opacity-50"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
