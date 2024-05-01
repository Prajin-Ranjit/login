import React from "react";

const Input = ({ type = "text", placeholder, id, label }) => {
  return (
    <div className="flex flex-col gap-1 relative mt-6">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="peer w-full py-2 text-text border-b border-primary bg-transparent outline-none placeholder:text-transparent text-sm"
      />
      <label
        htmlFor={id}
        className="absolute -top-5 left-0 py-2 text-xs pointer-events-none duration-300 peer-focus:-top-5 peer-placeholder-shown:top-0 peer-focus:text-xs peer-placeholder-shown:text-sm font-medium"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
