import { Eye, EyeOff, Lock } from "lucide-react";
import { useState, type InputHTMLAttributes } from "react";
import { FormErrorMessage } from "./FormErrorMessage";

type PasswordFieldProps = {
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function PasswordField({
  error,
  className = "",
  ...props
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="relative">
        <Lock
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          size={18}
        />

        <input
          {...props}
          type={showPassword ? "text" : "password"}
          className={`input-luxury pl-10 pr-10 ${
            error ? "border-red-500/50" : ""
          } ${className}`}
        />

        <button
          type="button"
          onClick={() => setShowPassword((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors hover:text-[#D4AF37]"
          aria-label="Toggle password visibility"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <FormErrorMessage message={error} />
    </div>
  );
}
