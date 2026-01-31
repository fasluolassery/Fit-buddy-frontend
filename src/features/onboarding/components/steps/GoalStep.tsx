import { StepLayout } from "../StepLayout";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

const goals = [
  "Lose Fat",
  "Build Muscle",
  "Improve Endurance",
  "General Fitness",
];

export function GoalStep({ value, onChange }: Props) {
  return (
    <StepLayout
      title="Your Primary Goal"
      description="This helps us tailor your training plan"
    >
      <div className="grid gap-3">
        {goals.map((goal) => (
          <button
            key={goal}
            type="button"
            onClick={() => onChange(goal)}
            className={`rounded-xl border p-4 text-left transition ${
              value === goal
                ? "border-amber-400 bg-amber-400/10 text-white"
                : "border-zinc-800 text-zinc-400 hover:border-zinc-700"
            }`}
          >
            {goal}
          </button>
        ))}
      </div>
    </StepLayout>
  );
}
