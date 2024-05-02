import React from "react";
import { twMerge } from "tailwind-merge";
import SpinnerSVG from "../../svgs/SpinnerSVG";

const Button = ({
  label,
  type = "button",
  disabled = false,
  loading = false,
  className,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-base leading-none font-medium ring-offset-white transition-colors focus-visible:outline-none gap-2 focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-background h-11 px-4 py-3",
        className
      )}
      type={type}
      disabled={disabled}
      {...props}
    >
      {loading && <SpinnerSVG fill="rgba(var(--background))" />}
      {label}
    </button>
  );
};

export default Button;
