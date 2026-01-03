import { type SignupInput } from "../validation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, User, Mail, Phone, Lock } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { useSignupForm } from "../hooks/useSignupForm";
import { notify } from "../../../lib/notify";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const apiError = null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSignupForm();

  const onSubmit = async (data: SignupInput) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      notify.success("Account created! Please verify your email.");
      navigate("/verify-otp", { state: { email: data.email } });
    }, 1000);
  };

  return (
    <div className="mx-auto w-full max-w-sm space-y-3">
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="space-y-3">
          {/* Name */}
          {/* Name */}
          <div>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                size={18}
              />
              <input
                {...register("name")}
                type="text"
                placeholder="Full Name"
                className={`input-luxury pl-10 ${
                  errors.name ? "border-red-500/50" : ""
                }`}
              />
            </div>
            <p
              className={`mt-1 text-xs text-red-400 transition-all duration-200 ${
                errors.name ? "max-h-5 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {errors.name?.message}
            </p>
          </div>

          {/* Email */}
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
                placeholder="Email Address"
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

          {/* Phone */}
          {/* Phone */}
          <div>
            <div className="relative">
              <Phone
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                size={18}
              />
              <input
                {...register("phone")}
                type="tel"
                placeholder="Phone Number"
                className={`input-luxury pl-10 ${
                  errors.phone ? "border-red-500/50" : ""
                }`}
              />
            </div>
            <p
              className={`mt-1 text-xs text-red-400 transition-all duration-200 ${
                errors.phone ? "max-h-5 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {errors.phone?.message}
            </p>
          </div>

          {/* Password */}
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
                placeholder="Password"
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
          </div>

          {/* Confirm Password */}
          {/* Confirm Password */}
          <div>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                size={18}
              />
              <input
                {...register("confirmPassword")}
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className={`input-luxury pl-10 pr-10 ${
                  errors.confirmPassword ? "border-red-500/50" : ""
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors hover:text-[#D4AF37]"
                aria-label="Toggle confirm password visibility"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <p
              className={`mt-1 text-xs text-red-400 transition-all duration-200 ${
                errors.confirmPassword
                  ? "max-h-5 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {errors.confirmPassword?.message}
            </p>
          </div>
        </div>

        {/* Submit */}
        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? "Creating account..." : "Sign up"}
        </button>

        <p
          className={`text-center text-xs text-red-400 transition-all duration-200 ${
            apiError ? "max-h-5 opacity-100" : "max-h-0 opacity-0"
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
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
        >
          <FaGoogle className="text-zinc-400 transition-colors group-hover:text-white" />
          <span>Continue with Google</span>
        </button>
      </form>
    </div>
  );
}
