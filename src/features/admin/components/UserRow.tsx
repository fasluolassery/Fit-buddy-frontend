import type React from "react";
import { GlassCard } from "../../../shared/components/ui";

type Props = {
  avatar: string;
  name: string;
  email: string;
  actions: React.ReactNode;
};

export default function UserRow({ avatar, name, email, actions }: Props) {
  return (
    <GlassCard className="rounded-xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-white">{name}</p>
            <p className="text-xs text-neutral-400">{email}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">{actions}</div>
      </div>
    </GlassCard>
  );
}
