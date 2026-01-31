import { StepLayout } from "../StepLayout";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

const levels = ["Beginner", "Intermediate", "Advanced"];

export function FitnessLevelStep({ value, onChange }: Props) {
  return (
    <StepLayout
      title="Your Fitness Level"
      description="So we don’t destroy you on day one"
    >
      <div className="grid gap-3">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => onChange(level)}
            className={`rounded-xl border p-4 text-left transition ${
              value === level
                ? "border-amber-400 bg-amber-400/10 text-white"
                : "border-zinc-800 text-zinc-400 hover:border-zinc-700"
            }`}
          >
            {level}
          </button>
        ))}
      </div>
    </StepLayout>
  );
}
