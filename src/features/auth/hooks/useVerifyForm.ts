import { useForm } from "react-hook-form";
import { verifyOtpSchema, type VerifyOtpInput } from "../validation";
import { zodResolver } from "@hookform/resolvers/zod";

export function useVerifyOtpForm(email: string) {
  return useForm<VerifyOtpInput>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: { email, otp: "" },
  });
}
