import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { forgotPasswordSchema } from "../validation";

export function useForgotPasswordForm() {
  return useForm({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onTouched",
  });
}
