import { Mail } from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { notify } from "../../../lib/notify";
import { FormErrorMessage } from "../../../shared/components/form/FormErrorMessage";
import { FormSubmitButton } from "../../../shared/components/form/FormSubmitButton";
import { InputField } from "../../../shared/components/form/InputField";
import { PasswordField } from "../../../shared/components/form/PasswordField";
import { Divider } from "../../../shared/components/ui/Divider";
import { ERROR_CODES } from "../../../shared/constants/error-messages";
import { AUTH_ROUTES } from "../../../shared/constants/routes";
import type { ApiErrorResponse } from "../../../shared/types/api";
import { AuthSwitchLink } from "../components/AuthSwitchLink";
import { GoogleAuthButton } from "../components/GoogleAuthButton";
import { useAuth } from "../hooks/useAuth";
import { useLoginForm } from "../hooks/useLoginForm";
import { type LoginInput } from "../validation";

export default function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login, startEmailVerification, loading, apiError } = useAuth();

  useEffect(() => {
    const error = searchParams.get("error");
    if (!error) return;

    const messages: Record<string, string> = {
      ROLE_REQUIRED: "Please select a role before signing up.",
      BAD_REQUEST: "Invalid request. Please try again.",
      ACCOUNT_EXISTS: "Account exists. Use email & password login.",
      UNAUTHORIZED: "No account found. Please sign up.",
      GOOGLE_AUTH_FAILED: "Google authentication failed. Try again.",
    };

    notify.error(messages[error] ?? "Authentication failed");
    navigate(".", { replace: true });
  }, [searchParams, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useLoginForm();

  const onSubmit = async (data: LoginInput) => {
    try {
      const res = await login(data);

      notify.success(res.message);
      navigate("/redirect", { replace: true });
    } catch (err) {
      const apiErr = err as ApiErrorResponse;

      const {
        error: { code, message },
      } = apiErr;

      if (code === ERROR_CODES.EMAIL_NOT_VERIFIED) {
        notify.verifyEmail(message, async () => {
          const { email } = data;
          const res = await startEmailVerification({ email });

          const { message } = res;
          notify.success(message);
          navigate("/verify-otp", { replace: true });
        });
        return;
      }
      throw err;
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${AUTH_ROUTES.GOOGLE}?intent=login`;
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

        {/* Forgot */}
        <div className="mt-2 flex justify-end">
          <Link
            to="/forgot-password"
            className="text-xs font-medium text-zinc-500 transition-colors hover:text-amber-400"
          >
            Forgot password?
          </Link>
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

        <GoogleAuthButton onClick={handleGoogleLogin} />
      </form>

      <AuthSwitchLink
        text="Don’t have an account?"
        linkText="Sign up"
        to="/signup"
      />
    </div>
  );
}
