"use client";

import React, { useState } from "react";
import { 
  ArrowLeft, 
  User, 
  Calendar, 
  Activity, 
  Brain, 
  FileText, 
  Save,
  ChevronDown,
  Clock,
  ExternalLink,
  Plus
} from "lucide-react";
import Link from "next/link";

export default function PatientDetailPage() {
  const [activeTab, setActiveTab] = useState("jurnal");
  const [notes, setNotes] = useState("");

  const tabs = [
    { id: "jurnal", label: "Jurnal Kesehatan", icon: Activity },
    { id: "riwayat", label: "Riwayat Medis", icon: Calendar },
    { id: "ai", label: "Analisis AI", icon: Brain },
    { id: "catatan", label: "Catatan Dokter", icon: FileText },
  ];

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link href="/admin/pasien" className="inline-flex items-center gap-2 text-clay-muted hover:text-clay-accent transition-all hover:-translate-x-1 group">
        <ArrowLeft size={18} className="transition-transform group-hover:scale-110" />
        <span className="font-heading font-black text-xs uppercase tracking-widest">Kembali ke Daftar Pasien</span>
      </Link>

      {/* Profile Summary Card */}
      <div className="bg-white/70 backdrop-blur-xl rounded-[32px] border-none shadow-clayDeep p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
        <div className="w-24 h-24 rounded-[24px] bg-white shadow-clayCard flex items-center justify-center shrink-0 border-4 border-white overflow-hidden group-hover:scale-105 transition-transform duration-500">
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Budi" alt="Budi" className="w-20 h-20" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
             <h1 className="text-3xl font-heading font-black text-clay-foreground tracking-tight">Budi Santoso</h1>
             <span className="text-[10px] font-heading font-black px-3 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-100 uppercase tracking-widest shadow-sm">Risiko Tinggi</span>
          </div>
          <p className="text-clay-muted mt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-heading font-bold uppercase tracking-wider">
             <span>ID: #PX-92841</span>
             <span className="w-1.5 h-1.5 bg-clay-muted/20 rounded-full"></span>
             <span>Laki-laki</span>
             <span className="w-1.5 h-1.5 bg-clay-muted/20 rounded-full"></span>
             <span>45 Tahun</span>
             <span className="w-1.5 h-1.5 bg-clay-muted/20 rounded-full"></span>
             <span>Golongan Darah: O+</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
           <button className="w-full sm:w-auto px-6 py-3 bg-white text-clay-muted font-heading font-bold rounded-[20px] shadow-clayCard hover:-translate-y-1 hover:shadow-clayButtonHover transition-all active:scale-95 active:shadow-clayPressed">Edit Data</button>
           <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-br from-clay-accent to-clay-accent-alt text-white rounded-[20px] font-heading font-bold shadow-clayButton hover:-translate-y-1 hover:shadow-clayButtonHover transition-all active:scale-95 active:shadow-clayPressed">Mulai Chat</button>
        </div>
        
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-clay-accent/5 rounded-full blur-3xl -z-10 animate-clay-float"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Navigation Tabs */}
        <div className="lg:col-span-1">
           <div className="bg-white/50 backdrop-blur-md rounded-[32px] border-none shadow-clayCard p-3 space-y-2 sticky top-28">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-[20px] transition-all duration-300 active:scale-[0.92] ${
                    activeTab === tab.id 
                      ? "bg-white text-clay-accent shadow-clayButton" 
                      : "text-clay-muted hover:bg-white/50 hover:text-clay-foreground"
                  }`}
                >
                  <tab.icon size={22} className={activeTab === tab.id ? "drop-shadow-[0_4px_8px_rgba(124,58,237,0.3)]" : ""} />
                  <span className="font-heading font-bold text-sm tracking-wide">{tab.label}</span>
                </button>
              ))}
           </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
           <div className="bg-white/80 backdrop-blur-xl rounded-[40px] border-none shadow-clayCard min-h-[600px] overflow-hidden flex flex-col">
              {activeTab === 'jurnal' && (
                <div className="p-8 md:p-10 space-y-8 flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-heading font-black text-clay-foreground">Timeline Jurnal Pasien</h2>
                    <div className="flex items-center gap-4">
                       <select className="bg-[#EFEBF5] border-none text-xs font-heading font-black text-clay-accent uppercase tracking-widest px-4 py-2 rounded-xl shadow-clayPressed focus:ring-0 cursor-pointer hover:bg-white transition-all">
                         <option>Bulan Ini</option>
                         <option>Bulan Lalu</option>
                       </select>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="p-6 rounded-[28px] bg-white border-2 border-transparent hover:border-clay-accent/10 hover:-translate-y-1 hover:shadow-clayCard transition-all duration-300 group">
                         <div className="flex items-start justify-between">
                           <div className="flex gap-5">
                             <div className="mt-1 w-14 h-14 rounded-2xl bg-clay-canvas flex items-center justify-center shrink-0 shadow-clayPressed group-hover:bg-white transition-colors">
                               <Clock className="text-clay-accent w-6 h-6" />
                             </div>
                             <div>
                               <p className="font-heading font-black text-clay-foreground text-lg">Input Harian: Gejala & Makanan</p>
                               <p className="text-xs font-heading font-bold text-clay-muted mt-1 uppercase tracking-wider">14 April 2026, 08:30 WIB</p>
                               <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                                  <div className="p-4 bg-clay-canvas/50 rounded-2xl group-hover:bg-white transition-colors border border-transparent group-hover:border-clay-muted/5">
                                    <p className="text-[10px] uppercase font-heading font-black text-clay-muted/60 tracking-widest">Kondisi</p>
                                    <p className="text-sm font-heading font-bold text-clay-foreground mt-1">Lemas</p>
                                  </div>
                                  <div className="p-4 bg-clay-canvas/50 rounded-2xl group-hover:bg-white transition-colors border border-transparent group-hover:border-clay-muted/5">
                                    <p className="text-[10px] uppercase font-heading font-black text-clay-muted/60 tracking-widest">Nyeri</p>
                                    <p className="text-sm font-heading font-bold text-clay-foreground mt-1">3 / 10</p>
                                  </div>
                                  <div className="p-4 bg-clay-canvas/50 rounded-2xl group-hover:bg-white transition-colors border border-transparent group-hover:border-clay-muted/5">
                                    <p className="text-[10px] uppercase font-heading font-black text-clay-muted/60 tracking-widest">Tidur</p>
                                    <p className="text-sm font-heading font-bold text-clay-foreground mt-1">6.5 Jam</p>
                                  </div>
                                  <div className="p-4 bg-clay-canvas/50 rounded-2xl group-hover:bg-white transition-colors border border-transparent group-hover:border-clay-muted/5">
                                    <p className="text-[10px] uppercase font-heading font-black text-clay-muted/60 tracking-widest">Mood</p>
                                    <p className="text-sm font-heading font-bold text-amber-600 mt-1">Cukup</p>
                                  </div>
                               </div>
                             </div>
                           </div>
                           <button className="text-clay-muted group-hover:text-clay-accent group-hover:bg-white p-3 rounded-xl transition-all shadow-sm group-hover:shadow-clayCard active:scale-90">
                             <ChevronDown size={22} />
                           </button>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'catatan' && (
                <div className="p-8 md:p-10 flex flex-col h-full flex-1">
                  <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 text-center sm:text-left">
                    <div>
                      <h2 className="text-xl font-heading font-black text-clay-foreground">Catatan Medis Dokter</h2>
                      <p className="text-sm font-sans font-medium text-clay-muted mt-1">Hanya dapat dilihat oleh dokter yang menangani.</p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-clay-accent to-clay-accent-alt text-white rounded-[20px] font-heading font-bold shadow-clayButton hover:-translate-y-1 hover:shadow-clayButtonHover transition-all active:scale-95 active:shadow-clayPressed">
                      <Save size={18} />
                      Simpan Catatan
                    </button>
                  </div>
                  <textarea 
                    className="flex-1 w-full min-h-[350px] bg-[#EFEBF5] border-none rounded-[32px] p-8 text-clay-foreground text-lg shadow-clayPressed focus:outline-none focus:ring-4 focus:ring-clay-accent/10 focus:bg-white transition-all resize-none font-sans placeholder:text-clay-muted/40"
                    placeholder="Tuliskan catatan observasi, rencana tindakan, atau detail penting lainnya di sini..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                  
                  <div className="mt-10 border-t border-clay-muted/10 pt-8">
                     <h3 className="text-lg font-heading font-black text-clay-foreground mb-6">Catatan Sebelumnya</h3>
                     <div className="space-y-4">
                        <div className="p-6 bg-white rounded-[24px] shadow-clayCard hover:-translate-y-1 transition-all">
                          <div className="flex items-center justify-between mb-3">
                             <p className="text-[10px] font-heading font-black text-clay-muted/60 uppercase tracking-widest">10 April 2026</p>
                             <button className="text-clay-accent text-xs font-heading font-black hover:underline underline-offset-4">EDIT</button>
                          </div>
                          <p className="text-base font-sans font-medium text-clay-foreground leading-relaxed">Pasien melaporkan nyeri berkurang. Melanjutkan regimen obat saat ini. Menyarankan peningkatan asupan serat.</p>
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="p-8 md:p-10 flex-1">
                   <div className="flex items-center gap-5 mb-10">
                      <div className="w-16 h-16 rounded-[24px] bg-gradient-to-br from-purple-400 to-purple-600 text-white flex items-center justify-center shadow-clayButton animate-clay-breathe">
                         <Brain size={32} />
                      </div>
                      <div>
                        <h2 className="text-xl font-heading font-black text-clay-foreground">Smart Health Diagnostic (AI)</h2>
                        <p className="text-sm font-sans font-medium text-clay-muted mt-1 uppercase tracking-wide">Analisis risiko berbasis data jurnal & riwayat medis.</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="p-8 rounded-[32px] bg-white shadow-clayCard border-none flex flex-col items-center justify-center text-center">
                         <h3 className="text-lg font-heading font-black text-clay-foreground mb-6">Skor Kondisi Saat Ini</h3>
                         <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                            <svg className="w-full h-full transform -rotate-90">
                               <circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="16" fill="transparent" className="text-clay-canvas" />
                               <circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="16" fill="transparent" strokeDasharray="452.3" strokeDashoffset="126" strokeLinecap="round" className="text-clay-accent drop-shadow-[0_0_12px_rgba(124,58,237,0.3)]" />
                            </svg>
                            <span className="absolute text-4xl font-heading font-black text-clay-accent">72%</span>
                         </div>
                         <p className="text-sm font-heading font-black text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full shadow-sm">Peningkatan 5% dari minggu lalu</p>
                      </div>

                      <div className="space-y-6">
                         <div className="p-6 rounded-[24px] bg-white border border-red-100 shadow-clayCard hover:-translate-y-1 transition-all group">
                            <p className="text-[10px] font-heading font-black text-red-500 uppercase tracking-widest flex items-center gap-2">
                               <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                               Peringatan Risiko
                            </p>
                            <p className="text-base font-heading font-bold text-clay-foreground mt-3 group-hover:text-red-700 transition-colors">Anomali pada pola tidur 3 hari berturut-turut terdeteksi.</p>
                         </div>
                         <div className="p-6 rounded-[24px] bg-white border border-clay-accent/10 shadow-clayCard hover:-translate-y-1 transition-all group">
                            <p className="text-[10px] font-heading font-black text-clay-accent uppercase tracking-widest flex items-center gap-2">
                               <span className="w-2 h-2 bg-clay-accent rounded-full"></span>
                               Rekomendasi AI
                            </p>
                            <p className="text-base font-heading font-bold text-clay-foreground mt-3 group-hover:text-clay-accent transition-colors">Jadwalkan konsultasi video atau peningkatan dosis harian.</p>
                         </div>
                      </div>
                   </div>
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
           </div>
        </div>
      </div>
    </div>
  );
}
