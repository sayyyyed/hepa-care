"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  question: string;
  answer: string;
}

export function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-[24px] bg-white p-6 shadow-clayButton transition-all duration-300 hover:-translate-y-1 hover:shadow-clayButtonHover active:scale-[0.98]"
        aria-expanded={isOpen}
      >
        <span className="text-left font-heading text-lg font-bold text-clay-foreground sm:text-xl">
          {question}
        </span>
        <div
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-clay-canvas text-clay-accent transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="rounded-b-[24px] bg-white/50 px-6 pb-6 pt-2 text-clay-muted">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
