import { type LoginInput } from "../validation";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { useLoginForm } from "../hooks/useLoginForm";
import { notify } from "../../../lib/notify";
import { useAuth } from "../hooks/useAuth";
import { getHomeRoute } from "../../../shared/utils/auth.utils";
import { InputField } from "../../../shared/components/form/InputField";
import { PasswordField } from "../../../shared/components/form/PasswordField";
import { FormSubmitButton } from "../../../shared/components/form/FormSubmitButton";
import { FormErrorMessage } from "../../../shared/components/form/FormErrorMessage";
import { Divider } from "../../../shared/components/ui/Divider";
import { GoogleAuthButton } from "../components/GoogleAuthButton";
import { AuthSwitchLink } from "../components/AuthSwitchLink";

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
    <div className="mx-auto w-full max-w-sm space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-4">
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
        </div>

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
