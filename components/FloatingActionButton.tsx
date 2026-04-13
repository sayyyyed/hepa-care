"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface FloatingActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  className?: string;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ 
  icon: Icon, 
  label, 
  onClick,
  className = ""
}) => {
  return (
    <div className={`fixed bottom-32 right-8 z-50 flex justify-end ${className}`}>
      <button 
        onClick={onClick}
        className="group flex items-center bg-clay-accent text-white rounded-full h-16 transition-all duration-300 shadow-clayButton hover:shadow-clayDeep overflow-hidden max-w-[64px] hover:max-w-[200px]"
      >
        <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
          <Icon size={28} />
        </div>
        <span className="whitespace-nowrap font-black text-sm pr-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {label}
        </span>
      </button>
    </div>
  );
};
