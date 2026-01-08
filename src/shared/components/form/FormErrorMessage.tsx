type FormErrorMessageProps = {
  message?: string | null;
  align?: "left" | "center";
  maxHeight?: string;
};

export function FormErrorMessage({
  message,
  align = "left",
  maxHeight = "max-h-5",
}: FormErrorMessageProps) {
  return (
    <p
      className={`mt-1 overflow-hidden text-xs text-red-400 transition-all duration-200 ${
        message ? `${maxHeight} opacity-100` : "max-h-0 opacity-0"
      } ${align === "center" ? "text-center" : "text-left"}`}
    >
      {message}
    </p>
  );
}
