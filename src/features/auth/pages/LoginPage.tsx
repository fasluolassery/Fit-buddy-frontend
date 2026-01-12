import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../lib/notify";
import { FormErrorMessage } from "../../../shared/components/form/FormErrorMessage";
import { FormSubmitButton } from "../../../shared/components/form/FormSubmitButton";
import { InputField } from "../../../shared/components/form/InputField";
import { PasswordField } from "../../../shared/components/form/PasswordField";
import { Divider } from "../../../shared/components/ui/Divider";
import { getHomeRoute } from "../../../shared/utils/auth.utils";
import { AuthSwitchLink } from "../components/AuthSwitchLink";
import { GoogleAuthButton } from "../components/GoogleAuthButton";
import { useAuth } from "../hooks/useAuth";
import { useLoginForm } from "../hooks/useLoginForm";
import { type LoginInput } from "../validation";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, loading, apiError } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useLoginForm();

  const onSubmit = async (data: LoginInput) => {
    const { res, role } = await login(data);
    notify.success(res.message);
    navigate(getHomeRoute(role), { replace: true });
  };

  return (
    <div className="mx-auto w-full max-w-sm space-y-6">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-black tracking-tight text-white">
          Welcome <span className="text-amber-300/90">Back</span>
        </h1>

        <p className="text-sm leading-relaxed text-zinc-400">
          Sign in to continue your journey with FitBuddy
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          type="email"
          placeholder="Email Address"
          icon={<Mail size={18} />}
          error={errors.email?.message}
          {...register("email")}
        />

        <PasswordField
          placeholder="Password"
          error={errors.password?.message}
          {...register("password")}
        />

        <FormSubmitButton
          label="Sign in"
          loadingLabel="Signing in..."
          loading={loading}
          submitting={isSubmitting}
        />

        <FormErrorMessage
          message={apiError}
          align="center"
          maxHeight="max-h-10"
        />

        <Divider label="OR" />

        <GoogleAuthButton />
      </form>

      <AuthSwitchLink
        text="Don’t have an account?"
        linkText="Sign up"
        to="/signup"
      />
    </div>
  );
}
