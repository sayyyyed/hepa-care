import React from "react";

interface ClayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
}

export function ClayButton({
  children,
  className = "",
  variant = "primary",
  size = "default",
  ...props
}: ClayButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 active:scale-[0.92]";

  const sizeStyles = {
    sm: "h-11 px-6 rounded-[20px] text-sm",
    default: "h-14 px-8 rounded-[20px] text-base",
    lg: "h-16 px-10 rounded-[20px] text-lg",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] text-white shadow-clayButton hover:shadow-clayButtonHover hover:-translate-y-1 active:shadow-clayPressed active:translate-y-0",
    secondary:
      "bg-white text-clay-foreground shadow-clayButton hover:shadow-clayButtonHover hover:-translate-y-1 active:shadow-clayPressed active:translate-y-0",
    outline:
      "border-2 border-clay-accent/20 bg-transparent text-clay-accent hover:border-clay-accent hover:bg-clay-accent/5",
    ghost: "text-clay-foreground hover:bg-clay-accent/10 hover:text-clay-accent",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
