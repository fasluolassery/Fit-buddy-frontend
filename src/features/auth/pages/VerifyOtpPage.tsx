import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { type VerifyOtpInput } from "../validation";
import { useVerifyOtpForm } from "../hooks/useVerifyForm";
import { notify } from "../../../lib/notify";
import { Mail, RefreshCw, Shield } from "lucide-react";

const OTP_EXPIRY_SECONDS = 120;

export default function VerifyOtpPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [timeLeft, setTimeLeft] = useState(OTP_EXPIRY_SECONDS);
  const [canResend] = useState(false);

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const { verifyOtp, loading, apiError } = useAuth();

  const email: string = location.state?.email;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useVerifyOtpForm(email);

  const onSubmit = async (data: VerifyOtpInput) => {
    const res = await verifyOtp(data);
    notify.success(res.message);
    navigate("/login", { replace: true });
  };

  const handleResend = () => {
    if (timeLeft > 0) return;

    //TODO: CALL RESEND API
    setTimeLeft(OTP_EXPIRY_SECONDS);
  };

  const updateOtpValue = (index: number, value: string) => {
    const otpArray = inputsRef.current.map((input) => input?.value ?? "");
    otpArray[index] = value;
    setValue("otp", otpArray.join(""));
  };

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    updateOtpValue(index, value);
    if (value && index < 5) inputsRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="space-y-6">
      {/* Icon */}
      <div className="mb-6 flex justify-center">
        <div className="relative">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 ring-2 ring-amber-500/30">
            <Shield size={36} className="text-amber-400" />
          </div>
          <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 shadow-lg shadow-amber-500/50">
            <Mail size={16} className="text-black" />
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-bold">Verify your email</h1>
        <p className="text-sm text-zinc-400">
          Enter the 6-digit code sent to
          <br />
          <span className="font-medium text-zinc-300">{email}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Hidden fields */}
        <input type="hidden" {...register("email")} />
        <input type="hidden" {...register("otp")} />

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="h-14 w-14 rounded-xl border border-zinc-800 bg-zinc-900/70 text-center text-lg font-semibold text-white transition-colors focus:border-amber-600 focus:outline-none"
            />
          ))}
        </div>

        {/* Error */}
        <p
          className={`text-center text-xs text-red-400 transition-all duration-200 ${
            errors.otp || apiError ? "max-h-5 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          {errors.otp?.message || apiError}
        </p>

        {/* Timer & Resend */}
        <div className="mb-6 text-center">
          {!canResend ? (
            <p className="text-sm text-zinc-400">
              Resend code in{" "}
              <span className="font-semibold text-amber-400">
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
              </span>
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="group inline-flex items-center gap-2 text-sm font-medium text-amber-400 transition-colors hover:text-amber-300"
            >
              <RefreshCw
                size={16}
                className="transition-transform group-hover:rotate-180"
              />
              Resend Code
            </button>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 font-semibold text-black transition-all duration-300 hover:from-amber-500 hover:to-amber-500 disabled:opacity-60"
        >
          {loading ? "Verifying..." : "Verify code"}
        </button>

        {/* Info Box */}
        <div className="mt-6 rounded-xl border border-white/10 bg-zinc-900/60 p-4 backdrop-blur-xl">
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/20">
              <Mail size={16} className="text-blue-400" />
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold text-white">
                Didn't receive the code?
              </p>
              <p className="text-xs text-zinc-400">
                Check your spam folder or click resend to get a new code.
              </p>
            </div>
          </div>
        </div>
      </form>

      {/* Trust indicators */}
      <div className="mt-6 flex items-center justify-center gap-6 text-xs text-zinc-500">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span>Secure Verification</span>
        </div>
        <div className="h-4 w-px bg-zinc-800" />
        <div className="flex items-center gap-1.5">
          <span>Expires in 5 minutes</span>
        </div>
      </div>
    </div>
  );
}
