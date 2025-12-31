import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { type VerifyOtpInput } from "../validation";
import { useVerifyOtpForm } from "../hooks/useVerifyForm";
import { notify } from "../../../lib/notify";

const OTP_EXPIRY_SECONDS = 120;

export default function VerifyOtpPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [timeLeft, setTimeLeft] = useState(OTP_EXPIRY_SECONDS);

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

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 font-semibold text-black transition-all duration-300 hover:from-amber-500 hover:to-amber-500 disabled:opacity-60"
        >
          {loading ? "Verifying..." : "Verify code"}
        </button>

        {/* Timer */}
        <p className="text-center text-xs text-zinc-400">
          OTP expires in{" "}
          <span className="font-medium text-zinc-200">
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </span>
        </p>

        {/* Resend */}
        <p className="text-center text-sm text-zinc-400">
          Didn’t receive the code?{" "}
          <button
            type="button"
            onClick={handleResend}
            disabled={timeLeft > 0}
            className="font-medium text-amber-400 hover:text-amber-300 disabled:text-zinc-500"
          >
            Resend
          </button>
        </p>
      </form>
    </div>
  );
}
