import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.string().trim().email("Enter a valid email address"),
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must not exceed 50 characters"),
    phone: z
      .string()
      .trim()
      .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(64, "Password must not exceed 64 characters"),
    // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    // .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    role: z.enum(["user", "trainer", "admin"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export const verifyOtpSchema = z.object({
  email: z.string().trim().email("valid email address needed"),
  otp: z.string().length(6, "OTP must be 6 digits"),
});

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(64, "Password must not exceed 64 characters"),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type VerifyOtpInput = z.infer<typeof verifyOtpSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
