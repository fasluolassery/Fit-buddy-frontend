import { KeyRound, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../lib/notify";
import { FormErrorMessage } from "../../../shared/components/form/FormErrorMessage";
import { FormSubmitButton } from "../../../shared/components/form/FormSubmitButton";
import { InputField } from "../../../shared/components/form/InputField";
import { AuthSwitchLink } from "../components/AuthSwitchLink";
import { useAuth } from "../hooks/useAuth";
import { useForgotPasswordForm } from "../hooks/useForgotPasswordForm";
import type { ForgotPasswordInput } from "../validation";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForgotPasswordForm();

  const { forgotPassword, loading, apiError } = useAuth();

  const onSubmit = async (data: ForgotPasswordInput) => {
    const res = await forgotPassword(data);
    notify.success(res.message);
    const { email } = data;
    setEmail(email);
    setEmailSent(true);
  };

  const handleResend = async () => {
    await forgotPassword({ email });
    notify.success("Reset link sent again");
  };

  return (
    <div className="mx-auto w-full max-w-sm space-y-6">
      {/* Header Icon */}
      {!emailSent && (
        <div className="flex justify-center">
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 ring-1 ring-[#D4AF37]/30">
              <KeyRound size={22} className="text-[#D4AF37]" />
            </div>
            <div className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#D4AF37] shadow-md shadow-[#D4AF37]/40">
              <Mail size={12} className="text-black" />
            </div>
          </div>
        </div>
      )}

      {/* TITLE */}
      {!emailSent && (
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-black tracking-tight text-white">
            Forgot <span className="text-amber-300/90">Password?</span>
          </h1>
          <p className="text-sm leading-relaxed text-zinc-400">
            Enter your email and we’ll send you a reset link
          </p>
        </div>
      )}

      {/* SUCCESS STATE */}
      {emailSent ? (
        <div className="space-y-6 text-center">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 ring-1 ring-[#D4AF37]/30">
              <Mail size={26} className="text-[#D4AF37]" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="mb-2 text-2xl font-bold">Check your email</h1>
            <p className="text-sm text-zinc-400">
              We’ve sent a password reset link to <br />
              <span className="font-medium text-zinc-300">{email}</span>
            </p>
          </div>

          <button
            type="button"
            className="order-1 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-[#D4AF37]"
            onClick={handleResend}
          >
            <Mail size={14} />
            <span>Resend email</span>
          </button>

          <div className="flex justify-center">
            <div className="w-full max-w-96 rounded-xl border border-white/10 bg-zinc-900/60 p-5 text-left backdrop-blur-xl">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20">
                  <Mail size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Didn’t receive the Mail?
                  </p>
                  <p className="text-xs text-zinc-400">
                    Check spam or use resend to get a new one.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="order-2 text-sm font-medium text-amber-400 hover:text-amber-300"
            onClick={() => navigate("/login")}
          >
            Back to login
          </button>
        </div>
      ) : (
        /* FORM STATE */
        <>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <InputField
              type="email"
              placeholder="Email Address"
              icon={<Mail size={18} />}
              error={errors.email?.message}
              {...register("email")}
            />

            <FormSubmitButton
              label="Send reset link"
              loadingLabel="Sending..."
              loading={loading}
              submitting={isSubmitting}
            />

            <FormErrorMessage
              message={apiError}
              align="center"
              maxHeight="max-h-10"
            />
          </form>

          <AuthSwitchLink
            text="Remember your password?"
            linkText="Back to login"
            to="/login"
          />
        </>
      )}
    </div>
  );
}
