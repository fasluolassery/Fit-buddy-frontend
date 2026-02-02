import { StepLayout } from "../StepLayout";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

const options = ["Vegetarian", "Vegan", "Non-Veg", "Keto", "No Preference"];

export function DietaryPreferencesStep({ value, onChange }: Props) {
  return (
    <StepLayout title="Dietary Preferences">
      <div className="grid gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`rounded-xl border p-4 text-left transition ${
              value === opt
                ? "border-amber-400 bg-amber-400/10 text-white"
                : "border-zinc-800 text-zinc-400 hover:border-zinc-700"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </StepLayout>
  );
}
