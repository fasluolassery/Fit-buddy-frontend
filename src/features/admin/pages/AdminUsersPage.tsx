import {
  Search,
  ShieldCheck,
  ShieldX,
  UserCheck,
  UserX,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { GlassCard } from "../../../shared/components/ui";
import { useAdminUsers } from "../hooks/useAdminUsers";

export default function AdminUsersPage() {
  const { users, fetchUsers, loading, apiError } = useAdminUsers();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "blocked">("all");

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filtered = useMemo(() => {
    return users.filter((u) => {
      const matchQuery =
        u.name.toLowerCase().includes(query.toLowerCase()) ||
        u.email.toLowerCase().includes(query.toLowerCase());

      const matchFilter =
        filter === "all"
          ? true
          : filter === "blocked"
            ? u.isBlocked
            : !u.isBlocked;

      return matchQuery && matchFilter;
    });
  }, [users, query, filter]);

  if (loading) {
    return <GlassCard className="px-6 py-4 text-sm">Loading users…</GlassCard>;
  }

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

      {/* Table */}
      <GlassCard className="overflow-hidden rounded-2xl">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-zinc-400">
            <Users size={36} className="mb-3 opacity-50" />
            <p className="text-sm font-medium text-white">No users found</p>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="border-b border-white/10 text-zinc-400">
              <tr>
                <th className="px-6 py-4 text-left">User</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Verified</th>
                <th className="px-6 py-4 text-left">Plan</th>
                <th className="px-6 py-4 text-left">Joined</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((u) => (
                <tr
                  key={u._id}
                  className="border-b border-white/5 hover:bg-white/[0.03]"
                >
                  {/* User */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={u.avatar || "https://i.pravatar.cc/150"}
                        className="h-9 w-9 rounded-full object-cover"
                        alt={u.name}
                      />
                      <div className="min-w-0">
                        <p className="truncate font-medium text-white">
                          {u.name}
                        </p>
                        <p className="truncate text-xs text-zinc-400">
                          {u.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex w-20 justify-center rounded-full px-3 py-1 text-xs font-medium ${
                        u.isBlocked
                          ? "bg-red-500/15 text-red-400"
                          : "bg-emerald-500/15 text-emerald-400"
                      }`}
                    >
                      {u.isBlocked ? "Blocked" : "Active"}
                    </span>
                  </td>

                  {/* Verified */}
                  <td className="px-6 py-4">
                    {u.isVerified ? (
                      <span className="inline-flex items-center gap-1 text-xs text-emerald-400">
                        <ShieldCheck size={14} /> Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs text-yellow-400">
                        <ShieldX size={14} /> Unverified
                      </span>
                    )}
                  </td>

                  {/* Plan */}
                  <td className="px-6 py-4 text-xs">
                    <span
                      className={
                        u.planActive
                          ? "font-medium text-[#D4AF37]"
                          : "text-zinc-500"
                      }
                    >
                      {u.planActive ? "Active" : "Inactive"}
                    </span>
                  </td>

                  {/* Joined */}
                  <td className="px-6 py-4 text-xs text-zinc-400">
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="mx-auto flex w-24 justify-center">
                      <button
                        className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium ${
                          u.isBlocked
                            ? "text-emerald-400 hover:bg-emerald-500/10"
                            : "text-red-400 hover:bg-red-500/10"
                        }`}
                      >
                        {u.isBlocked ? (
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
