import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ label, type = "button", disabled = false, className }) => {
  return (
    <button
      className={twMerge("inline-flex items-center justify-center whitespace-nowrap rounded-md text-base leading-none font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-background h-11 px-4 py-3", className)}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
