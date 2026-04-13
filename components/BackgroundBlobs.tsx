import React from "react";

export function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      {/* Primary Violet Blob */}
      <div className="absolute h-[60vh] w-[60vh] rounded-full blur-3xl bg-[#8B5CF6]/15 -top-[10%] -left-[10%] animate-[clay-float_8s_ease-in-out_infinite]" />
      
      {/* Hot Pink Blob */}
      <div className="absolute h-[50vh] w-[50vh] rounded-full blur-3xl bg-[#EC4899]/15 top-[20%] -right-[10%] animate-[clay-float-delayed_10s_ease-in-out_infinite]" />
      
      {/* Sky Blue Blob */}
      <div className="absolute h-[70vh] w-[70vh] rounded-full blur-3xl bg-[#0EA5E9]/15 -bottom-[20%] left-[20%] animate-[clay-float-slow_12s_ease-in-out_infinite]" />
    </div>
  );
}
