import { StepLayout } from "../StepLayout";
import { useState } from "react";

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
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (age <= 0 || height <= 0 || weight <= 0) {
      setError("All values must be greater than 0");
      return;
    }
    if (age > 120) {
      setError("Please enter a valid age");
      return;
    }
    if (height > 300) {
      setError("Please enter a valid height in cm");
      return;
    }
    if (weight > 500) {
      setError("Please enter a valid weight in kg");
      return;
    }

    setError(""); // clear error
    onContinue();
  };

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
          onChange={(e) => {
            const val = Number(e.target.value);
            if (val < 0) return; // optional: prevent negative typing
            onChange({ age: val, height, weight });
          }}
          className="w-full rounded-lg border border-zinc-800 bg-black p-3 text-white"
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height || ""}
          onChange={(e) => {
            const val = Number(e.target.value);
            if (val < 0) return;
            onChange({ age, height: val, weight });
          }}
          className="w-full rounded-lg border border-zinc-800 bg-black p-3 text-white"
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight || ""}
          onChange={(e) => {
            const val = Number(e.target.value);
            if (val < 0) return;
            onChange({ age, height, weight: val });
          }}
          className="w-full rounded-lg border border-zinc-800 bg-black p-3 text-white"
        />

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="button"
          onClick={handleContinue}
          className="w-full rounded-xl bg-amber-400 py-3 font-semibold text-black"
        >
          Continue
        </button>
      </div>
    </StepLayout>
  );
}
