import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupSchema, type SignupInput } from "../validation";

export function useSignupForm() {
  return useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
    defaultValues: {
      password: "user123",
      confirmPassword: "user123",
    },
  });
}
