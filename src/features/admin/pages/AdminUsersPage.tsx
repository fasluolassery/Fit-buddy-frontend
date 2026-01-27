import {
  Search,
  ShieldCheck,
  ShieldX,
  UserCheck,
  UserX,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { GlassCard } from "../../../shared/components/ui";

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isBlocked: boolean;
  isVerified: boolean;
  planActive: boolean;
  createdAt: string;
};

const USERS: User[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul@mail.com",
    avatar: "https://i.pravatar.cc/150?img=11",
    isBlocked: false,
    isVerified: true,
    planActive: true,
    createdAt: "2025-11-12",
  },
  {
    id: "2",
    name: "Anjali Verma",
    email: "anjali@mail.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    isBlocked: true,
    isVerified: false,
    planActive: false,
    createdAt: "2025-10-01",
  },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>(USERS);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "blocked">("all");

  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchesQuery =
        u.name.toLowerCase().includes(query.toLowerCase()) ||
        u.email.toLowerCase().includes(query.toLowerCase());

      const status = u.isBlocked ? "blocked" : "active";
      const matchesStatus = filter === "all" ? true : status === filter;

      return matchesQuery && matchesStatus;
    });
  }, [users, query, filter]);

  const toggleBlock = (id: string) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, isBlocked: !u.isBlocked } : u)),
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
        {filteredUsers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center text-zinc-400">
            <Users size={36} className="mb-3 opacity-50" />
            <p className="text-sm font-medium text-white">No users found</p>
            <p className="mt-1 text-xs">Try changing filters or search</p>
          </div>
        ) : (
          <table className="w-full table-fixed text-sm">
            <thead className="border-b border-white/10 text-zinc-400">
              <tr>
                <th className="px-6 py-4 text-left font-medium">User</th>
                <th className="px-6 py-4 text-left font-medium">Status</th>
                <th className="px-6 py-4 text-left font-medium">Verified</th>
                <th className="px-6 py-4 text-left font-medium">Plan</th>
                <th className="px-6 py-4 text-left font-medium">Joined</th>
                <th className="px-6 py-4 text-right font-medium">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-white/5 last:border-none hover:bg-white/[0.03]"
                >
                  {/* User */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        className="h-9 w-9 rounded-full object-cover"
                        alt={user.name}
                      />
                      <div>
                        <p className="font-medium text-white">{user.name}</p>
                        <p className="text-xs text-zinc-400">{user.email}</p>
                      </div>
                    </div>
                  </td>

                  {/* Status — FIXED WIDTH */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex w-24 justify-center rounded-full px-3 py-1 text-xs font-medium ${
                        user.isBlocked
                          ? "bg-red-500/15 text-red-400"
                          : "bg-emerald-500/15 text-emerald-400"
                      }`}
                    >
                      {user.isBlocked ? "Blocked" : "Active"}
                    </span>
                  </td>

                  {/* Verified */}
                  <td className="px-6 py-4">
                    {user.isVerified ? (
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
                  <td className="px-6 py-4">
                    <span
                      className={`text-xs font-medium ${
                        user.planActive ? "text-[#D4AF37]" : "text-zinc-500"
                      }`}
                    >
                      {user.planActive ? "Active" : "Inactive"}
                    </span>
                  </td>

                  {/* Joined */}
                  <td className="px-6 py-4 text-xs text-zinc-400">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>

                  {/* Actions — FIXED WIDTH */}
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => toggleBlock(user.id)}
                      className={`inline-flex w-28 items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium ${
                        user.isBlocked
                          ? "text-emerald-400 hover:bg-emerald-500/10"
                          : "text-red-400 hover:bg-red-500/10"
                      }`}
                    >
                      {user.isBlocked ? (
                        <UserCheck size={14} />
                      ) : (
                        <UserX size={14} />
                      )}
                      {user.isBlocked ? "Unblock" : "Block"}
                    </button>
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
