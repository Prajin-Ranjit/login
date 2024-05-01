import * as React from "react"
import { twMerge } from "tailwind-merge";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";

const Checkbox = ({label, className, id}) => {
  return (
    <div className="flex flex-row items-center gap-3 mt-4">
      <CheckboxPrimitive.Root
        id={id}
        className={twMerge(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-white",
          className
        )}
      >
        <CheckboxPrimitive.Indicator
          className={twMerge("flex items-center justify-center text-current")}
        >
          <FaCheck className="h-3 w-3" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label
        htmlFor={id}
        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-text hover:cursor-pointer select-none"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
