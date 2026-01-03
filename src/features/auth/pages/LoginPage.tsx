import { type LoginInput } from "../validation";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { useLoginForm } from "../hooks/useLoginForm";
import { notify } from "../../../lib/notify";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const apiError = null;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useLoginForm();

  const onSubmit = async (_data: LoginInput) => {
    setLoading(true);
    // Simulate a short delay for premium feel
    setTimeout(() => {
      setLoading(false);
      notify.success("Welcome back to FitBuddy!");
      navigate("/dashboard");
    }, 800);
  };

  return (
    <div className="mx-auto w-full max-w-sm space-y-4">
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-4">
          {/* Email */}
          <div>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                size={18}
              />
              <input
                {...register("email")}
                type="email"
                placeholder="alex@example.com"
                className={`input-luxury pl-10 ${
                  errors.email ? "border-red-500/50" : ""
                }`}
              />
            </div>
            <p
              className={`mt-1 text-xs text-red-400 transition-all duration-200 ${
                errors.email ? "max-h-5 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {errors.email?.message}
            </p>
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                size={18}
              />
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`input-luxury pl-10 pr-10 ${
                  errors.password ? "border-red-500/50" : ""
                }`}
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
            <p
              className={`mt-1 text-xs text-red-400 transition-all duration-200 ${
                errors.password ? "max-h-5 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {errors.password?.message}
            </p>

            {/* Forgot */}
            <div className="mt-2 flex justify-end">
              <Link
                to="/forgot-password"
                className="text-xs font-semibold text-[#D4AF37]/80 transition-colors hover:text-[#D4AF37]"
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading || isSubmitting}
          className="btn-primary w-full"
        >
          {loading || isSubmitting ? "Signing in..." : "Sign in"}
        </button>

        {/* Error Message */}
        <p
          className={`text-center text-xs text-red-400 transition-all duration-200 ${
            apiError ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          {apiError}
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
          <span className="text-xs text-zinc-500">OR</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        </div>

        <button
          type="button"
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/70 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:border-amber-400"
        >
          {/* liquid layer */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-500/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          {/* content */}
          <FaGoogle className="relative z-10 h-4 w-4 text-zinc-400 transition-colors group-hover:text-white" />
          <span className="relative z-10">Continue with Google</span>
        </button>
      </form>
    </div>
  );
}
