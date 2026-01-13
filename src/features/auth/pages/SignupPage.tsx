import { Mail, Phone, User2 } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { notify } from "../../../lib/notify";
import { FormErrorMessage } from "../../../shared/components/form/FormErrorMessage";
import { FormSubmitButton } from "../../../shared/components/form/FormSubmitButton";
import { InputField } from "../../../shared/components/form/InputField";
import { PasswordField } from "../../../shared/components/form/PasswordField";
import { Divider } from "../../../shared/components/ui/Divider";
import { AuthSwitchLink } from "../components/AuthSwitchLink";
import { GoogleAuthButton } from "../components/GoogleAuthButton";
import { useAuth } from "../hooks/useAuth";
import { useSignupForm } from "../hooks/useSignupForm";
import { type SignupInput } from "../validation";

function startSignupOtp(email: string) {
  const now = Date.now();
  localStorage.setItem("otpRequestedAt", now.toString());
  sessionStorage.setItem("authMail", email);
}

export default function SignupPage() {
  const navigate = useNavigate();

  const { role } = useOutletContext<{ role: "user" | "trainer" }>();
  const { signup, loading, apiError } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useSignupForm(role);

  const onSubmit = async (data: SignupInput) => {
    const res = await signup(data);
    const { email } = res.data;

    startSignupOtp(email);

    notify.success(res.message);
    navigate("/verify-otp", { replace: true });
  };

  return (
    <div className="mx-auto w-full max-w-sm space-y-4">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-black tracking-tight text-white">
          Create your <span className="text-amber-300/90">account</span>
        </h1>
        <p className="text-sm leading-relaxed text-zinc-400">
          Join FitBuddy and start your journey
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <InputField
            type="text"
            placeholder="Full Name"
            icon={<User2 size={18} />}
            error={errors.name?.message}
            {...register("name")}
          />

          <InputField
            type="tel"
            placeholder="Phone Number"
            icon={<Phone size={18} />}
            error={errors.phone?.message}
            {...register("phone")}
          />
        </div>

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

        <PasswordField
          placeholder="Confirm Password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <FormSubmitButton
          label="Sign up"
          loadingLabel="Creating account..."
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
        text="Already have an account?"
        linkText="Sign in"
        to="/login"
      />
    </div>
  );
}
