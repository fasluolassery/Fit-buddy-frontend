import { StepLayout } from "../StepLayout";

interface Props {
  value: string[];
  onChange: (v: string[]) => void;
}

const options = ["Vegetarian", "Vegan", "Non-Veg", "Keto", "No Preference"];

export function DietaryPreferencesStep({ value, onChange }: Props) {
  const toggle = (item: string) => {
    onChange(
      value.includes(item) ? value.filter((v) => v !== item) : [...value, item],
    );
  };

  return (
    <StepLayout title="Dietary Preferences">
      <div className="grid gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => toggle(opt)}
            className={`rounded-xl border p-4 text-left transition ${
              value.includes(opt)
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
