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
    <div className="space-y-6">
      {/* Back Button */}
      <Link href="/admin/pasien" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors">
        <ArrowLeft size={18} />
        <span className="font-medium text-sm">Kembali ke Daftar Pasien</span>
      </Link>

      {/* Profile Summary Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100">
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Budi" alt="Budi" className="w-16 h-16" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
             <h1 className="text-2xl font-bold text-slate-800">Budi Santoso</h1>
             <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100 uppercase tracking-wider">Risiko Tinggi</span>
          </div>
          <p className="text-slate-500 mt-1 flex items-center gap-3 text-sm">
             <span>ID: #PX-92841</span>
             <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
             <span>Laki-laki, 45 Tahun</span>
             <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
             <span>Golongan Darah: O+</span>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
           <button className="px-4 py-2 border border-slate-200 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors text-sm">Edit Data</button>
           <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20 text-sm">Mulai Chat</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Tabs */}
        <div className="lg:col-span-1">
           <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-2 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeTab === tab.id 
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20" 
                      : "text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  <tab.icon size={20} />
                  <span className="font-semibold text-sm">{tab.label}</span>
                </button>
              ))}
           </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
           <div className="bg-white rounded-2xl border border-slate-100 shadow-sm min-h-[500px] overflow-hidden">
              {activeTab === 'jurnal' && (
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-800">Timeline Jurnal Pasien</h2>
                    <div className="flex items-center gap-4">
                       <select className="text-sm bg-slate-50 border-none px-3 py-1 rounded-lg focus:ring-0 cursor-pointer">
                         <option>Bulan Ini</option>
                         <option>Bulan Lalu</option>
                       </select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="p-4 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all group">
                         <div className="flex items-start justify-between">
                           <div className="flex gap-4">
                             <div className="mt-1 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                               <Clock className="text-indigo-600 w-5 h-5" />
                             </div>
                             <div>
                               <p className="font-bold text-slate-800">Input Harian: Gejala & Makanan</p>
                               <p className="text-sm text-slate-500 mt-0.5">14 April 2026, 08:30 WIB</p>
                               <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                                  <div className="p-3 bg-slate-50 rounded-xl">
                                    <p className="text-[10px] uppercase font-bold text-slate-400">Kondisi</p>
                                    <p className="text-sm font-bold text-slate-700 mt-1">Lemas</p>
                                  </div>
                                  <div className="p-3 bg-slate-50 rounded-xl">
                                    <p className="text-[10px] uppercase font-bold text-slate-400">Nyeri</p>
                                    <p className="text-sm font-bold text-slate-700 mt-1">3 / 10</p>
                                  </div>
                                  <div className="p-3 bg-slate-50 rounded-xl">
                                    <p className="text-[10px] uppercase font-bold text-slate-400">Tidur</p>
                                    <p className="text-sm font-bold text-slate-700 mt-1">6.5 Jam</p>
                                  </div>
                                  <div className="p-3 bg-slate-50 rounded-xl">
                                    <p className="text-[10px] uppercase font-bold text-slate-400">Mood</p>
                                    <p className="text-sm font-bold text-amber-600 mt-1">Cukup</p>
                                  </div>
                               </div>
                             </div>
                           </div>
                           <button className="text-indigo-600 group-hover:bg-indigo-50 p-2 rounded-lg transition-all">
                             <ChevronDown size={20} />
                           </button>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'catatan' && (
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-bold text-slate-800">Catatan Medis Dokter</h2>
                      <p className="text-sm text-slate-500 mt-0.5">Hanya dapat dilihat oleh dokter yang menangani.</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20 text-sm">
                      <Save size={16} />
                      Simpan Catatan
                    </button>
                  </div>
                  <textarea 
                    className="flex-1 w-full min-h-[300px] bg-slate-50 border border-slate-100 rounded-2xl p-6 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:bg-white transition-all resize-none"
                    placeholder="Tuliskan catatan observasi, rencana tindakan, atau detail penting lainnya di sini..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                  
                  <div className="mt-8 border-t border-slate-100 pt-6">
                     <h3 className="font-bold text-slate-800 mb-4">Catatan Sebelumnya</h3>
                     <div className="space-y-3">
                        <div className="p-4 bg-slate-50 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                             <p className="text-xs font-bold text-slate-400 uppercase">10 April 2026</p>
                             <button className="text-indigo-600 text-xs font-medium">Edit</button>
                          </div>
                          <p className="text-sm text-slate-700">Pasien melaporkan nyeri berkurang. Melanjutkan regimen obat saat ini. Menyarankan peningkatan asupan serat.</p>
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="p-6">
                   <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/20">
                         <Brain size={24} />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-slate-800">Smart Health Diagnostic (AI)</h2>
                        <p className="text-sm text-slate-500 mt-0.5">Analisis risiko berbasis data jurnal & riwayat medis.</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-2xl border-2 border-indigo-50 bg-indigo-50/20">
                         <h3 className="font-bold text-slate-800 mb-4">Skor Kondisi Saat Ini</h3>
                         <div className="flex items-center justify-center p-8">
                            <div className="relative w-32 h-32 flex items-center justify-center">
                               <svg className="w-full h-full transform -rotate-90">
                                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-indigo-100" />
                                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="364.4" strokeDashoffset="100" strokeLinecap="round" className="text-indigo-600" />
                               </svg>
                               <span className="absolute text-3xl font-bold text-indigo-700">72%</span>
                            </div>
                         </div>
                         <p className="text-center text-sm font-medium text-slate-600">Peningkatan 5% dari minggu lalu</p>
                      </div>

                      <div className="space-y-4">
                         <div className="p-4 rounded-xl bg-white border border-slate-100">
                            <p className="text-xs font-bold text-red-500 uppercase tracking-wider">Peringatan</p>
                            <p className="text-sm font-semibold text-slate-800 mt-1">Anomali pada pola tidur 3 hari berturut-turut.</p>
                         </div>
                         <div className="p-4 rounded-xl bg-white border border-slate-100">
                            <p className="text-xs font-bold text-indigo-500 uppercase tracking-wider">Rekomendasi AI</p>
                            <p className="text-sm font-semibold text-slate-800 mt-1">Jadwalkan konsultasi video minggu depan.</p>
                         </div>
                      </div>
                   </div>
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}
