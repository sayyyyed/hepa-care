"use client";

import React from "react";
import { ClayCard } from "../ClayCard";
import { ClayButton } from "../ClayButton";
import { CheckCircle2, ArrowRight } from "lucide-react";

// 1. HeroSection
export function HeroSection({ 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA, 
  onPrimaryClick, 
  onSecondaryClick 
}: any) {
  return (
    <section className="relative pt-24 pb-16 px-6 text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black text-clay-foreground tracking-tight leading-[1.1] mb-6">
        {title}
      </h1>
      <p className="text-lg md:text-xl font-medium text-clay-muted mb-10 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <ClayButton className="w-full sm:w-auto px-8" onClick={onPrimaryClick}>
          {primaryCTA}
        </ClayButton>
        <ClayButton variant="secondary" className="w-full sm:w-auto px-8 text-clay-accent" onClick={onSecondaryClick}>
          {secondaryCTA}
        </ClayButton>
      </div>
    </section>
  );
}

// 2. FeatureCard & 3. FeatureGrid
export function FeatureCard({ icon: Icon, title, description, href }: any) {
  return (
    <a href={href} className="block group">
      <ClayCard className="h-full flex flex-col !p-6 hover:-translate-y-2 cursor-pointer transition-transform duration-300">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center shadow-clayButton mb-5">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="font-heading text-xl font-bold text-clay-foreground mb-2">{title}</h3>
        <p className="font-medium text-sm text-clay-muted leading-relaxed line-clamp-3">{description}</p>
      </ClayCard>
    </a>
  );
}

export function FeatureGrid({ features }: { features: any[] }) {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
         <span className="text-sm font-black text-clay-accent tracking-widest uppercase mb-2 block">Jelajahi Solusi</span>
         <h2 className="font-heading text-4xl mb-4 font-black text-clay-foreground">Semua Fitur HepaCare</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
}

// 5. HighlightList
export function HighlightList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4 mb-8">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="mt-1 w-6 h-6 rounded-full bg-clay-success text-white flex items-center justify-center shrink-0 shadow-sm">
            <CheckCircle2 size={14} />
          </div>
          <span className="font-medium text-clay-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// 4. FeatureSection
export function FeatureSection({ 
  id, 
  title, 
  subtitle, 
  description, 
  highlights, 
  visualMockup, 
  reverse 
}: any) {
  return (
    <section id={id} className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200/50 scroll-mt-24">
      <div className={`flex flex-col gap-12 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        
        {/* Text Content */}
        <div className="flex-1 w-full max-w-2xl text-center lg:text-left">
          <span className="text-sm font-black text-clay-accent tracking-widest uppercase mb-3 block">{subtitle}</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-clay-foreground leading-[1.1] mb-6">
            {title}
          </h2>
          <div className="text-lg font-medium text-clay-muted mb-8 space-y-4 leading-relaxed">
            {description}
          </div>
          {highlights && highlights.length > 0 && <div className="text-left"><HighlightList items={highlights} /></div>}
        </div>

        {/* Visual Mockup */}
        <div className="flex-1 w-full max-w-md mx-auto relative group">
           <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-fuchsia-100 rounded-[48px] rotate-3 scale-105 opacity-50 transition-transform group-hover:rotate-6"></div>
           <ClayCard className="relative z-10 aspect-[4/3] flex items-center justify-center overflow-hidden !p-2 bg-white/80">
              {visualMockup}
           </ClayCard>
        </div>

      </div>
    </section>
  );
}

// 6. WhySection
export function WhySection({ items }: { items: any[] }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-center">
      <h2 className="font-heading text-4xl sm:text-5xl font-black text-clay-foreground mb-16">Mengapa HepaCare Berbeda?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
             <div className="w-20 h-20 rounded-full bg-white shadow-clayCard flex items-center justify-center mb-6">
                <item.icon className="w-10 h-10 text-clay-accent" />
             </div>
             <h3 className="font-bold text-2xl text-clay-foreground mb-3">{item.title}</h3>
             <p className="font-medium text-clay-muted leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// 7. StepFlow
export function StepFlow({ steps }: { steps: any[] }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-white/40 rounded-[48px] shadow-clayPressed backdrop-blur-md my-16">
      <div className="text-center mb-16">
        <h2 className="font-heading text-4xl sm:text-5xl font-black text-clay-foreground">Mudah Digunakan</h2>
        <p className="font-medium text-clay-muted mt-4">Jalan singkat menuju kesehatan hati</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative px-4">
        {/* Connection line for desktop */}
        <div className="hidden md:block absolute top-[40px] left-10 right-10 h-2 bg-indigo-100 rounded-full shrink-0 -z-10"></div>
        
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center flex-1 z-10 w-full relative">
            <div className="w-20 h-20 rounded-[24px] bg-clay-accent text-white font-black text-3xl shadow-clayButton flex items-center justify-center mb-6">
              {i + 1}
            </div>
            <h3 className="font-bold text-xl text-clay-foreground mb-2 text-center">{step.title}</h3>
            <p className="text-center font-medium text-sm text-clay-muted max-wxs">{step.description}</p>
            {i !== steps.length - 1 && (
               <div className="md:hidden mt-8 w-2 h-10 bg-indigo-100 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// 8. CTASection
export function CTASection({ title, subtitle, primaryCTA, secondaryCTA, onPrimaryClick, onSecondaryClick }: any) {
  return (
    <section className="py-24 px-6 text-center max-w-4xl mx-auto">
       <div className="bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] p-12 sm:p-20 rounded-[60px] shadow-clayCard text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-heading text-4xl sm:text-5xl font-black mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg sm:text-xl font-medium text-indigo-100 mb-10 w-full max-w-2xl mx-auto">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={onPrimaryClick} className="bg-white text-clay-accent px-8 py-4 rounded-[20px] font-bold shadow-clayButton hover:-translate-y-1 transition-all">
                {primaryCTA}
              </button>
              <button onClick={onSecondaryClick} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-[20px] font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                {secondaryCTA} <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#DB2777] opacity-20 rounded-full blur-2xl"></div>
       </div>
    </section>
  );
}
