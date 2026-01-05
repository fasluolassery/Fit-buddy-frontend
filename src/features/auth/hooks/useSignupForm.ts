import { useForm } from "react-hook-form";
import { signupSchema, type SignupInput } from "../validation";
import { zodResolver } from "@hookform/resolvers/zod";

export function useSignupForm(role: "user" | "trainer") {
  return useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
    defaultValues: {
      role,
      password: "user123",
      confirmPassword: "user123",
    },
  });
}
