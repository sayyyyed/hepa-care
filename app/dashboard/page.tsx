"use client";

import React, { useState } from "react";
import { ClayCard } from "../../components/ClayCard";
import { ClayButton } from "../../components/ClayButton";
import { BackgroundBlobs } from "../../components/BackgroundBlobs";
import {
  Home,
  Search,
  BookOpen,
  GraduationCap,
  User,
  Activity,
  CheckCircle2,
  Plus,
  MessageSquare,
  ChevronRight,
  TrendingDown,
  Calendar,
  Filter,
  LogOut,
  MapPin,
  Bell,
  Stethoscope,
  Heart
} from "lucide-react";
import { useRouter } from "next/navigation";
import { FloatingActionButton } from "../../components/FloatingActionButton";

type Tab = "Beranda" | "Cek" | "Jurnal" | "Edukasi" | "Profil";

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("Beranda");
  const [missions, setMissions] = useState([
    { id: 1, text: "Minum air (8/8 gelas)", done: true },
    { id: 2, text: "Berjalan 30 menit", done: false },
    { id: 3, text: "Minum vitamin hati", done: false },
  ]);

  const toggleMission = (id: number) => {
    setMissions(missions.map(m => m.id === id ? { ...m, done: !m.done } : m));
  };

  return (
    <main className="relative min-h-screen bg-clay-canvas pb-28 overflow-x-hidden">
      <BackgroundBlobs />

      {/* Floating Action Button */}
      {activeTab === "Beranda" && (
        <FloatingActionButton
          icon={MessageSquare}
          label="Tanya HepaBot"
          onClick={() => router.push('/dashboard/hepabot')}
        />
      )}

      {activeTab === "Jurnal" && (
        <FloatingActionButton
          icon={Plus}
          label="Tulis Jurnal"
          onClick={() => router.push('/dashboard/jurnal')}
        />
      )}

      {/* Scrollable Content Area */}
      <div className="mx-auto max-w-lg px-4 pt-10">

        {/* Render Active Tab Content */}
        {activeTab === "Beranda" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Greeting Section */}
            <div className="mb-8 pl-2">
              <h1 className="font-heading text-3xl font-black text-clay-foreground">Halo, Pengguna 👋</h1>
              <p className="font-medium text-clay-muted mt-1">Kondisi kesehatan hatimu hari ini cukup baik 😊</p>
            </div>

            {/* Risk Summary Hero Card */}
            <ClayCard className="mb-8 !p-8 bg-white/80 backdrop-blur-xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-clay-foreground">Skor Risiko Hati</h3>
                  <p className="text-sm font-bold text-clay-muted">Berdasarkan AI Analisis</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-600 text-xs font-black">SEDANG</div>
              </div>

              <div className="relative w-full h-4 bg-[#EFEBF5] rounded-full shadow-clayPressed overflow-hidden mb-4">
                <div className="absolute h-full bg-gradient-to-r from-clay-success to-amber-500 w-[60%]" />
              </div>

              <div className="flex justify-between text-xs font-black text-clay-muted px-1">
                <span>RENDAH</span>
                <span>TINGGI</span>
              </div>

              <ClayButton variant="ghost" size="sm" className="mt-6 w-full gap-2 text-clay-accent">
                Lihat detail analisis <ChevronRight size={16} />
              </ClayButton>
            </ClayCard>

            {/* Daily Mission / Reminder */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4 px-2">
                <h3 className="font-heading text-xl font-bold">Misi Hari Ini</h3>
                <span className="text-xs font-black text-clay-accent bg-clay-accent/10 px-3 py-1 rounded-full">EST. 7 HARI 🔥</span>
              </div>
              <div className="space-y-4">
                {missions.map(m => (
                  <button
                    key={m.id}
                    onClick={() => toggleMission(m.id)}
                    className="w-full flex items-center gap-4 bg-white/70 p-5 rounded-[24px] shadow-clayCard backdrop-blur-md transition-all active:scale-[0.98]"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${m.done ? 'bg-clay-success shadow-clayButton' : 'bg-[#EFEBF5] shadow-clayPressed'}`}>
                      {m.done && <CheckCircle2 className="h-6 w-6 text-white" />}
                    </div>
                    <span className={`font-bold transition-all ${m.done ? 'text-clay-muted line-through' : 'text-clay-foreground'}`}>{m.text}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Insight Cards (Horizontal) */}
            <div className="mb-14 -mx-4">
              <div className="px-6 mb-4">
                <h3 className="font-heading text-xl font-bold">Insight Cepat</h3>
              </div>
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-4 no-scrollbar">
                <div className="snap-center shrink-0 w-64 bg-white/60 p-6 rounded-[32px] shadow-clayCard backdrop-blur-md">
                  <UtensilsIcon className="h-8 w-8 text-clay-accent mb-4" />
                  <p className="font-bold text-clay-foreground leading-snug">"Pola makanmu mulai membaik minggu ini!"</p>
                </div>
                <div className="snap-center shrink-0 w-64 bg-white/60 p-6 rounded-[32px] shadow-clayCard backdrop-blur-md">
                  <ActivityIcon className="h-8 w-8 text-clay-success mb-4" />
                  <p className="font-bold text-clay-foreground leading-snug">"Sepertinya kamu bisa lebih aktif hari ini 😊"</p>
                </div>
                <div className="snap-center shrink-0 w-64 bg-white/60 p-6 rounded-[32px] shadow-clayCard backdrop-blur-md">
                  <TrendingDown className="h-8 w-8 text-clay-tertiary mb-4" />
                  <p className="font-bold text-clay-foreground leading-snug">"Kondisi rileks membantu fungsi detoks hati."</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Cek" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 pl-2">
              <h1 className="font-heading text-3xl font-black text-clay-foreground">Cek Kesehatan</h1>
              <p className="font-medium text-clay-muted mt-1">Analisis mendalam untuk kondisi hatimu.</p>
            </div>

            <div className="space-y-6">
              <ClayCard className="group cursor-pointer" onClick={() => router.push('/register')}>
                <div className="flex gap-6 items-center">
                  <div className="w-20 h-20 shrink-0 rounded-[28px] bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] flex items-center justify-center shadow-clayButton group-hover:scale-105 transition-transform">
                    <Activity className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-1">Cek Risiko Penyakit Hati</h3>
                    <p className="text-sm text-clay-muted font-medium">Evaluasi menyeluruh risiko hepatitis, fatty liver, dan sirosis.</p>
                  </div>
                </div>
                <ClayButton className="mt-8 w-full">Mulai Cek</ClayButton>
              </ClayCard>

              <ClayCard className="group cursor-pointer" onClick={() => router.push('/register')}>
                <div className="flex gap-6 items-center">
                  <div className="w-20 h-20 shrink-0 rounded-[28px] bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-clayButton group-hover:scale-105 transition-transform">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-1">Analisis Pola Makan</h3>
                    <p className="text-sm text-clay-muted font-medium">Rekomendasi nutrisi harian yang ramah untuk hati Anda.</p>
                  </div>
                </div>
                <ClayButton variant="secondary" className="mt-8 w-full text-clay-success">Buka Analisis</ClayButton>
              </ClayCard>
            </div>
          </div>
        )}

        {activeTab === "Jurnal" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 pl-2 flex justify-between items-end">
              <div>
                <h1 className="font-heading text-3xl font-black text-clay-foreground">Jurnal Saya</h1>
                <p className="font-medium text-clay-muted mt-1">Catatan harian kesehatanmu.</p>
              </div>
              <div className="flex gap-2">
                <button className="p-3 rounded-2xl bg-white shadow-clayCard text-clay-muted"><Calendar size={20} /></button>
                <button className="p-3 rounded-2xl bg-white shadow-clayCard text-clay-muted"><Filter size={20} /></button>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { day: "Hari ini", text: "Merasa sedikit lelah di sore hari.", time: "16:20" },
                { day: "Kemarin", text: "Makan malam dengan salad dan protein tinggi.", time: "19:45" },
                { day: "12 Apr", text: "Selesai lari pagi 5km. Semangat!", time: "07:15" },
              ].map((item, i) => (
                <div key={i} onClick={() => router.push('/dashboard/jurnal')} className="bg-white/60 p-6 rounded-[32px] shadow-clayCard backdrop-blur-md flex flex-col cursor-pointer hover:bg-white/80 transition-all">
                  <div className="flex justify-between mb-2 pointer-events-none">
                    <span className="text-xs font-black text-clay-accent">{item.day}</span>
                    <span className="text-xs font-bold text-clay-muted">{item.time}</span>
                  </div>
                  <p className="font-bold text-clay-foreground pointer-events-none">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Edukasi" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 pl-2">
              <h1 className="font-heading text-3xl font-black text-clay-foreground">Edukasi</h1>
              <p className="font-medium text-clay-muted mt-1">Perluas pengetahuan tentang hatimu.</p>
            </div>

            <div className="flex w-full rounded-2xl bg-[#EFEBF5] px-6 py-4 shadow-clayPressed mb-8">
              <Search className="text-clay-muted mr-3" />
              <input type="text" placeholder="Cari artikel..." className="bg-transparent border-0 focus:ring-0 outline-none w-full font-medium" />
            </div>

            <div className="flex gap-3 overflow-x-auto no-scrollbar mb-8">
              {["Semua", "Pola Makan", "Penyakit", "Gaya Hidup"].map((cat, i) => (
                <button key={i} className={`shrink-0 px-5 py-2 rounded-xl font-bold transition-all ${i === 0 ? 'bg-clay-accent text-white shadow-clayButton' : 'bg-white shadow-clayCard text-clay-muted'}`}>{cat}</button>
              ))}
            </div>

            <div className="space-y-6">
              {[
                { title: "Manfaat Kunyit untuk Detoksifikasi Hati", cat: "Pola Makan", color: "from-amber-400 to-amber-600" },
                { title: "Tanda-tanda Awal Fatty Liver yang Sering Diabaikan", cat: "Penyakit", color: "from-red-400 to-red-600" },
                { title: "Pentingnya Tidur Teratur Bagi Kesehatan Hati", cat: "Gaya Hidup", color: "from-blue-400 to-blue-600" },
              ].map((art, i) => (
                <ClayCard key={i} className="!p-4 group cursor-pointer">
                  <div className="flex gap-4">
                    <div className={`w-24 h-24 shrink-0 rounded-2xl bg-gradient-to-br ${art.color} shadow-inner`} />
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] font-black text-clay-accent mb-1">{art.cat}</span>
                      <h4 className="font-bold text-clay-foreground leading-snug line-clamp-2">{art.title}</h4>
                    </div>
                  </div>
                </ClayCard>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Profil" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col items-center mb-10 pt-4">
              <div className="w-32 h-32 rounded-full bg-white shadow-clayDeep p-2 mb-6">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white text-4xl font-black shadow-inner">P</div>
              </div>
              <h1 className="font-heading text-3xl font-black text-clay-foreground">Pengguna Hebat</h1>
              <p className="font-bold text-clay-muted">Sehat Bersama HepaCare</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/60 p-4 rounded-3xl shadow-clayCard backdrop-blur-md text-center">
                <p className="text-2xl font-black text-clay-accent">170<span className="text-xs">cm</span></p>
                <p className="text-[10px] font-bold text-clay-muted">TINGGI</p>
              </div>
              <div className="bg-white/60 p-4 rounded-3xl shadow-clayCard backdrop-blur-md text-center">
                <p className="text-2xl font-black text-clay-accent">65<span className="text-xs">kg</span></p>
                <p className="text-[10px] font-bold text-clay-muted">BERAT</p>
              </div>
            </div>

            <div className="bg-white/60 rounded-[40px] shadow-clayCard backdrop-blur-md p-2 overflow-hidden mb-8">
              {[
                { icon: User, label: "Data Pribadi" },
                { icon: Activity, label: "Riwayat Kesehatan" },
                { icon: Bell, label: "Pengingat" },
                { icon: Stethoscope, label: "Konsultasi Medis" },
                { icon: MapPin, label: "Fasilitas Terdekat" },
              ].map((item, i) => (
                <button key={i} className="w-full flex items-center justify-between p-5 hover:bg-clay-accent/5 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-clayButton flex items-center justify-center text-clay-muted group-hover:text-clay-accent transition-colors">
                      <item.icon size={20} />
                    </div>
                    <span className="font-bold text-clay-foreground">{item.label}</span>
                  </div>
                  <ChevronRight className="text-clay-muted" size={20} />
                </button>
              ))}
            </div>

            <ClayButton variant="ghost" className="w-full gap-2 text-clay-accent-alt">
              <LogOut size={20} /> Keluar Akun
            </ClayButton>
          </div>
        )}
      </div>

      {/* Bottom Navigation Navbar */}
      <div className="fixed bottom-6 left-6 right-6 z-50 flex justify-center">
        <div className="bg-white/80 backdrop-blur-xl h-20 rounded-[40px] shadow-clayDeep flex items-center justify-around px-4 border border-white/40 w-full max-w-md">
          <NavBtn icon={Home} label="Beranda" active={activeTab === "Beranda"} onClick={() => setActiveTab("Beranda")} />
          <NavBtn icon={Search} label="Cek" active={activeTab === "Cek"} onClick={() => setActiveTab("Cek")} />
          <NavBtn icon={BookOpen} label="Jurnal" active={activeTab === "Jurnal"} onClick={() => setActiveTab("Jurnal")} />
          <NavBtn icon={GraduationCap} label="Edukasi" active={activeTab === "Edukasi"} onClick={() => setActiveTab("Edukasi")} />
          <NavBtn icon={User} label="Profil" active={activeTab === "Profil"} onClick={() => setActiveTab("Profil")} />
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

function NavBtn({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-14 h-14 transition-all duration-300 relative group active:scale-90`}
    >
      <div className={`transition-all duration-300 rounded-2xl flex items-center justify-center ${active ? 'bg-clay-accent text-white shadow-clayButton h-11 w-11 -translate-y-1' : 'text-clay-muted h-10 w-10'}`}>
        <Icon size={active ? 22 : 24} />
      </div>
      {!active && <span className="text-[10px] font-black text-clay-muted mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>}
      {active && <div className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-clay-accent" />}
    </button>
  );
}

// Sub-icons icons
function UtensilsIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>
}

function ActivityIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
}
