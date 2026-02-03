import { AlertTriangle, Mail } from "lucide-react";
import { useAppSelector } from "../../../shared/hooks/redux";

export default function TrainerRejected() {
  const { user } = useAppSelector((s) => s.auth);

  const reason =
    user?.trainerRejectionReason ??
    "Your application needs correction before approval.";

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-zinc-900 bg-[#0c0c0c]/80 p-10 backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400">
            <AlertTriangle size={28} />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-white">
            Trainer Application Rejected
          </h2>

          {/* REAL reason */}
          <p className="mx-auto mt-4 max-w-md text-sm text-zinc-300">
            {reason}
          </p>

          {/* Optional helper box */}
          <div className="mt-8 rounded-2xl border border-zinc-900 bg-[#0a0a0a] p-5 text-left">
            <p className="text-xs font-semibold uppercase text-zinc-500">
              What you can do
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>• Update your profile and documents</li>
              <li>• Ensure certificates are clear and valid</li>
              <li>• Resubmit once changes are complete</li>
            </ul>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#0a0a0a] px-6 py-3 text-xs font-semibold text-white transition-colors hover:border-red-500/30 hover:bg-red-500/10">
              <Mail size={16} />
              Contact Support
            </button>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            You can resubmit your application after making the required changes.
          </p>
        </div>
      </div>
    </div>
  );
}
