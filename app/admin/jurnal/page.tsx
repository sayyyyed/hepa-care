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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-heading font-black text-clay-foreground tracking-tight">Jurnal Pasien</h1>
          <p className="text-clay-muted font-medium mt-1">Pantau perkembangan harian pasien secara real-time.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-clay-muted font-heading font-bold rounded-[20px] shadow-clayCard hover:-translate-y-1 hover:shadow-clayButtonHover transition-all active:scale-95 active:shadow-clayPressed">
            <Calendar size={18} />
            <span>Pilih Tanggal</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-clay-muted font-heading font-bold rounded-[20px] shadow-clayCard hover:-translate-y-1 hover:shadow-clayButtonHover transition-all active:scale-95 active:shadow-clayPressed">
            <Filter size={18} />
            <span>Filter Kategori</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Statistics Content */}
        <div className="lg:col-span-1 space-y-8">
           <div className="bg-white/70 backdrop-blur-xl rounded-[32px] border-none shadow-clayDeep p-8 hover:-translate-y-1 transition-all">
              <h3 className="text-[10px] font-heading font-black text-clay-muted uppercase tracking-widest mb-8 text-center sm:text-left opacity-60 flex items-center gap-2">
                 <div className="w-2 h-2 bg-clay-accent rounded-full"></div>
                 Status Hari Ini
              </h3>
              <div className="space-y-6">
                 <div className="flex items-center justify-between group">
                    <span className="text-sm font-heading font-black text-clay-muted flex items-center gap-3 group-hover:text-clay-accent transition-colors">
                       <div className="p-2 bg-blue-100 rounded-xl group-hover:scale-110 transition-transform"><Activity size={18} className="text-blue-600" /></div> Jurnal Masuk
                    </span>
                    <span className="font-heading font-black text-clay-foreground text-lg">124</span>
                 </div>
                 <div className="flex items-center justify-between group">
                    <span className="text-sm font-heading font-black text-clay-muted flex items-center gap-3 group-hover:text-clay-accent transition-colors">
                       <div className="p-2 bg-emerald-100 rounded-xl group-hover:scale-110 transition-transform"><Droplets size={18} className="text-emerald-600" /></div> Pemantauan Cairan
                    </span>
                    <span className="font-heading font-black text-clay-foreground text-lg">82</span>
                 </div>
                 <div className="flex items-center justify-between group">
                    <span className="text-sm font-heading font-black text-clay-muted flex items-center gap-3 group-hover:text-clay-accent transition-colors">
                       <div className="p-2 bg-red-100 rounded-xl group-hover:scale-110 transition-transform"><Thermometer size={18} className="text-red-600" /></div> Laporan Gejala
                    </span>
                    <span className="font-heading font-black text-clay-foreground text-lg">18</span>
                 </div>
                 <div className="flex items-center justify-between group">
                    <span className="text-sm font-heading font-black text-clay-muted flex items-center gap-3 group-hover:text-clay-accent transition-colors">
                       <div className="p-2 bg-purple-100 rounded-xl group-hover:scale-110 transition-transform"><Moon size={18} className="text-purple-600" /></div> Kualitas Tidur
                    </span>
                    <span className="font-heading font-black text-clay-foreground text-lg">105</span>
                 </div>
              </div>
           </div>

           <div className="bg-gradient-to-br from-clay-accent to-clay-accent-alt rounded-[32px] p-8 text-white shadow-clayDeep overflow-hidden relative group">
              <div className="relative z-10">
                 <h3 className="font-heading font-black text-xl mb-3">Butuh Bantuan?</h3>
                 <p className="text-white/80 text-sm font-sans font-medium mb-8 leading-relaxed">Tim support kami siap membantu Anda mengelola data jurnal pasien secara efisien.</p>
                 <button className="w-full py-4 bg-white text-clay-accent rounded-[20px] font-heading font-black text-sm uppercase tracking-widest shadow-clayButton hover:shadow-clayButtonHover transition-all active:scale-[0.85] active:shadow-clayPressed">Hubungi Support</button>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           </div>
        </div>

        {/* Journal Feed */}
        <div className="lg:col-span-3 space-y-6">
           {/* Search & Tabs */}
           <div className="bg-white/70 backdrop-blur-xl rounded-[32px] border-none shadow-clayCard p-4 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="relative flex-1 w-full translate-x-1">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-clay-muted/40 w-4 h-4" />
                 <input 
                    type="text" 
                    placeholder="Cari pasien..." 
                    className="w-full bg-[#EFEBF5] border-none rounded-2xl py-3 pl-12 pr-4 text-sm text-clay-foreground shadow-clayPressed focus:outline-none focus:ring-4 focus:ring-clay-accent/10 focus:bg-white transition-all font-sans placeholder:text-clay-muted/40"
                 />
              </div>
              <div className="flex items-center gap-3 p-1.5 bg-clay-canvas/50 rounded-2xl shadow-clayPressed border border-white/50">
                 <button className="px-6 py-2 bg-white text-clay-accent shadow-clayCard rounded-xl text-[10px] font-heading font-black uppercase tracking-widest active:scale-95 transition-all">Harian</button>
                 <button className="px-6 py-2 hover:bg-white/50 text-clay-muted rounded-xl text-[10px] font-heading font-black uppercase tracking-widest active:scale-95 transition-all">Mingguan</button>
              </div>
           </div>

           {/* Feed Items */}
           <div className="space-y-5">
              {journals.map((item) => (
                <div key={item.id} className="bg-white rounded-[32px] border-none shadow-clayCard p-8 hover:-translate-y-1 transition-all duration-300 group flex items-start gap-8 cursor-default">
                   <div className="shrink-0 flex flex-col items-center gap-3 w-16 group/time">
                      <p className="text-sm font-heading font-black text-clay-foreground group-hover/time:scale-110 transition-transform">{item.time}</p>
                      <div className={`w-2 flex-1 min-h-[50px] ${item.color} rounded-full opacity-10 group-hover:opacity-30 transition-opacity shadow-sm shadow-clayButton`}></div>
                   </div>
                   
                   <div className="flex-1">
                      <div className="flex items-center justify-between mb-8">
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-[18px] bg-white shadow-clayCard flex items-center justify-center border-2 border-white overflow-hidden group-hover:scale-110 transition-transform duration-500">
                               <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`} alt="" className="w-10 h-10" />
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                               <p className="font-heading font-black text-clay-foreground text-lg">{item.name}</p>
                               <span className={`px-4 py-1.5 rounded-xl text-[10px] font-heading font-black uppercase tracking-widest shadow-sm ${
                                  item.type === 'Gejala Tinggi' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-clay-accent/10 text-clay-accent border border-clay-accent/5'
                               }`}>
                                  {item.type}
                               </span>
                            </div>
                         </div>
                         <button className="text-clay-muted hover:text-clay-accent hover:bg-white/50 hover:shadow-clayCard p-3 rounded-2xl transition-all active:scale-90">
                            <ArrowUpRight size={22} />
                         </button>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                         <div className="flex flex-col gap-2 p-4 bg-clay-canvas/30 rounded-2xl group-hover:bg-white transition-colors border border-transparent group-hover:border-clay-muted/5">
                            <span className="text-[10px] font-heading font-black text-clay-muted/60 uppercase tracking-widest">Input Makanan</span>
                            <p className="text-sm font-heading font-bold text-clay-foreground">Sarapan</p>
                         </div>
                         <div className="flex flex-col gap-2 p-4 bg-clay-canvas/30 rounded-2xl group-hover:bg-white transition-colors border border-transparent group-hover:border-clay-muted/5">
                            <span className="text-[10px] font-heading font-black text-clay-muted/60 uppercase tracking-widest">Gejala</span>
                            <p className="text-sm font-heading font-bold text-clay-foreground">Mual Ringan</p>
                         </div>
                         <div className="flex flex-col gap-2 p-4 bg-clay-canvas/30 rounded-2xl group-hover:bg-white transition-colors border border-transparent group-hover:border-clay-muted/5">
                            <span className="text-[10px] font-heading font-black text-clay-muted/60 uppercase tracking-widest">Kekuatan</span>
                            <p className="text-sm font-heading font-bold text-clay-foreground">Stabil</p>
                         </div>
                         <div className="flex flex-col gap-2 p-4 bg-clay-canvas/30 rounded-2xl group-hover:bg-white transition-colors border border-transparent group-hover:border-clay-muted/5">
                            <span className="text-[10px] font-heading font-black text-clay-muted/60 uppercase tracking-widest">Tidur</span>
                            <p className="text-sm font-heading font-bold text-clay-foreground">7 Jam</p>
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
