"use client";

import React from "react";
import { 
  BookOpen, 
  Search, 
  Calendar, 
  ArrowUpRight,
  Filter,
  Activity,
  Droplets,
  Thermometer,
  Moon
} from "lucide-react";

export default function PatientJournalPage() {
  const journals = [
    { id: 1, name: "Budi Santoso", date: "14 Apr 2026", time: "08:30", type: "Harian", color: "bg-blue-500" },
    { id: 2, name: "Siti Aminah", date: "14 Apr 2026", time: "07:15", type: "Gejala Tinggi", color: "bg-red-500" },
    { id: 3, name: "Anto Wijaya", date: "13 Apr 2026", time: "21:00", type: "Harian", color: "bg-blue-500" },
    { id: 4, name: "Rina Kartika", date: "13 Apr 2026", time: "18:45", type: "Konsumsi Obat", color: "bg-emerald-500" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Jurnal Pasien</h1>
          <p className="text-slate-500 mt-1">Pantau perkembangan harian pasien secara real-time.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors shadow-sm">
            <Calendar size={18} />
            <span>Pilih Tanggal</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors shadow-sm">
            <Filter size={18} />
            <span>Filter Kategori</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Statistics Content */}
        <div className="lg:col-span-1 space-y-6">
           <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider opacity-60">Status Hari Ini</h3>
              <div className="space-y-4">
                 <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 flex items-center gap-2">
                       <Activity size={16} className="text-blue-500" /> Jurnal Masuk
                    </span>
                    <span className="font-bold text-slate-800">124</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 flex items-center gap-2">
                       <Droplets size={16} className="text-emerald-500" /> Pemantauan Cairan
                    </span>
                    <span className="font-bold text-slate-800">82</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 flex items-center gap-2">
                       <Thermometer size={16} className="text-red-500" /> Laporan Gejala
                    </span>
                    <span className="font-bold text-slate-800">18</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 flex items-center gap-2">
                       <Moon size={16} className="text-purple-500" /> Kualitas Tidur
                    </span>
                    <span className="font-bold text-slate-800">105</span>
                 </div>
              </div>
           </div>

           <div className="bg-indigo-600 rounded-2xl p-6 text-white overflow-hidden relative">
              <div className="relative z-10">
                 <h3 className="font-bold text-lg mb-2">Butuh Bantuan?</h3>
                 <p className="text-white/80 text-sm mb-4">Tim support kami siap membantu Anda mengelola data jurnal pasien.</p>
                 <button className="w-full py-2 bg-white text-indigo-600 rounded-xl font-bold text-sm">Hubungi Support</button>
              </div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full"></div>
           </div>
        </div>

        {/* Journal Feed */}
        <div className="lg:col-span-3 space-y-4">
           {/* Search & Tabs */}
           <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex items-center justify-between gap-4">
              <div className="relative flex-1">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                 <input 
                    type="text" 
                    placeholder="Cari pasien..." 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/10"
                 />
              </div>
              <div className="flex items-center gap-2">
                 <button className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold uppercase tracking-wider">Harian</button>
                 <button className="px-4 py-2 hover:bg-slate-50 text-slate-400 rounded-lg text-xs font-bold uppercase tracking-wider">Mingguan</button>
              </div>
           </div>

           {/* Feed Items */}
           <div className="space-y-4">
              {journals.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:border-indigo-100 transition-all group flex items-start gap-4">
                   <div className="shrink-0 flex flex-col items-center gap-1 w-12 pt-1">
                      <p className="text-xs font-bold text-slate-800">{item.time}</p>
                      <div className={`w-1 flex-1 min-h-[40px] ${item.color} rounded-full opacity-20`}></div>
                   </div>
                   
                   <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                         <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden">
                               <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`} alt="" />
                            </div>
                            <p className="font-bold text-slate-800 text-sm">{item.name}</p>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                               item.type === 'Gejala Tinggi' ? 'bg-red-50 text-red-600' : 'bg-indigo-50 text-indigo-600'
                            }`}>
                               {item.type}
                            </span>
                         </div>
                         <button className="text-slate-400 hover:text-indigo-600 group-hover:bg-indigo-50 p-1.5 rounded-lg transition-all">
                            <ArrowUpRight size={18} />
                         </button>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                         <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Input Makanan</span>
                            <p className="text-sm font-medium text-slate-700">Tercatat: Sarapan</p>
                         </div>
                         <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Gejala</span>
                            <p className="text-sm font-medium text-slate-700">Mual Ringan</p>
                         </div>
                         <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Kekuatan</span>
                            <p className="text-sm font-medium text-slate-700">Stabil</p>
                         </div>
                         <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Tidur</span>
                            <p className="text-sm font-medium text-slate-700">7 Jam</p>
                         </div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
