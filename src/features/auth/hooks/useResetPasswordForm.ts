import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "../validation";

export function useResetPasswordForm() {
  return useForm({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onTouched",
  });
}
