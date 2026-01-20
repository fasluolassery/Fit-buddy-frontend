import { useState } from "react";
import UserRow from "../components/UserRow";

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: "active" | "blocked";
};

const USERS: User[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul@mail.com",
    avatar: "https://i.pravatar.cc/150?img=11",
    status: "active",
  },
  {
    id: "2",
    name: "Anjali Verma",
    email: "anjali@mail.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    status: "blocked",
  },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState(USERS);

  const toggleBlock = (id: string) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "active" ? "blocked" : "active" }
          : u,
      ),
    );
  };

  return (
    <div className="space-y-6 p-8">
      <h1 className="text-xl font-semibold text-white">Users</h1>

      <div className="space-y-3">
        {users.map((user) => (
          <UserRow
            key={user.id}
            avatar={user.avatar}
            name={user.name}
            email={user.email}
            actions={
              <>
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    user.status === "active"
                      ? "bg-emerald-600 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {user.status}
                </span>

                <button
                  onClick={() => toggleBlock(user.id)}
                  className="rounded-md border border-white/10 px-3 py-1 text-xs text-white hover:bg-white/10"
                >
                  {user.status === "active" ? "Block" : "Unblock"}
                </button>
              </>
            }
          />
        ))}
      </div>
    </div>
  );
}
