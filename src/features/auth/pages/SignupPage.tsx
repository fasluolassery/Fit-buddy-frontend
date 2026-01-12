import { type SignupInput } from "../validation";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { Mail, Phone, User2 } from "lucide-react";
import { useSignupForm } from "../hooks/useSignupForm";
import { notify } from "../../../lib/notify";
import { useAuth } from "../hooks/useAuth";
import { InputField } from "../../../shared/components/form/InputField";
import { PasswordField } from "../../../shared/components/form/PasswordField";
import { FormSubmitButton } from "../../../shared/components/form/FormSubmitButton";
import { FormErrorMessage } from "../../../shared/components/form/FormErrorMessage";
import { Divider } from "../../../shared/components/ui/Divider";
import { GoogleAuthButton } from "../components/GoogleAuthButton";
import { AuthSwitchLink } from "../components/AuthSwitchLink";

export default function SignupPage() {
  const [otpStarted, setOtpStarted] = useState(false);
  const navigate = useNavigate();

  const { role } = useOutletContext<{ role: "user" | "trainer" }>();
  const { signup, loading, apiError } = useAuth();

  useEffect(() => {
    if (!otpStarted) return;
    localStorage.setItem("otpRequestedAt", Date.now().toString());
  }, [otpStarted]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useSignupForm(role);

  const onSubmit = async (data: SignupInput) => {
    const res = await signup(data);

    setOtpStarted(true);
    notify.success(res.message);

    navigate("/verify-otp", {
      state: { email: res.data.email },
      replace: true,
    });
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
