import type { ButtonHTMLAttributes } from "react";

type FormSubmitButtonProps = {
  loading?: boolean;
  submitting?: boolean;
  label: string;
  loadingLabel?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function FormSubmitButton({
  loading = false,
  submitting = false,
  label,
  loadingLabel,
  disabled,
  className = "",
  ...props
}: FormSubmitButtonProps) {
  const isBusy = loading || submitting;

  return (
    <button
      type="submit"
      disabled={isBusy || disabled}
      className={`btn-primary w-full ${className}`}
      {...props}
    >
      {isBusy ? (loadingLabel ?? label) : label}
    </button>
  );
}
