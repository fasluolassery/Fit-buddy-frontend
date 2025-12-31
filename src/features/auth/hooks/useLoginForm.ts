import { useForm } from "react-hook-form";
import { loginSchema, type LoginInput } from "../validation";
import { zodResolver } from "@hookform/resolvers/zod";

export function useLoginForm() {
  return useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: {
      password: "user123",
    },
  });
}
