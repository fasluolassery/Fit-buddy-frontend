import { AlertTriangle, Mail } from "lucide-react";

export default function TrainerRejected() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-zinc-900 bg-[#0c0c0c]/80 p-10 backdrop-blur-2xl">
        {/* Subtle red glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 text-center">
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400">
            <AlertTriangle size={28} />
          </div>

          {/* Title */}
          <h2 className="mt-6 text-2xl font-bold text-white">
            Trainer Application Rejected
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400">
            After reviewing your submission, we found issues that need
            correction before approval. This is not permanent.
          </p>

          {/* Reason box (future-ready) */}
          <div className="mt-8 rounded-2xl border border-zinc-900 bg-[#0a0a0a] p-5 text-left">
            <p className="text-xs font-semibold uppercase text-zinc-500">
              Common Reasons
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>• Incomplete or unclear certification documents</li>
              <li>• Profile information mismatch</li>
              <li>• Missing experience or specialization details</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* <button className="flex items-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3 text-xs font-bold text-black transition-all hover:bg-[#C4A030]">
              <Edit3 size={16} />
              Update Profile
            </button> */}

            <button className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#0a0a0a] px-6 py-3 text-xs font-semibold text-white transition-colors hover:border-red-500/30 hover:bg-red-500/10">
              <Mail size={16} />
              Contact Support
            </button>
          </div>

          {/* Footer note */}
          <p className="mt-6 text-xs text-zinc-500">
            You can resubmit your application once the required changes are
            made.
          </p>
        </div>
      </div>
    </div>
  );
}
