import { Link } from "react-router-dom";

type AuthSwitchLinkProps = {
  text: string;
  linkText: string;
  to: string;
};

export function AuthSwitchLink({ text, linkText, to }: AuthSwitchLinkProps) {
  return (
    <div className="border-t border-white/5 pt-3">
      <p className="text-center text-sm text-zinc-400">
        {text}{" "}
        <Link
          to={to}
          className="font-semibold text-amber-400 transition-colors hover:text-amber-300"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
}
