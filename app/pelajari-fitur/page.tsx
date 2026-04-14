"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BackgroundBlobs } from "../../components/BackgroundBlobs";
import { ClayCard } from "../../components/ClayCard";
import { ClayButton } from "../../components/ClayButton";
import { 
  ArrowLeft,
  LayoutDashboard, 
  User, 
  Activity, 
  Utensils, 
  BookOpen, 
  GraduationCap, 
  Stethoscope, 
  Layers,
  HeartPulse,
  Heart,
  CalendarDays,
  Target,
  ShieldCheck,
  CheckCircle2,
  Bell,
  MapPin,
  Bot,
  MessageSquare,
  PlaySquare,
  FileText,
  PieChart,
  Leaf,
  Beef,
  Flame,
  Gauge,
  SlidersHorizontal
} from "lucide-react";

// Tipe Data Fitur
interface FeatureDef {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  description: string;
  highlights: string[];
  mockup: React.ReactNode;
}

// Data Definition
const FEATURES: FeatureDef[] = [
  {
    id: "dashboard",
    title: "Dashboard Pintar",
    subtitle: "PUSAT KENDALI",
    icon: LayoutDashboard,
    color: "from-[#A78BFA] to-[#7C3AED]", // Violet
    description: "Semua ringkasan kesehatan Anda di satu tempat. AI mengolah data harian Anda untuk memberikan laporan real-time yang mudah dipahami dalam sekilas pandang.",
    highlights: ["Skor kesehatan instan", "Notifikasi & misi harian", "Navigasi ke semua modul"],
    mockup: (
      <div className="flex flex-col gap-4 w-full h-full p-2">
        <div className="flex justify-between items-center bg-white/60 p-4 rounded-2xl shadow-sm">
           <div className="flex gap-3 items-center">
             <HeartPulse className="text-violet-500 w-6 h-6" />
             <div className="font-bold text-sm text-slate-700">Skor Hati</div>
           </div>
           <div className="bg-emerald-100 text-emerald-600 px-3 py-1 text-xs font-black rounded-full">AMAN</div>
        </div>
        <div className="grid grid-cols-2 gap-4 flex-1">
          <div className="bg-white/60 rounded-2xl shadow-sm p-4 flex flex-col justify-center items-center gap-2">
             <Target className="text-pink-500 w-8 h-8 opacity-80" />
             <div className="w-16 h-2 bg-slate-200 rounded-full mt-2" />
          </div>
          <div className="bg-white/60 rounded-2xl shadow-sm p-4 flex flex-col justify-center items-center gap-2">
             <Activity className="text-blue-500 w-8 h-8 opacity-80" />
             <div className="w-12 h-2 bg-slate-200 rounded-full mt-2" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: "profil",
    title: "Profil Medis Pribadi",
    subtitle: "DATA KLINIS",
    icon: User,
    color: "from-[#F472B6] to-[#DB2777]", // Pink
    description: "Kelola riwayat kesehatan, informasi dasar seperti BMI, dan catatan alergi. Sistem ini menggunakan data profil Anda sebagai pondasi analitik Artificial Intelligence.",
    highlights: ["Sistem terenkripsi aman", "Perubahan BMI real-time", "Riwayat genetik tercatat"],
    mockup: (
      <div className="flex flex-col items-center gap-5 w-full h-full p-4">
        <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center shadow-sm">
          <User className="w-10 h-10 text-pink-500" />
        </div>
        <div className="w-32 h-4 bg-slate-200 rounded-full" />
        <div className="grid grid-cols-2 gap-3 w-full mt-4">
          <div className="h-16 bg-white/60 shadow-sm rounded-xl flex items-center justify-center gap-2">
            <Heart className="text-pink-400 w-5 h-5" />
            <div className="w-12 h-3 bg-slate-200 rounded-full" />
          </div>
          <div className="h-16 bg-white/60 shadow-sm rounded-xl flex items-center justify-center gap-2">
            <ShieldCheck className="text-emerald-400 w-5 h-5" />
            <div className="w-10 h-3 bg-slate-200 rounded-full" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: "cek-risiko",
    title: "Cek Risiko Penyakit",
    subtitle: "SIMULASI LABORATORIUM",
    icon: Activity,
    color: "from-[#38BDF8] to-[#0284C7]", // Blue
    description: "Alat evaluasi klinis digital. Hitung tingkat probabilitas gangguan liver Anda berdasarkan metode medis terpercaya tanpa melibatkan jarum suntik.",
    highlights: ["Analisis form interaktif", "Kalkulasi berbasis matriks risiko", "Skoring instan FRS"],
    mockup: (
      <div className="flex flex-col justify-center items-center w-full h-full p-4 gap-6">
        <div className="relative w-32 h-32 bg-white/60 rounded-full shadow-clayCard flex items-center justify-center">
            <Gauge className="w-16 h-16 text-blue-500 animate-pulse" />
            <div className="absolute top-2 right-2 w-4 h-4 bg-amber-400 rounded-full shadow-sm" />
        </div>
        <div className="w-full space-y-3">
          <div className="flex items-center gap-3 bg-white/50 p-3 rounded-2xl">
             <SlidersHorizontal className="text-slate-400 w-5 h-5" />
             <div className="flex-1 h-3 bg-slate-200 rounded-full relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-blue-400 rounded-full" />
             </div>
          </div>
          <div className="flex items-center gap-3 bg-white/50 p-3 rounded-2xl">
             <SlidersHorizontal className="text-slate-400 w-5 h-5" />
             <div className="flex-1 h-3 bg-slate-200 rounded-full relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-emerald-400 rounded-full" />
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "diet",
    title: "Analisis Pola Makan",
    subtitle: "MANAJEMEN GIZI",
    icon: Utensils,
    color: "from-[#34D399] to-[#059669]", // Emerald
    description: "Evaluasi kandungan nutrisi dari piring Anda. Sistem mencatat indeks serat, protein, gula tersembunyi, hingga lemak untuk rekomendasi menu esok harinya.",
    highlights: ["Log Makanan harian", "Visualisasi makro nutrisi", "Alert Ultra-Processed Food"],
    mockup: (
      <div className="flex flex-col gap-4 w-full h-full p-4">
        <div className="flex gap-4">
          <div className="w-1/2 aspect-[4/3] bg-white/60 shadow-sm rounded-2xl flex flex-col items-center justify-center p-2">
             <PieChart className="w-10 h-10 text-emerald-500 mb-2" />
             <div className="w-16 h-2 bg-slate-200 rounded-full" />
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <div className="bg-emerald-50 border border-emerald-100 flex items-center p-2 rounded-xl gap-2 shadow-sm">
              <Leaf className="w-4 h-4 text-emerald-500" />
              <div className="w-10 h-2 bg-emerald-200 rounded-full" />
            </div>
            <div className="bg-amber-50 border border-amber-100 flex items-center p-2 rounded-xl gap-2 shadow-sm">
              <Beef className="w-4 h-4 text-amber-500" />
              <div className="w-10 h-2 bg-amber-200 rounded-full" />
            </div>
            <div className="bg-red-50 border border-red-100 flex items-center p-2 rounded-xl gap-2 shadow-sm">
              <Flame className="w-4 h-4 text-red-500" />
              <div className="w-10 h-2 bg-red-200 rounded-full" />
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-200 h-10 rounded-xl" />
      </div>
    )
  },
  {
    id: "jurnal",
    title: "Jurnal Kesehatan",
    subtitle: "CATATAN HARIAN",
    icon: BookOpen,
    color: "from-[#FBBF24] to-[#D97706]", // Amber
    description: "Tangkap setiap keluhan, pola tidur, dan gejala tidak biasa dalam mini-jurnal pelacak. Kami akan mencari polanya untuk membantu dokter memberikan analisis yang tepat.",
    highlights: ["Timeline historis yang rapi", "Tracking kualitas fisik harian", "Mudah dibagikan ke dokter"],
    mockup: (
      <div className="flex items-start gap-4 w-full h-full p-6">
         {/* Timeline line */}
         <div className="w-1 h-full bg-amber-100 rounded-full relative flex flex-col gap-10 items-center pt-2">
            <div className="w-3 h-3 bg-amber-400 rounded-full absolute top-[10px]" />
            <div className="w-3 h-3 bg-amber-400 rounded-full absolute top-[60px]" />
            <div className="w-3 h-3 bg-slate-300 rounded-full absolute top-[110px]" />
         </div>
         <div className="flex-1 flex flex-col gap-4">
            <div className="bg-white/70 p-3 rounded-xl shadow-sm text-xs">
               <div className="flex items-center gap-2 mb-2 text-slate-400">
                  <CalendarDays className="w-3 h-3" /> 09:00 AM
               </div>
               <div className="w-full h-2 bg-slate-200 rounded-full mb-1" />
               <div className="w-2/3 h-2 bg-slate-200 rounded-full" />
            </div>
            <div className="bg-white/70 p-3 rounded-xl shadow-sm text-xs">
               <div className="flex items-center gap-2 mb-2 text-slate-400">
                  <CalendarDays className="w-3 h-3" /> 01:30 PM
               </div>
               <div className="w-3/4 h-2 bg-slate-200 rounded-full" />
            </div>
         </div>
      </div>
    )
  },
  {
    id: "edukasi",
    title: "Edukasi & Pustaka",
    subtitle: "AKSES PENGETAHUAN",
    icon: GraduationCap,
    color: "from-[#818CF8] to-[#4338CA]", // Indigo
    description: "Bebaskan diri dari mitos medis dengan sumber pengetahuan premium. Dari video nutrisi hingga pemahaman mendalam tentang virus Hepatitis, semuanya ada disini.",
    highlights: ["Kurasi konten ahli medis", "Video edukasi singkat", "Mudah dicerna & interaktif"],
    mockup: (
      <div className="flex flex-col gap-4 w-full h-full p-4">
         <div className="bg-indigo-100 h-28 rounded-2xl w-full flex items-center justify-center shadow-inner relative overflow-hidden group">
            <PlaySquare className="w-10 h-10 text-indigo-500 z-10 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 to-transparent" />
         </div>
         <div className="flex gap-3 h-16">
            <div className="flex-1 bg-white/60 rounded-xl shadow-sm flex items-center justify-center p-2">
               <FileText className="w-6 h-6 text-indigo-400" />
            </div>
            <div className="flex-1 bg-white/60 rounded-xl shadow-sm flex items-center justify-center p-2">
               <FileText className="w-6 h-6 text-indigo-400" />
            </div>
         </div>
      </div>
    )
  },
  {
    id: "konsultasi",
    title: "Konsultasi Jarak Jauh",
    subtitle: "TELEMEDICINE",
    icon: Stethoscope,
    color: "from-[#FB7185] to-[#E11D48]", // Rose
    description: "Koneksi langsung ke puluhan tenaga ahli terverifikasi. Bagikan layar skor Anda, obrolan dua arah, dan diskusikan rencana penanganan klinis dari rumah.",
    highlights: ["Sistem Live Chat Medis", "Pengiriman otomatis rekam medis", "Privasi dijamin 100%"],
    mockup: (
      <div className="flex flex-col p-4 w-full h-full justify-between">
         <div className="flex flex-col gap-3">
            <div className="bg-white/80 p-3 rounded-2xl rounded-tl-sm self-start max-w-[80%] shadow-sm">
               <div className="w-24 h-2 bg-slate-200 rounded-full mb-1" />
               <div className="w-16 h-2 bg-slate-200 rounded-full" />
            </div>
            <div className="bg-rose-500 p-3 rounded-2xl rounded-tr-sm self-end max-w-[80%] shadow-clayButton">
               <div className="w-20 h-2 bg-white/80 rounded-full mb-1" />
               <div className="w-24 h-2 bg-white/80 rounded-full" />
            </div>
         </div>
         <div className="w-full h-12 bg-white flex items-center px-4 rounded-full mt-8 shadow-sm">
            <MessageSquare className="w-5 h-5 text-slate-300" />
            <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center ml-auto">
               <ArrowLeft className="w-4 h-4 text-white rotate-180" />
            </div>
         </div>
      </div>
    )
  },
  {
    id: "pendukung",
    title: "Ekstra Pendukung",
    subtitle: "ASISTEN CANGGIH",
    icon: Layers,
    color: "from-[#2DD4BF] to-[#0F766E]", // Teal
    description: "HepaBot dan Navigator berpadu membantu hidup spesifik Anda. Dari peta klinik gizi terdekat hingga alarm minum vitamin jam tepat.",
    highlights: ["HepaBot: Smart AI Chat", "Pemetaan faskes real-time", "Notifikasi Pintar Multi-layer"],
    mockup: (
      <div className="flex items-center justify-center relative w-full h-full p-4 overflow-hidden">
         <div className="absolute top-6 left-6 w-14 h-14 bg-white/80 backdrop-blur shadow-clayCard rounded-2xl flex items-center justify-center hover:scale-110 transition-transform">
            <Bell className="w-6 h-6 text-teal-500 animate-[wiggle_1s_ease-in-out_infinite]" />
         </div>
         <div className="absolute bottom-6 right-6 w-14 h-14 bg-white/80 backdrop-blur shadow-clayCard rounded-2xl flex items-center justify-center hover:scale-110 transition-transform">
            <MapPin className="w-6 h-6 text-teal-500" />
         </div>
         
         <div className="w-24 h-24 bg-teal-500 rounded-full shadow-[0_0_40px_rgba(45,212,191,0.5)] flex items-center justify-center z-10 m-auto">
            <Bot className="w-12 h-12 text-white" />
         </div>
      </div>
    )
  }
];

export default function InteractivePlatformHub() {
  const router = useRouter();
  const [activeId, setActiveId] = useState(FEATURES[0].id);

  const activeFeature = FEATURES.find(f => f.id === activeId) || FEATURES[0];

  return (
    <main className="min-h-screen bg-clay-canvas font-sans relative overflow-x-hidden pt-24 pb-20">
      <BackgroundBlobs />
      
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
        <div className="mx-auto max-w-7xl flex h-16 sm:h-20 items-center justify-between rounded-[32px] sm:rounded-[40px] bg-white/60 px-6 sm:px-8 shadow-clayCard backdrop-blur-xl pointer-events-auto">
          <button 
            onClick={() => router.push("/")}
            className="flex items-center gap-2 group p-2 -ml-2 rounded-2xl hover:bg-white transition-colors"
          >
            <ArrowLeft className="text-clay-muted group-hover:text-clay-accent transition-colors" />
            <span className="font-bold text-clay-muted group-hover:text-clay-accent transition-colors">Kembali</span>
          </button>
          
          <div className="flex gap-4">
             <ClayButton size="sm" onClick={() => router.push('/dashboard/cek-risiko')} className="hidden sm:flex">
                Mulai Simulasi
             </ClayButton>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-6">
        
        {/* Header Title */}
        <div className="text-center w-full max-w-3xl mx-auto mb-12 lg:mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
           <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 font-bold shadow-clayCard backdrop-blur-xl text-clay-accent text-sm tracking-wide">
             HUB FITUR INTERAKTIF
           </div>
           <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-clay-foreground tracking-tight leading-[1.05] mb-6">
             Kenali Platform Kami.
           </h1>
           <p className="text-lg md:text-xl font-medium text-clay-muted max-w-2xl mx-auto leading-relaxed">
             Desain masa depan untuk manajemen organ matamu. Eksplorasi setiap modul dan pelajari cara kami mengelola hari-harimu agar tetap sehat.
           </p>
        </div>

        {/* Dynamic App Simulator Interface */}
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 fill-mode-both">
          
          {/* L: Selection Panel (Vertical on MD, Horizontal Scroll on Mobile) */}
          <div className="w-full lg:w-[350px] shrink-0 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 px-2 -mx-2 lg:p-0 lg:-m-0 no-scrollbar snap-x snap-mandatory perspective-[1000px]">
            {FEATURES.map((feature) => {
               const isActive = activeId === feature.id;
               const Icon = feature.icon;
               return (
                 <button
                   key={feature.id}
                   onClick={() => setActiveId(feature.id)}
                   className={`snap-start shrink-0 lg:shrink w-[240px] lg:w-full flex items-center p-4 rounded-[28px] transition-all duration-300 transform-gpu ${
                     isActive 
                     ? "bg-white shadow-clayCard lg:translate-x-4 scale-100 border-[3px] border-white"
                     : "bg-white/40 shadow-sm hover:bg-white/60 hover:shadow-clayCard scale-[0.98] border-[3px] border-transparent opacity-70 hover:opacity-100"
                   }`}
                 >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive 
                        ? `bg-gradient-to-br ${feature.color} shadow-clayButton` 
                        : "bg-slate-200 text-slate-400"
                    }`}>
                       <Icon className={`w-7 h-7 ${isActive ? "text-white" : "text-slate-500"}`} />
                    </div>
                    <div className="ml-4 text-left">
                       <h3 className={`font-heading text-lg font-bold transition-colors ${isActive ? "text-clay-foreground" : "text-slate-600"}`}>
                         {feature.title}
                       </h3>
                    </div>
                 </button>
               )
            })}
          </div>

          {/* R: Dynamic Feature Viewer (The "App Window") */}
          <div className="flex-1 w-full flex flex-col min-h-[500px] lg:min-h-[600px]">
             <ClayCard className="flex-1 w-full !p-0 overflow-hidden flex flex-col sm:flex-row border-4 border-white bg-wite/90 h-[500px] lg:h-auto">
                
                {/* Visual Half */}
                <div className="w-full sm:w-5/12 relative bg-slate-50 overflow-hidden border-b sm:border-b-0 sm:border-r border-slate-200/60 p-6 flex items-center justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgemlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjA1LDIxNCwyMjUsMC40KSIgc3Ryb2tlLXdpZHRoPSIxIj48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMiIvPjwvc3ZnPg==')]">
                   {/* Ambient Spotlight */}
                   <div className={`absolute -inset-[50%] bg-gradient-to-br ${activeFeature.color} opacity-20 blur-3xl transition-colors duration-700`} />
                   
                   {/* Dynamic Content Frame */}
                   <div key={activeFeature.id} className="relative z-10 w-full max-w-[240px] aspect-[4/5] bg-[#F8F7FB] shadow-clayPressed rounded-[32px] p-2 flex flex-col animate-in zoom-in-95 fade-in duration-500">
                      <div className="w-full h-6 rounded-t-[20px] flex justify-center items-center gap-1.5 shrink-0 bg-[#E8E6EF] opacity-50 mb-2">
                         <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
                      </div>
                      
                      <div className="flex-1 w-full bg-white shadow-sm rounded-2xl overflow-hidden pt-2 border border-slate-100">
                        {activeFeature.mockup}
                      </div>
                   </div>
                </div>

                {/* Content Half */}
                <div className="w-full sm:w-7/12 p-8 sm:p-10 lg:p-12 flex flex-col justify-center h-full relative z-10 bg-white">
                   <div key={`text-${activeFeature.id}`} className="animate-in slide-in-from-right-8 fade-in duration-500">
                     <span className={`inline-block text-[10px] sm:text-xs font-black tracking-widest uppercase mb-3 bg-clip-text text-transparent bg-gradient-to-r ${activeFeature.color}`}>
                       {activeFeature.subtitle}
                     </span>
                     <h2 className="font-heading text-3xl sm:text-4xl font-black text-clay-foreground leading-[1.1] mb-6">
                       {activeFeature.title}
                     </h2>
                     <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed mb-8">
                       {activeFeature.description}
                     </p>
                     
                     <div className="space-y-4">
                       {activeFeature.highlights.map((hilite, idx) => (
                         <div key={idx} className="flex items-start gap-3">
                           <div className={`mt-0.5 w-6 h-6 rounded-full bg-gradient-to-br ${activeFeature.color} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                             <CheckCircle2 className="w-3.5 h-3.5" />
                           </div>
                           <span className="font-bold text-slate-700">{hilite}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                </div>

             </ClayCard>
          </div>
          
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </main>
  );
}
