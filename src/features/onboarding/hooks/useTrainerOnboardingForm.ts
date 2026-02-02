import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  trainerOnboardingSchema,
  type TrainerOnboardingInput,
} from "../validation";

export function useTrainerOnboardingForm() {
  return useForm<TrainerOnboardingInput>({
    resolver: zodResolver(trainerOnboardingSchema),
    mode: "onTouched",
    defaultValues: {
      bio: "Certified fitness trainer focused on safe, sustainable progress.",
      experience: "2",
      specializations: ["Weight Loss", "Muscle Building", "General Fitness"],
      certificates: [],
    },
  });
}
