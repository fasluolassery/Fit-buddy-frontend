import { z } from "zod";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const ACCEPTED_CERT_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
];

export const trainerOnboardingSchema = z.object({
  bio: z
    .string()
    .min(20, "Bio must be at least 20 characters")
    .max(500, "Bio must be under 500 characters"),

  experience: z
    .string()
    .min(1, "Experience is required")
    .refine((val) => !Number.isNaN(Number(val)), "Experience must be a number")
    .refine((val) => Number(val) >= 0, "Experience cannot be negative")
    .refine((val) => Number(val) <= 60, "Experience looks unrealistic"),

  specializations: z
    .array(z.string().min(2))
    .min(1, "Add at least one specialization"),

  profilePhoto: z
    .custom<File | undefined>()
    .refine((file) => file instanceof File, {
      message: "Profile photo is required",
    })
    .refine((file) => file instanceof File && file.size <= MAX_IMAGE_SIZE, {
      message: "Image must be under 5MB",
    })
    .refine(
      (file) =>
        file instanceof File && ACCEPTED_IMAGE_TYPES.includes(file.type),
      {
        message: "Invalid image format",
      },
    ),

  certificates: z
    .array(z.custom<File>())
    .min(1, "Upload at least one certificate")
    .refine(
      (files) =>
        files.every(
          (f) =>
            f instanceof File &&
            f.size <= MAX_IMAGE_SIZE &&
            ACCEPTED_CERT_TYPES.includes(f.type),
        ),
      "Invalid certificate file",
    ),
});

export type TrainerOnboardingInput = z.infer<typeof trainerOnboardingSchema>;
