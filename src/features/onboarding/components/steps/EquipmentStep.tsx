import { StepLayout } from "../StepLayout";

interface Props {
  value: string[];
  onChange: (v: string[]) => void;
  onContinue: () => void;
}

const equipments = ["Dumbbells", "Barbell", "Resistance Bands", "No Equipment"];

export function EquipmentStep({ value, onChange, onContinue }: Props) {
  const toggle = (item: string) => {
    onChange(
      value.includes(item) ? value.filter((v) => v !== item) : [...value, item],
    );
  };

  return (
    <StepLayout title="Available Equipment">
      <div className="space-y-4">
        <div className="grid gap-3">
          {equipments.map((eq) => (
            <button
              key={eq}
              onClick={() => toggle(eq)}
              className={`rounded-xl border p-4 text-left transition ${
                value.includes(eq)
                  ? "border-amber-400 bg-amber-400/10 text-white"
                  : "border-zinc-800 text-zinc-400 hover:border-zinc-700"
              }`}
            >
              {eq}
            </button>
          ))}
        </div>

        <button
          onClick={onContinue}
          className="w-full rounded-xl bg-amber-400 py-3 font-semibold text-black"
        >
          Continue
        </button>
      </div>
    </StepLayout>
  );
}
