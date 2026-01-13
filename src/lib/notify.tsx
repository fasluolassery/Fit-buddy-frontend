import { AlertTriangle } from "lucide-react";
import toast, { ToastBar } from "react-hot-toast";
import { toasterOptions } from "../styles/toast.config";

export const notify = {
  success: (msg: string) => toast.success(msg),
  error: (msg: string) => toast.error(msg),

  verifyEmail: (msg: string, onVerify: () => void) =>
    toast.custom(
      (t) => (
        <ToastBar toast={t} style={toasterOptions.style}>
          {() => (
            <div className="flex items-center gap-3">
              {/* Custom icon */}
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </div>

              {/* Message (constrained) */}
              <div className="text-sm leading-snug text-zinc-400">{msg}</div>

              {/* Action */}
              <button
                onClick={() => {
                  toast.dismiss(t.id);
                  onVerify();
                }}
                className="shrink-0 rounded-md bg-amber-500 px-3 py-1.5 text-sm font-medium text-black transition-colors hover:bg-amber-400"
              >
                Verify
              </button>
            </div>
          )}
        </ToastBar>
      ),
      { duration: 4000 },
    ),
};
