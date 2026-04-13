import React from "react";

interface ClayCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glass?: boolean;
}

export function ClayCard({ children, className = "", glass = true, ...props }: ClayCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[32px] p-8 text-clay-foreground shadow-clayCard transition-all duration-500 hover:-translate-y-2 hover:shadow-clayCard ${
        glass ? "bg-white/70 backdrop-blur-xl" : "bg-white"
      } ${className}`}
      {...props}
    >
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}
