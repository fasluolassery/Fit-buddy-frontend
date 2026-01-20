import { useState } from "react";
import UserRow from "../components/UserRow";

type Trainer = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: "pending" | "approved" | "rejected";
};

const TRAINERS: Trainer[] = [
  {
    id: "t1",
    name: "Vikram Singh",
    email: "vikram@trainer.com",
    avatar: "https://i.pravatar.cc/150?img=21",
    status: "pending",
  },
  {
    id: "t2",
    name: "Neha Kapoor",
    email: "neha@trainer.com",
    avatar: "https://i.pravatar.cc/150?img=22",
    status: "approved",
  },
];

export default function AdminTrainersPage() {
  const [trainers, setTrainers] = useState(TRAINERS);

  const updateStatus = (id: string, status: Trainer["status"]) => {
    setTrainers((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status } : t)),
    );
  };

  return (
    <div className="space-y-6 p-8">
      <h1 className="text-xl font-semibold text-white">Trainers</h1>

      <div className="space-y-3">
        {trainers.map((trainer) => (
          <UserRow
            key={trainer.id}
            avatar={trainer.avatar}
            name={trainer.name}
            email={trainer.email}
            actions={
              <>
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    trainer.status === "approved"
                      ? "bg-emerald-600"
                      : trainer.status === "rejected"
                        ? "bg-red-600"
                        : "bg-yellow-600"
                  } text-white`}
                >
                  {trainer.status}
                </span>

                {trainer.status === "pending" && (
                  <>
                    <button
                      onClick={() => updateStatus(trainer.id, "approved")}
                      className="rounded-md bg-emerald-600 px-3 py-1 text-xs text-white hover:bg-emerald-700"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => updateStatus(trainer.id, "rejected")}
                      className="rounded-md bg-red-600 px-3 py-1 text-xs text-white hover:bg-red-700"
                    >
                      Reject
                    </button>
                  </>
                )}
              </>
            }
          />
        ))}
      </div>
    </div>
  );
}
