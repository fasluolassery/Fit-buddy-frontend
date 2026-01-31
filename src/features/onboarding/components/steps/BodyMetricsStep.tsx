import { StepLayout } from "../StepLayout";

interface Props {
  age: number;
  height: number;
  weight: number;
  onChange: (data: { age: number; height: number; weight: number }) => void;
  onContinue: () => void;
}

export function BodyMetricsStep({
  age,
  height,
  weight,
  onChange,
  onContinue,
}: Props) {
  return (
    <StepLayout
      title="Your Body Metrics"
      description="We need this to calculate your plan"
    >
      <div className="space-y-4">
        <input
          type="number"
          placeholder="Age"
          value={age || ""}
          onChange={(e) =>
            onChange({ age: Number(e.target.value), height, weight })
          }
          className="w-full rounded-lg border border-zinc-800 bg-black p-3 text-white"
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height || ""}
          onChange={(e) =>
            onChange({ age, height: Number(e.target.value), weight })
          }
          className="w-full rounded-lg border border-zinc-800 bg-black p-3 text-white"
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight || ""}
          onChange={(e) =>
            onChange({ age, height, weight: Number(e.target.value) })
          }
          className="w-full rounded-lg border border-zinc-800 bg-black p-3 text-white"
        />

        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-xl bg-amber-400 py-3 font-semibold text-black"
        >
          Continue
        </button>
      </div>
    </StepLayout>
  );
}
