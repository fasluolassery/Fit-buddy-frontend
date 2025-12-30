import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupInput } from "../validation";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();
  const { signup, loading, apiError } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
    defaultValues: {
      password: "user123",
      confirmPassword: "user123",
      role: "user",
    },
  });

  const onSubmit = async (data: SignupInput) => {
    const res = await signup(data);
    alert(res.message);
    navigate("/verify-otp", { state: { email: res.data.email } });
  };

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-bold">Create your account</h1>
        <p className="text-sm text-zinc-400">
          Start your premium fitness journey
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-4">
          {/* Name */}
          <div>
            <input
              {...register("name")}
              type="text"
              placeholder="Full name"
              className={`w-full rounded-xl border bg-zinc-900/70 px-4 py-2.5 text-white transition-colors placeholder:text-zinc-500 focus:outline-none ${
                errors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-800 focus:border-amber-600"
              }`}
            />
            <p
              className={`mt-1 text-xs text-red-400 transition-all duration-200 ${
                errors.name ? "max-h-5 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {errors.name?.message}
            </p>
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email address"
              className={`w-full rounded-xl border bg-zinc-900/70 px-4 py-2.5 text-white transition-colors placeholder:text-zinc-500 focus:outline-none ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-800 focus:border-amber-600"
              }`}
            />
            <p
              className={`mt-1 text-xs text-red-400 transition-all duration-200 ${
                errors.email ? "max-h-5 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {errors.email?.message}
            </p>
          </div>

          {/* Phone */}
          <div>
            <input
              {...register("phone")}
              type="tel"
              placeholder="Phone number"
              className={`w-full rounded-xl border bg-zinc-900/70 px-4 py-2.5 text-white transition-colors placeholder:text-zinc-500 focus:outline-none ${
                errors.phone
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-800 focus:border-amber-600"
              }`}
            />
            <p
              className={`mt-1 text-xs text-red-400 transition-all duration-200 ${
                errors.phone ? "max-h-5 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {errors.phone?.message}
            </p>
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`w-full rounded-xl border bg-zinc-900/70 px-4 py-2.5 text-white transition-colors placeholder:text-zinc-500 focus:outline-none ${
                  errors.password
                    ? "border-red-500 focus:border-red-500"
                    : "border-zinc-800 focus:border-amber-600"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-amber-400"
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

          {/*Confirm Password */}
          <div>
            <div className="relative">
              <input
                {...register("confirmPassword")}
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className={`w-full rounded-xl border bg-zinc-900/70 px-4 py-2.5 text-white transition-colors placeholder:text-zinc-500 focus:outline-none ${
                  errors.confirmPassword
                    ? "border-red-500 focus:border-red-500"
                    : "border-zinc-800 focus:border-amber-600"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-amber-400"
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
        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 font-semibold text-black transition-all duration-300 hover:from-amber-500 hover:to-amber-500 disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Sign up"}
        </button>
        <p
          className={`mt-3 text-center text-xs text-red-400 transition-all duration-200 ${
            apiError ? "max-h-5 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          {apiError}
        </p>

        {/* Divider */}
        <div className="my-5 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <span className="text-sm font-normal text-zinc-500">or</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        <button
          type="button"
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/70 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:border-amber-600"
        >
          {/* liquid layer */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-500/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          {/* content */}
          <FaGoogle className="relative z-10 h-4 w-4 text-zinc-400 transition-colors group-hover:text-white" />
          <span className="relative z-10">Continue with Google</span>
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-sm text-zinc-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-amber-400 hover:text-amber-300"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
