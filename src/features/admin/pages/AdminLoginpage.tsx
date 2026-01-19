import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";
import { useAdminLoginForm } from "../hooks/useAdminLoginForm";
import type { LoginInput } from "../../auth/validation";
import { notify } from "../../../lib/notify";
import { InputField } from "../../../shared/components/form/InputField";
import { PasswordField } from "../../../shared/components/form/PasswordField";
import { FormSubmitButton } from "../../../shared/components/form/FormSubmitButton";
import { FormErrorMessage } from "../../../shared/components/form/FormErrorMessage";

export default function AdminLoginpage() {
  const navigate = useNavigate();
  const { login, loading, apiError } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useAdminLoginForm();

  const onSubmit = async (data: LoginInput) => {
    const res = await login({ ...data, loginAs: "admin" });
    notify.success(res.message);
    navigate("/redirect", { replace: true });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-600/20 blur-[140px]" />

      {/* Header */}
      <header className="relative z-10 px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5">
            <span className="text-lg font-bold tracking-tight text-white">
              F
            </span>
          </div>

          <span className="text-xl font-medium tracking-tight text-white">
            Fit<span className="text-amber-300">Buddy</span>
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10 flex items-start justify-center px-6 pb-16 pt-6">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-900/50 p-6 shadow-2xl shadow-black/60 backdrop-blur-2xl">
          <div className="space-y-6">
            {/* Heading */}
            <div className="space-y-3 text-center">
              <h1 className="text-3xl font-black tracking-tight text-white">
                Administrator <span className="text-amber-300/90">Login</span>
              </h1>
              <p className="text-sm leading-relaxed text-zinc-400">
                Authorized personnel only
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <InputField
                type="email"
                icon={<Mail size={18} />}
                placeholder="Admin email"
                error={errors.email?.message}
                {...register("email")}
              />

              <PasswordField
                placeholder="Password"
                error={errors.password?.message}
                {...register("password")}
              />

              <FormSubmitButton
                label="Sign in as Admin"
                loading={loading}
                submitting={isSubmitting}
              />

              <FormErrorMessage message={apiError} align="center" />
            </form>

            {/* Footer note */}
            <p className="text-center text-xs text-zinc-500">
              This area is restricted to system administrators.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
