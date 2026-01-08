import type { InputHTMLAttributes, ReactNode } from "react";
import { FormErrorMessage } from "./FormErrorMessage";

type InputFieldProps = {
  icon?: ReactNode;
  error?: string;
  wrapperClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputField({
  icon,
  error,
  className = "",
  wrapperClassName = "",
  ...props
}: InputFieldProps) {
  return (
    <div className={wrapperClassName}>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
            {icon}
          </span>
        )}

        <input
          {...props}
          className={`input-luxury ${
            icon ? "pl-10" : ""
          } ${error ? "border-red-500/50" : ""} ${className}`}
        />
      </div>

      {/* <p
        className={`mt-1 overflow-hidden text-xs text-red-400 transition-all duration-200 ${
          error ? "max-h-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {error}
      </p> */}
      <FormErrorMessage message={error} />
    </div>
  );
}
