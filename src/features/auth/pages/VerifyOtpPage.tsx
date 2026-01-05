import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { type VerifyOtpInput } from "../validation";
import { useVerifyOtpForm } from "../hooks/useVerifyForm";
import { notify } from "../../../lib/notify";
import { Mail, RefreshCw, Shield } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const OTP_EXPIRY_SECONDS = 10;

const getInitialTimeLeft = () => {
  const stored = localStorage.getItem("otpRequestedAt");
  if (!stored) return 0;

  const elapsedSeconds = Math.floor((Date.now() - Number(stored)) / 1000);

  return Math.max(OTP_EXPIRY_SECONDS - elapsedSeconds, 0);
};

export default function VerifyOtpPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [timeLeft, setTimeLeft] = useState(getInitialTimeLeft);

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
    localStorage.removeItem("otpRequestedAt");
    notify.success(res.message);
    navigate("/login", { replace: true });
  };

  const handleResend = () => {
    if (timeLeft > 0) return;

    //TODO: CALL RESEND API

    localStorage.setItem("otpRequestedAt", Date.now().toString());
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
      <div className="flex justify-center">
        <div className="relative">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 ring-1 ring-[#D4AF37]/30">
            <Shield size={26} className="text-[#D4AF37]" />
          </div>
          <div className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#D4AF37] shadow-md shadow-[#D4AF37]/40">
            <Mail size={12} className="text-black" />
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-bold">Verify your email</h1>
        <p className="text-sm text-zinc-400">
          Enter the 6-digit code sent to <br />
          <span className="font-medium text-zinc-300">{email}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Hidden fields */}
        <input type="hidden" {...register("email")} />
        <input type="hidden" {...register("otp")} />

        {/* OTP Inputs */}
        <div className="flex justify-center gap-2.5">
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
              className="h-14 w-14 rounded-xl border border-white/10 bg-zinc-900/60 text-center text-sm font-semibold text-white transition-all duration-300 focus:border-[#D4AF37]/50 focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/40"
            />
          ))}
        </div>

        {/* Error */}
        <p
          className={`mt-1 text-center text-xs text-red-400 transition-all duration-200 ${
            errors.otp || apiError ? "max-h-5 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          {errors.otp?.message || apiError}
        </p>

        {/* Resend */}
        <div className="mt-2 text-center">
          {timeLeft > 0 ? (
            <p className="text-xs font-medium text-zinc-500">
              Resend code in{" "}
              <span className="text-[#D4AF37]/80">
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
              </span>
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors hover:text-[#D4AF37]"
            >
              <RefreshCw
                size={14}
                className="transition-transform group-hover:rotate-180"
              />
              <span>Resend code</span>
            </button>
          )}
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full max-w-96 py-3"
          >
            {loading ? "Verifying..." : "Verify code"}
          </button>
        </div>

        {/* Info box under resend */}
        <div className="flex justify-center">
          <div className="w-full max-w-96 rounded-xl border border-white/10 bg-zinc-900/60 p-5 backdrop-blur-xl">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20">
                <Mail size={16} className="text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Didn’t receive the code?
                </p>
                <p className="text-xs text-zinc-400">
                  Check spam or use resend to get a new one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Trust indicators */}
      <div className="mt-6 flex items-center justify-center gap-6 text-xs text-zinc-500">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span>Secure verification</span>
        </div>
        <div className="h-4 w-px bg-zinc-800" />
        <div className="flex items-center gap-1.5">
          <span>OTP expires in 2 minutes</span>
        </div>
      </div>
    </div>
  );
}
