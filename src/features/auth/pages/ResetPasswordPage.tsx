import { KeyRound } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { notify } from "../../../lib/notify";
import { FormErrorMessage } from "../../../shared/components/form/FormErrorMessage";
import { FormSubmitButton } from "../../../shared/components/form/FormSubmitButton";
import { PasswordField } from "../../../shared/components/form/PasswordField";
import { useAuth } from "../hooks/useAuth";
import { useResetPasswordForm } from "../hooks/useResetPasswordForm";
import type { ResetPasswordInput } from "../validation";

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const token = params.get("token");

  const { resetPassword, loading, apiError } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useResetPasswordForm();

  const onSubmit = async (data: ResetPasswordInput) => {
    if (!token) {
      notify.error("Invalid or expired reset link");
      return;
    }

    const { password } = data;
    const res = await resetPassword({
      token,
      newPassword: password,
    });

    notify.success(res.message);
    navigate("/login", { replace: true });
  };

  return (
    <div className="mx-auto w-full max-w-sm space-y-6">
      {/* Icon */}
      <div className="flex justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 ring-1 ring-[#D4AF37]/30">
          <KeyRound size={22} className="text-[#D4AF37]" />
        </div>
      </div>

      {/* Title */}
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-black tracking-tight text-white">
          Reset <span className="text-amber-300/90">Password</span>
        </h1>
        <p className="text-sm text-zinc-400">
          Enter a new password for your account
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <PasswordField
          placeholder="New password"
          error={errors.password?.message}
          {...register("password")}
        />

        <PasswordField
          placeholder="Confirm password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <FormSubmitButton
          label="Reset password"
          loadingLabel="Resetting..."
          loading={loading}
          submitting={isSubmitting}
          disabled={!token}
        />

        <FormErrorMessage
          message={apiError}
          align="center"
          maxHeight="max-h-10"
        />
      </form>
    </div>
  );
}
