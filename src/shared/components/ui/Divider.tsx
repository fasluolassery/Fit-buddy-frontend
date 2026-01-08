type DividerProps = {
  label?: string;
};

export function Divider({ label }: DividerProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      {label && <span className="text-xs text-zinc-500">{label}</span>}
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
    </div>
  );
}
