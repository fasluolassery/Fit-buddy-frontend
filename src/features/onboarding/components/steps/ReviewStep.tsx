// ReviewStep.tsx
import { StepLayout } from "../StepLayout";
import type { UserOnboardingData } from "../../types";

interface Props {
  data: UserOnboardingData;
  onSubmit: () => void;
  loading?: boolean;
  apiError?: string | null;
}

export function ReviewStep({ data, onSubmit, loading, apiError }: Props) {
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
        <p>Diet: {data.dietaryPreferences}</p>
        <p>Equipment: {data.equipments.join(", ") || "None"}</p>

        {apiError && <p className="text-red-500">{apiError}</p>}

        <button
          onClick={onSubmit}
          disabled={loading}
          className={`mt-6 w-full rounded-xl py-3 font-semibold text-black ${
            loading ? "cursor-not-allowed bg-gray-500" : "bg-amber-400"
          }`}
        >
          {loading ? "Submitting..." : "Finish Onboarding"}
        </button>
      </div>
    </StepLayout>
  );
}
