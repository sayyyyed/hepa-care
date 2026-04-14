"use client";

import React from "react";
import { Calendar as CalendarIcon, Clock, Plus, ChevronLeft, ChevronRight } from "lucide-react";

export default function SchedulePage() {
  const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];
  const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Jadwal Praktik</h1>
          <p className="text-slate-500 mt-1">Kelola waktu konsultasi dan perjanjian dengan pasien.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
          <Plus size={18} />
          <span>Tambah Jadwal</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-[600px]">
         <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
               <h2 className="font-bold text-slate-800">April 2026</h2>
               <div className="flex items-center gap-1">
                  <button className="p-1 hover:bg-slate-50 rounded text-slate-400"><ChevronLeft size={20} /></button>
                  <button className="p-1 hover:bg-slate-50 rounded text-slate-400"><ChevronRight size={20} /></button>
               </div>
            </div>
            <div className="flex bg-slate-100 p-1 rounded-lg">
               <button className="px-3 py-1 bg-white shadow-sm rounded-md text-xs font-bold text-slate-700">Minggu</button>
               <button className="px-3 py-1 text-xs font-bold text-slate-500">Bulan</button>
            </div>
         </div>

         <div className="flex-1 overflow-auto flex">
            {/* Time Column */}
            <div className="w-20 border-r border-slate-100 shrink-0">
               <div className="h-12 border-b border-slate-100"></div>
               {timeSlots.map(time => (
                 <div key={time} className="h-20 border-b border-slate-100 p-2 text-[10px] font-bold text-slate-400 text-center">
                    {time}
                 </div>
               ))}
            </div>
            
            {/* Days Columns */}
            <div className="flex-1 flex min-w-[700px]">
               {days.map((day, i) => (
                 <div key={day} className={`flex-1 border-r border-slate-50 last:border-r-0 ${i > 4 ? 'bg-slate-50/50' : ''}`}>
                    <div className="h-12 border-b border-slate-100 flex flex-col items-center justify-center">
                       <span className="text-[10px] font-bold text-slate-400 uppercase">{day}</span>
                       <span className={`text-sm font-bold ${i === 1 ? 'w-7 h-7 bg-indigo-600 text-white' : 'text-slate-700'} rounded-full flex items-center justify-center`}>{13 + i}</span>
                    </div>
                    <div className="relative">
                       {i === 1 && (
                         <div className="absolute top-20 left-1 right-1 p-2 bg-indigo-50 border-l-4 border-indigo-600 rounded shadow-sm z-10">
                            <p className="text-[10px] font-bold text-indigo-700">Budi Santoso</p>
                            <p className="text-[8px] text-indigo-500">09:00 - 10:00</p>
                         </div>
                       )}
                       {i === 2 && (
                         <div className="absolute top-40 left-1 right-1 p-2 bg-emerald-50 border-l-4 border-emerald-600 rounded shadow-sm z-10">
                            <p className="text-[10px] font-bold text-emerald-700">Siti Aminah</p>
                            <p className="text-[8px] text-emerald-500">10:00 - 11:00</p>
                         </div>
                       )}
                       {timeSlots.map(time => (
                         <div key={time} className="h-20 border-b border-slate-50"></div>
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
