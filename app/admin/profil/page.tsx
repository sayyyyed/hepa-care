"use client";

import React, { useState } from "react";
import { 
  Camera, 
  Mail, 
  MapPin, 
  Phone, 
  Award, 
  Book, 
  ShieldCheck,
  Save,
  ChevronRight,
  Plus
} from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header Profile */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden relative">
         <div className="h-32 bg-indigo-600 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-80"></div>
         </div>
         <div className="px-8 pb-8 flex flex-col items-center sm:items-start sm:flex-row gap-6 -mt-12 relative z-10">
            <div className="relative group">
               <div className="w-32 h-32 rounded-3xl border-4 border-white bg-slate-100 overflow-hidden shadow-lg">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Dr Sarah" className="w-full h-full object-cover" />
               </div>
               <button className="absolute -bottom-2 -right-2 p-2.5 bg-indigo-600 text-white rounded-xl border-4 border-white shadow-md hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
                  <Camera size={18} />
               </button>
            </div>
            
            <div className="flex-1 mt-12 sm:mt-14 text-center sm:text-left">
               <h1 className="text-2xl font-bold text-slate-800">Dr. Sarah Johnson, Sp.PD-KGEH</h1>
               <p className="text-indigo-600 font-semibold mt-1">Spesialis Penyakit Dalam - Konsultan Gastroentero-Hepatologi</p>
               <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-3">
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm italic">
                     <MapPin size={16} />
                     <span>RS Pusat Harapan, Jakarta</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                     <ShieldCheck size={16} className="text-emerald-500" />
                     <span>Terverifikasi KKI</span>
                  </div>
               </div>
            </div>

            <div className="mt-12 sm:mt-14">
               <button 
                onClick={() => setIsEditing(!isEditing)}
                className={`px-6 py-2.5 rounded-xl font-bold transition-all ${
                  isEditing 
                    ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/20" 
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
               >
                  {isEditing ? (
                    <div className="flex items-center gap-2">
                      <Save size={18} />
                      Simpan Profil
                    </div>
                  ) : "Edit Profil"}
               </button>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {/* Left Column: Contact & Basic Info */}
         <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
               <h3 className="font-bold text-slate-800 mb-6">Informasi Kontak</h3>
               <div className="space-y-4">
                  <div className="flex items-center gap-3">
                     <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                        <Mail size={18} />
                     </div>
                     <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Email</p>
                        <p className="text-sm font-semibold text-slate-700">sarah.j@hepacare.id</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <Phone size={18} />
                     </div>
                     <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">WhatsApp</p>
                        <p className="text-sm font-semibold text-slate-700">+62 812-3456-7890</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 overflow-hidden">
               <h3 className="font-bold text-slate-800 mb-6">Jadwal Praktik</h3>
               <div className="space-y-3">
                  {['Senin', 'Rabu', 'Jumat'].map((day) => (
                    <div key={day} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                       <span className="text-sm font-bold text-slate-700">{day}</span>
                       <span className="text-xs text-indigo-600 font-semibold">08:00 - 12:00</span>
                    </div>
                  ))}
                  <button className="w-full mt-2 py-2 text-xs font-bold text-slate-400 border border-dashed border-slate-200 rounded-xl hover:border-indigo-300 hover:text-indigo-600 transition-all">
                     Tambah Jadwal
                  </button>
               </div>
            </div>
         </div>

         {/* Right Column: Bio & Skills */}
         <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
               <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Book size={20} className="text-indigo-600" />
                  Biografi Singkat
               </h3>
               {isEditing ? (
                 <textarea 
                  className="w-full min-h-[150px] bg-slate-50 border border-slate-100 rounded-2xl p-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 transition-all resize-none"
                  defaultValue="Seorang spesialis hepatologi dengan pengalaman lebih dari 10 tahun menangani kasus penyakit hati kronis. Berfokus pada pencegahan dan penanganan awal hepatitis melalui edukasi digital..."
                 />
               ) : (
                 <p className="text-slate-600 leading-relaxed">
                   Seorang spesialis hepatologi dengan pengalaman lebih dari 10 tahun menangani kasus penyakit hati kronis. Berfokus pada pencegahan dan penanganan awal hepatitis melalui edukasi digital dan pemantauan pasien secara real-time. Lulusan Spesialis Penyakit Dalam dari Universitas Indonesia dan melanjutkan Fellowship Hepatologi di Singapura.
                 </p>
               )}
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
               <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Award size={20} className="text-amber-500" />
                  Keahlian & Sertifikasi
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Gastroentero-Hepatology",
                    "Advanced Endoscopy",
                    "Liver Transplantation Care",
                    "Medical Education"
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-3 p-3 border border-slate-100 rounded-xl hover:bg-indigo-50/30 transition-all group">
                       <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-125 transition-transform"></div>
                       <span className="text-sm font-semibold text-slate-700">{skill}</span>
                       <ChevronRight size={14} className="ml-auto text-slate-300" />
                    </div>
                  ))}
                  <button className="flex items-center justify-center gap-2 p-3 border border-dashed border-slate-200 rounded-xl text-slate-400 hover:border-indigo-300 hover:text-indigo-600 transition-all">
                     <Plus size={16} />
                     <span className="text-xs font-bold uppercase tracking-wider">Tambah Item</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
