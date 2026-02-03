import { useState } from "react";
import type { UserOnboardingData } from "../types";

import { GoalStep } from "../components/steps/GoalStep";
import { FitnessLevelStep } from "../components/steps/FitnessLevelStep";
import { GenderStep } from "../components/steps/GenderStep";
import { BodyMetricsStep } from "../components/steps/BodyMetricsStep";
import { DietaryPreferencesStep } from "../components/steps/DietaryPreferencesStep";
import { EquipmentStep } from "../components/steps/EquipmentStep";
import { ReviewStep } from "../components/steps/ReviewStep";
import { useOnboarding } from "../hooks/useOnboarding";

const INITIAL_DATA: UserOnboardingData = {
  primaryGoal: "",
  fitnessLevel: "",
  gender: "",
  age: 20,
  height: 150,
  weight: 47,
  dietaryPreferences: "",
  equipments: [],
};

export default function UserOnboardingPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<UserOnboardingData>(INITIAL_DATA);

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const { submitUserOnboarding, loading, apiError } = useOnboarding();

  const submit = async () => {
    await submitUserOnboarding(data);
  };

  return (
    <div className="min-h-screen bg-black py-20">
      {step > 0 && (
        <button
          onClick={prev}
          className="mb-6 ml-6 rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
        >
          ← Back
        </button>
      )}

      {step === 0 && (
        <GoalStep
          value={data.primaryGoal}
          onChange={(primaryGoal) => {
            setData((d) => ({ ...d, primaryGoal }));
            next();
          }}
        />
      )}

      {step === 1 && (
        <FitnessLevelStep
          value={data.fitnessLevel}
          onChange={(fitnessLevel) => {
            setData((d) => ({ ...d, fitnessLevel }));
            next();
          }}
        />
      )}

      {step === 2 && (
        <GenderStep
          value={data.gender}
          onChange={(gender) => {
            setData((d) => ({ ...d, gender }));
            next();
          }}
        />
      )}

      {step === 3 && (
        <BodyMetricsStep
          age={data.age}
          height={data.height}
          weight={data.weight}
          onChange={({ age, height, weight }) =>
            setData((d) => ({ ...d, age, height, weight }))
          }
          onContinue={next}
        />
      )}

      {step === 4 && (
        <DietaryPreferencesStep
          value={data.dietaryPreferences}
          onChange={(dietaryPreferences) => {
            setData((d) => ({ ...d, dietaryPreferences }));
            next();
          }}
        />
      )}

      {step === 5 && (
        <EquipmentStep
          value={data.equipments}
          onChange={(equipments) => setData((d) => ({ ...d, equipments }))}
          onContinue={next}
        />
      )}

      {step === 6 && (
        <ReviewStep
          data={data}
          onSubmit={submit}
          loading={loading}
          apiError={apiError}
        />
      )}
    </div>
  );
}
