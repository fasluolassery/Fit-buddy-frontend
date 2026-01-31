import { StepLayout } from "../StepLayout";
import type { UserOnboardingData } from "../../types";

interface Props {
  data: UserOnboardingData;
  onSubmit: () => void;
}

export function ReviewStep({ data, onSubmit }: Props) {
  return (
    <StepLayout
      title="Review & Finish"
      description="Make sure everything looks right"
    >
      <div className="space-y-3 text-sm text-zinc-300">
        <p>Goal: {data.primaryGoal}</p>
        <p>Fitness Level: {data.fitnessLevel}</p>
        <p>Gender: {data.gender}</p>
        <p>Age: {data.age}</p>
        <p>Height: {data.height} cm</p>
        <p>Weight: {data.weight} kg</p>
        <p>Diet: {data.dietaryPreferences.join(", ") || "None"}</p>
        <p>Equipment: {data.equipments.join(", ") || "None"}</p>

        <button
          onClick={onSubmit}
          className="mt-6 w-full rounded-xl bg-amber-400 py-3 font-semibold text-black"
        >
          Finish Onboarding
        </button>
      </div>
    </StepLayout>
  );
}
