"use client";

import React from "react";
import { 
  Users, 
  MessageSquare, 
  AlertTriangle, 
  FileText, 
  ArrowUpRight, 
  Plus, 
  Eye,
  MessageCircle
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Pasien Aktif", value: "1,284", icon: Users, color: "bg-blue-500", trend: "+12%" },
    { label: "Konsultasi Hari Ini", value: "24", icon: MessageSquare, color: "bg-indigo-500", trend: "+5%" },
    { label: "Risiko Tinggi", value: "18", icon: AlertTriangle, color: "bg-red-500", trend: "-2%" },
    { label: "Artikel Dipublikasi", value: "42", icon: FileText, color: "bg-emerald-500", trend: "0%" },
  ];

  const recentActivity = [
    { id: 1, type: "update", patient: "Budi Santoso", action: "memperbarui jurnal kesehatan", time: "5 menit yang lalu", status: "Perlu ditinjau" },
    { id: 2, type: "message", patient: "Siti Aminah", action: "mengirim pesan baru", time: "12 menit yang lalu", status: "Belum dibaca" },
    { id: 3, type: "reminder", patient: "Anto Wijaya", action: "jadwal kontrol rutin", time: "Besok, 09:00", status: "Mendatang" },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-black text-clay-foreground tracking-tight">Selamat pagi, Dr. Sarah!</h1>
          <p className="text-clay-muted font-medium mt-1">Berikut adalah ringkasan klinis Anda hari ini.</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-gradient-to-br from-[#A78BFA] to-clay-accent text-white px-6 py-3 rounded-[20px] font-heading font-bold hover:-translate-y-1 transition-all shadow-clayButton hover:shadow-clayButtonHover active:scale-[0.92] active:shadow-clayPressed">
            <Plus size={20} />
            <span>Tambah Artikel</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border-none shadow-clayCard hover:-translate-y-2 hover:shadow-clayButtonHover transition-all duration-500 group cursor-default">
            <div className="flex items-start justify-between">
              <div className={`p-4 rounded-2xl ${stat.color} text-white shadow-clayButton group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon size={28} />
              </div>
              <span className={`text-xs font-heading font-black px-3 py-1.5 rounded-full shadow-sm ${
                stat.trend.startsWith('+') ? "text-emerald-600 bg-emerald-50" : stat.trend.startsWith('-') ? "text-red-600 bg-red-50" : "text-clay-muted bg-clay-canvas"
              }`}>
                {stat.trend}
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-clay-muted text-sm font-heading font-bold uppercase tracking-widest">{stat.label}</h3>
              <p className="text-3xl font-heading font-black text-clay-foreground mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/70 backdrop-blur-xl rounded-[32px] border-none shadow-clayCard p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-heading font-black text-clay-foreground">Aktivitas Terbaru</h2>
              <button className="text-clay-accent text-sm font-heading font-bold hover:underline underline-offset-4">Lihat semua</button>
            </div>
            <div className="space-y-5">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-5 p-5 rounded-[24px] bg-white/40 border border-white/50 hover:bg-white hover:-translate-y-1 hover:shadow-clayCard transition-all duration-300 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-clayCard flex items-center justify-center shrink-0 border-2 border-white overflow-hidden group-hover:scale-110 transition-transform">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activity.patient}`} alt="" className="w-12 h-12" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-heading font-bold text-clay-foreground">
                      {activity.patient} <span className="font-sans font-medium text-clay-muted">{activity.action}</span>
                    </p>
                    <p className="text-xs font-sans font-bold text-clay-muted/60 mt-1 uppercase tracking-wider">{activity.time}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-heading font-black uppercase tracking-widest px-3 py-1.5 rounded-xl shadow-sm ${
                      activity.type === 'update' ? "bg-amber-50 text-amber-600 border border-amber-100" : "bg-blue-50 text-blue-600 border border-blue-100"
                    }`}>
                      {activity.status}
                    </span>
                    <button className="opacity-0 group-hover:opacity-100 p-2 text-clay-muted hover:text-clay-accent transition-all hover:bg-clay-accent/10 rounded-xl">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-8">
          <div className="bg-white/70 backdrop-blur-xl rounded-[32px] border-none shadow-clayCard p-8 h-full">
            <h2 className="text-xl font-heading font-black text-clay-foreground mb-8">Aksi Cepat</h2>
            <div className="space-y-4">
              <button className="w-full flex items-center gap-4 p-5 rounded-[24px] bg-white/50 border border-white/80 hover:bg-white hover:-translate-y-1 hover:shadow-clayCard transition-all duration-300 text-left active:scale-[0.95] active:shadow-clayPressed group">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm font-heading font-black text-clay-foreground">Mulai Konsultasi</p>
                  <p className="text-xs font-sans font-medium text-clay-muted">Hubungi pasien via chat</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-4 p-5 rounded-[24px] bg-white/50 border border-white/80 hover:bg-white hover:-translate-y-1 hover:shadow-clayCard transition-all duration-300 text-left active:scale-[0.95] active:shadow-clayPressed group">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  <Eye size={24} />
                </div>
                <div>
                  <p className="text-sm font-heading font-black text-clay-foreground">Lihat Pasien</p>
                  <p className="text-xs font-sans font-medium text-clay-muted">Cek daftar pasien aktif</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-4 p-5 rounded-[24px] bg-white/50 border border-white/80 hover:bg-white hover:-translate-y-1 hover:shadow-clayCard transition-all duration-300 text-left active:scale-[0.95] active:shadow-clayPressed group">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  <Plus size={24} />
                </div>
                <div>
                  <p className="text-sm font-heading font-black text-clay-foreground">Buat Info Kesehatan</p>
                  <p className="text-xs font-sans font-medium text-clay-muted">Tulis artikel edukasi baru</p>
                </div>
              </button>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-br from-clay-accent to-clay-accent-alt rounded-3xl text-white relative overflow-hidden shadow-clayDeep group">
               <div className="relative z-10">
                 <p className="text-[10px] font-heading font-black uppercase tracking-widest opacity-80">Update Sistem</p>
                 <p className="text-lg font-heading font-black mt-2 leading-tight">AI Analisis Risiko v2.4 telah aktif</p>
                 <button className="mt-6 text-xs font-heading font-black bg-white text-clay-accent px-5 py-2.5 rounded-xl shadow-clayButton hover:shadow-clayButtonHover transition-all active:scale-90">PELAJARI</button>
               </div>
               <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
