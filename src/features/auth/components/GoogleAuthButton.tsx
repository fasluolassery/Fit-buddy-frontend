import { FaGoogle } from "react-icons/fa";

type Props = {
  onClick?: () => void;
};

export function GoogleAuthButton({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/70 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:border-amber-400"
    >
      {/* liquid layer */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-500/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      {/* content */}
      <FaGoogle className="text-zinc-400 transition-colors group-hover:text-white" />
      <span className="relative z-10">Continue with Google</span>
    </button>
  );
}
