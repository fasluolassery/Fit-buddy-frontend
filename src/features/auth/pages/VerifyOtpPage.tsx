import { useRef, type KeyboardEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { verifyOtpSchema, type VerifyOtpInput } from "../validation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function VerifyOtpPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const { verifyOtp, loading, apiError } = useAuth();

  const email = location.state?.email;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VerifyOtpInput>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: { email, otp: "" },
  });

  const onSubmit = async (data: VerifyOtpInput) => {
    const res = await verifyOtp(data);
    alert(res.message);
    navigate("/login");
  };

  const updateOtpValue = (index: number, value: string) => {
    const otpArray = inputsRef.current.map((input) => input?.value ?? "");
    otpArray[index] = value;
    setValue("otp", otpArray.join(""));
  };

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    updateOtpValue(index, value);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-2xl font-semibold text-gray-800">
          Verify OTP
        </h1>
        <p className="mb-6 text-center text-sm text-gray-500">
          Enter the 6-digit code sent to <br />
          <span className="font-medium text-gray-700">{email}</span>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Hidden fields for RHF */}
          <input type="hidden" {...register("email")} />
          <input type="hidden" {...register("otp")} />

          {/* OTP Inputs */}
          <div className="flex justify-between gap-2">
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
                className="h-12 w-12 rounded-md border border-gray-300 text-center text-lg font-semibold focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            ))}
          </div>

          {errors.otp && (
            <p className="text-center text-sm text-red-600">
              {errors.otp.message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          {apiError && (
            <p className="text-center text-sm text-red-600">{apiError}</p>
          )}

          <p className="text-center text-sm text-gray-500">
            Didn’t receive the code?{" "}
            <button
              type="button"
              className="font-medium text-blue-600 hover:underline"
            >
              Resend OTP
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
