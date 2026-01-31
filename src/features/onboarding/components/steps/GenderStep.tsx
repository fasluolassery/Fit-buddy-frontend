import { StepLayout } from "../StepLayout";

interface Props {
  value: string;
  onChange: (v: "male" | "female") => void;
}

export function GenderStep({ value, onChange }: Props) {
  return (
    <StepLayout title="Gender">
      <div className="grid grid-cols-2 gap-4">
        {(["male", "female"] as const).map((g) => (
          <button
            key={g}
            onClick={() => onChange(g)}
            className={`rounded-xl border p-6 capitalize transition ${
              value === g
                ? "border-amber-400 bg-amber-400/10 text-white"
                : "border-zinc-800 text-zinc-400 hover:border-zinc-700"
            }`}
          >
            {g}
          </button>
        ))}
      </div>
    </StepLayout>
  );
}
