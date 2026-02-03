import { ShieldCheck, Clock, Mail, RefreshCcw } from "lucide-react";

export default function TrainerPending() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-zinc-900 bg-[#0c0c0c]/80 p-10 backdrop-blur-2xl">
        {/* Subtle glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
        </div>

        <div className="relative z-10 text-center">
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">
            <ShieldCheck size={28} />
          </div>

          {/* Title */}
          <h2 className="mt-6 text-2xl font-bold text-white">
            Trainer Profile Under Review
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400">
            Your trainer profile has been successfully submitted. Our admin team
            is currently verifying your details to ensure platform quality and
            compliance.
          </p>

          {/* Status cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-900 bg-[#0a0a0a] p-4">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-amber-400" />
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase text-zinc-500">
                    Estimated Time
                  </p>
                  <p className="text-sm font-medium text-white">24–48 Hours</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-900 bg-[#0a0a0a] p-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-400" />
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase text-zinc-500">
                    Notification
                  </p>
                  <p className="text-sm font-medium text-white">
                    Email & Dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer hint */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-zinc-500">
            <RefreshCcw size={14} />
            Status updates automatically once approved
          </div>
        </div>
      </div>
    </div>
  );
}
