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
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      {/* Header Profile */}
      <div className="bg-white/70 backdrop-blur-xl rounded-[40px] border-none shadow-clayDeep overflow-hidden relative group">
         <div className="h-40 bg-gradient-to-br from-clay-accent via-indigo-600 to-purple-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            {/* Animated Blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-clay-float-slow -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/30 rounded-full blur-3xl animate-clay-float -ml-10 -mb-10"></div>
         </div>
         <div className="px-10 pb-10 flex flex-col items-center sm:items-start sm:flex-row gap-8 -mt-20 relative z-10">
            <div className="relative group/avatar">
               <div className="w-40 h-40 rounded-[32px] border-8 border-white bg-white shadow-clayDeep overflow-hidden group-hover/avatar:scale-105 transition-transform duration-500">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Dr Sarah" className="w-full h-full object-cover" />
               </div>
               <button className="absolute -bottom-2 -right-2 p-4 bg-gradient-to-br from-clay-accent to-clay-accent-alt text-white rounded-[20px] border-4 border-white shadow-clayButton hover:scale-110 hover:shadow-clayButtonHover transition-all active:scale-95 active:shadow-clayPressed">
                  <Camera size={22} />
               </button>
            </div>
            
            <div className="flex-1 mt-20 sm:mt-24 text-center sm:text-left">
               <h1 className="text-3xl font-heading font-black text-clay-foreground tracking-tight">Dr. Sarah Johnson, Sp.PD-KGEH</h1>
               <p className="text-clay-accent font-heading font-bold mt-2 text-lg">Spesialis Penyakit Dalam - Konsultan Gastroentero-Hepatologi</p>
               <div className="flex flex-wrap justify-center sm:justify-start gap-6 mt-4">
                  <div className="flex items-center gap-2 text-clay-muted font-heading font-bold text-xs uppercase tracking-widest bg-clay-canvas/50 px-4 py-2 rounded-xl shadow-sm">
                     <MapPin size={16} className="text-clay-accent/50" />
                     <span>RS Pusat Harapan, Jakarta</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 font-heading font-black text-xs uppercase tracking-widest bg-emerald-50 px-4 py-2 rounded-xl shadow-sm border border-emerald-100">
                     <ShieldCheck size={16} />
                     <span>Terverifikasi KKI</span>
                  </div>
               </div>
            </div>

            <div className="mt-20 sm:mt-24">
               <button 
                onClick={() => setIsEditing(!isEditing)}
                className={`px-8 py-3 rounded-[20px] font-heading font-black text-sm uppercase tracking-widest transition-all shadow-clayButton hover:-translate-y-1 hover:shadow-clayButtonHover active:scale-[0.92] active:shadow-clayPressed ${
                  isEditing 
                    ? "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white" 
                    : "bg-white text-clay-muted hover:text-clay-accent"
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
         {/* Left Column: Contact & Basic Info */}
         <div className="md:col-span-1 space-y-8">
            <div className="bg-white/70 backdrop-blur-xl rounded-[32px] border-none shadow-clayCard p-8 hover:-translate-y-1 transition-all">
               <h3 className="text-lg font-heading font-black text-clay-foreground mb-8">Informasi Kontak</h3>
               <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                     <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                        <Mail size={22} />
                     </div>
                     <div>
                        <p className="text-[10px] font-heading font-black text-clay-muted/40 uppercase tracking-widest">Alamat Email</p>
                        <p className="text-sm font-heading font-bold text-clay-foreground">sarah.j@hepacare.id</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                     <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 transition-transform">
                        <Phone size={22} />
                     </div>
                     <div>
                        <p className="text-[10px] font-heading font-black text-clay-muted/40 uppercase tracking-widest">WhatsApp Bisnis</p>
                        <p className="text-sm font-heading font-bold text-clay-foreground">+62 812-3456-7890</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl rounded-[32px] border-none shadow-clayCard p-8 hover:-translate-y-1 transition-all overflow-hidden">
               <h3 className="text-lg font-heading font-black text-clay-foreground mb-8">Jadwal Praktik</h3>
               <div className="space-y-4">
                  {['Senin', 'Rabu', 'Jumat'].map((day) => (
                    <div key={day} className="flex items-center justify-between p-4 bg-clay-canvas/40 backdrop-blur-sm rounded-2xl border border-white/50 shadow-clayPressed group hover:bg-white transition-all">
                       <span className="text-sm font-heading font-black text-clay-foreground group-hover:text-clay-accent transition-colors">{day}</span>
                       <span className="text-[11px] font-heading font-black text-clay-accent bg-white px-3 py-1.5 rounded-xl shadow-sm">08:00 - 12:00</span>
                    </div>
                  ))}
                  <button className="w-full mt-4 py-4 text-[10px] font-heading font-black text-clay-muted/50 border-2 border-dashed border-clay-accent/10 rounded-2xl hover:border-clay-accent hover:text-clay-accent hover:bg-white hover:shadow-clayCard transition-all uppercase tracking-widest active:scale-[0.95]">
                     Tambah Jadwal Praktik
                  </button>
               </div>
            </div>
         </div>

         {/* Right Column: Bio & Skills */}
         <div className="md:col-span-2 space-y-8">
            <div className="bg-white/70 backdrop-blur-xl rounded-[32px] border-none shadow-clayCard p-10 hover:-translate-y-1 transition-all group">
               <h3 className="text-xl font-heading font-black text-clay-foreground mb-6 flex items-center gap-3">
                  <div className="p-2 bg-clay-accent/10 rounded-xl group-hover:bg-clay-accent group-hover:text-white transition-all">
                    <Book size={24} />
                  </div>
                  Biografi Singkat
               </h3>
               {isEditing ? (
                 <textarea 
                  className="w-full min-h-[200px] bg-[#EFEBF5] border-none rounded-[24px] p-6 text-clay-foreground text-lg shadow-clayPressed focus:outline-none focus:ring-8 focus:ring-clay-accent/5 focus:bg-white transition-all resize-none font-sans"
                  defaultValue="Seorang spesialis hepatologi dengan pengalaman lebih dari 10 tahun menangani kasus penyakit hati kronis. Berfokus pada pencegahan dan penanganan awal hepatitis melalui edukasi digital..."
                 />
               ) : (
                 <p className="text-clay-foreground/80 font-sans font-medium text-lg leading-relaxed">
                   Seorang spesialis hepatologi dengan pengalaman lebih dari 10 tahun menangani kasus penyakit hati kronis. Berfokus pada pencegahan dan penanganan awal hepatitis melalui edukasi digital dan pemantauan pasien secara real-time. Lulusan Spesialis Penyakit Dalam dari Universitas Indonesia dan melanjutkan Fellowship Hepatologi di Singapura.
                 </p>
               )}
            </div>

            <div className="bg-white/70 backdrop-blur-xl rounded-[32px] border-none shadow-clayCard p-10 hover:-translate-y-1 transition-all group">
               <h3 className="text-xl font-heading font-black text-clay-foreground mb-8 flex items-center gap-3">
                  <div className="p-2 bg-amber-100 rounded-xl group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <Award size={24} />
                  </div>
                  Keahlian & Sertifikasi
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                     "Gastroentero-Hepatology",
                     "Advanced Endoscopy",
                     "Liver Transplantation Care",
                     "Medical Education"
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-4 p-5 bg-white border border-clay-muted/5 rounded-[24px] shadow-sm hover:shadow-clayCard hover:-translate-y-1 transition-all group/skill cursor-default active:scale-95">
                       <div className="w-3 h-3 rounded-full bg-clay-accent shadow-[0_0_8px_rgba(124,58,237,0.5)] group-hover/skill:scale-150 transition-transform"></div>
                       <span className="text-sm font-heading font-black text-clay-muted group-hover/skill:text-clay-accent transition-colors">{skill}</span>
                       <ChevronRight size={18} className="ml-auto text-clay-muted/20 group-hover/skill:text-clay-accent group-hover/skill:translate-x-1 transition-all" />
                    </div>
                  ))}
                  <button className="flex items-center justify-center gap-3 p-5 border-2 border-dashed border-clay-accent/10 rounded-[24px] text-clay-muted/50 hover:border-clay-accent hover:text-clay-accent hover:bg-white hover:shadow-clayCard transition-all active:scale-[0.98]">
                     <Plus size={20} />
                     <span className="text-[10px] font-heading font-black uppercase tracking-widest">Tambah Sertifikasi Baru</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
