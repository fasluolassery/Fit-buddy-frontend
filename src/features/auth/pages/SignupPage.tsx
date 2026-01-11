import { type SignupInput } from "../validation";
import { useLocation, useNavigate } from "react-router-dom";
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

export default function SignupPage() {
  const [otpStarted, setOtpStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { signup, loading, apiError } = useAuth();

  const role =
    location.state?.role ||
    (sessionStorage.getItem("signupRole") as "user" | "trainer" | null);

  useEffect(() => {
    if (!otpStarted) return;
    localStorage.setItem("otpRequestedAt", Date.now().toString());
  }, [otpStarted]);

  useEffect(() => {
    if (!role && !submitted) {
      navigate("/", { replace: true });
    }
  }, [role, submitted, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useSignupForm(role);

  const onSubmit = async (data: SignupInput) => {
    setSubmitted(true);
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
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="space-y-3">
          <InputField
            type="text"
            placeholder="Full Name"
            icon={<User2 size={18} />}
            error={errors.name?.message}
            {...register("name")}
          />

          <InputField
            type="email"
            placeholder="Email Address"
            icon={<Mail size={18} />}
            error={errors.email?.message}
            {...register("email")}
          />

          <InputField
            type="tel"
            placeholder="Phone Number"
            icon={<Phone size={18} />}
            error={errors.phone?.message}
            {...register("phone")}
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
        </div>

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
    </div>
  );
}
