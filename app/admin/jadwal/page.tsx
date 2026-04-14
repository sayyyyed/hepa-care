"use client";

import React from "react";
import { Calendar as CalendarIcon, Clock, Plus, ChevronLeft, ChevronRight } from "lucide-react";

export default function SchedulePage() {
  const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];
  const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
  
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-heading font-black text-clay-foreground tracking-tight">Jadwal Praktik</h1>
          <p className="text-clay-muted font-medium mt-1">Kelola waktu konsultasi dan perjanjian dengan pasien.</p>
        </div>
        <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-clay-accent to-clay-accent-alt text-white rounded-[24px] font-heading font-black shadow-clayButton hover:-translate-y-1 hover:shadow-clayButtonHover transition-all active:scale-[0.85] active:shadow-clayPressed group">
          <Plus size={22} className="group-hover:rotate-90 transition-transform" />
          <span>Tambah Jadwal Baru</span>
        </button>
      </div>

      <div className="bg-white/70 backdrop-blur-xl rounded-[40px] border-none shadow-clayDeep overflow-hidden flex flex-col h-[700px] group">
         <div className="p-6 border-b border-clay-muted/5 flex items-center justify-between bg-white/30">
            <div className="flex items-center gap-6">
               <h2 className="text-xl font-heading font-black text-clay-foreground">April 2026</h2>
               <div className="flex items-center gap-2">
                  <button className="p-3 bg-white hover:text-clay-accent hover:shadow-clayCard rounded-xl transition-all active:scale-90 shadow-sm"><ChevronLeft size={22} /></button>
                  <button className="p-3 bg-white hover:text-clay-accent hover:shadow-clayCard rounded-xl transition-all active:scale-90 shadow-sm"><ChevronRight size={22} /></button>
               </div>
            </div>
            <div className="flex bg-clay-canvas/50 backdrop-blur-md p-1.5 rounded-2xl shadow-clayPressed border border-white/50">
               <button className="px-6 py-2 bg-white shadow-clayCard rounded-xl text-[10px] font-heading font-black text-clay-accent uppercase tracking-widest active:scale-95 transition-all">Minggu</button>
               <button className="px-6 py-2 hover:bg-white/50 text-clay-muted rounded-xl text-[10px] font-heading font-black uppercase tracking-widest active:scale-95 transition-all">Bulan</button>
            </div>
         </div>

         <div className="flex-1 overflow-auto flex scroll-smooth">
            {/* Time Column */}
            <div className="w-24 border-r border-clay-muted/5 shrink-0 bg-clay-canvas/20">
               <div className="h-16 border-b border-clay-muted/5"></div>
               {timeSlots.map(time => (
                 <div key={time} className="h-24 border-b border-clay-muted/5 p-4 text-[10px] font-heading font-black text-clay-muted/60 text-center uppercase tracking-widest flex items-center justify-center">
                    {time}
                 </div>
               ))}
            </div>
            
            {/* Days Columns */}
            <div className="flex-1 flex min-w-[800px]">
               {days.map((day, i) => (
                 <div key={day} className={`flex-1 border-r border-clay-muted/5 last:border-r-0 ${i > 4 ? 'bg-clay-canvas/30' : ''} group/col`}>
                    <div className="h-16 border-b border-clay-muted/5 flex flex-col items-center justify-center bg-white/20 group-hover/col:bg-white transition-colors">
                       <span className="text-[10px] font-heading font-black text-clay-muted/50 uppercase tracking-widest">{day}</span>
                       <span className={`text-base font-heading font-black mt-1 ${i === 1 ? 'w-10 h-10 bg-gradient-to-br from-clay-accent to-clay-accent-alt text-white shadow-clayButton' : 'text-clay-foreground'} rounded-2xl flex items-center justify-center transition-all group-hover/col:scale-110`}>{13 + i}</span>
                    </div>
                    <div className="relative h-full">
                       {i === 1 && (
                         <div className="absolute top-24 left-2 right-2 p-4 bg-white/90 backdrop-blur-md border hover:bg-white border-clay-accent/10 rounded-[20px] shadow-clayCard z-10 transition-all hover:scale-[1.05] hover:-translate-y-1 cursor-pointer active:scale-95 group/event">
                            <p className="text-xs font-heading font-black text-clay-accent uppercase tracking-widest mb-1">Konsultasi</p>
                            <p className="text-sm font-heading font-black text-clay-foreground line-clamp-1">Budi Santoso</p>
                            <div className="flex items-center gap-2 mt-3 text-[10px] font-heading font-black text-clay-muted/60">
                               <Clock size={12} />
                               09:00 - 10:00
                            </div>
                            <div className="absolute top-3 right-3 w-2 h-2 bg-clay-accent rounded-full animate-pulse"></div>
                         </div>
                       )}
                       {i === 2 && (
                         <div className="absolute top-48 left-2 right-2 p-4 bg-white/90 backdrop-blur-md border hover:bg-white border-emerald-100 rounded-[20px] shadow-clayCard z-10 transition-all hover:scale-[1.05] hover:-translate-y-1 cursor-pointer active:scale-95 group/event">
                            <p className="text-xs font-heading font-black text-emerald-600 uppercase tracking-widest mb-1">Check-up</p>
                            <p className="text-sm font-heading font-black text-clay-foreground line-clamp-1">Siti Aminah</p>
                            <div className="flex items-center gap-2 mt-3 text-[10px] font-heading font-black text-clay-muted/60">
                               <Clock size={12} />
                               10:00 - 11:00
                            </div>
                            <div className="absolute top-3 right-3 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                         </div>
                       )}
                       {timeSlots.map(time => (
                         <div key={time} className="h-24 border-b border-clay-canvas/10 group-hover/col:border-clay-muted/5 transition-colors"></div>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
