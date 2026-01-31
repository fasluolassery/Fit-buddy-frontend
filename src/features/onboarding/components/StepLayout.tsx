import type { ReactNode } from "react";

interface Props {
  title: string;
  description?: string;
  children: ReactNode;
}

export function StepLayout({ title, description, children }: Props) {
  return (
    <div className="mx-auto max-w-xl space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-black text-white">{title}</h1>
        {description && (
          <p className="mt-2 text-sm text-zinc-400">{description}</p>
        )}
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-[#0c0c0c] p-8">
        {children}
      </div>
    </div>
  );
}
