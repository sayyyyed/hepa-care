import React, { forwardRef } from "react";

interface ClayInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const ClayInput = forwardRef<HTMLInputElement, ClayInputProps>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`flex w-full rounded-2xl border-0 bg-[#EFEBF5] px-6 py-4 text-lg font-medium text-clay-foreground shadow-clayPressed transition-all duration-200 placeholder:text-clay-muted focus:bg-white focus:outline-none focus:ring-4 focus:ring-clay-accent/20 ${
          error ? "ring-2 ring-clay-accent-alt/50" : ""
        } ${className}`}
        {...props}
      />
    );
  }
);

ClayInput.displayName = "ClayInput";
