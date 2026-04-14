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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800">Selamat pagi, Dr. Sarah!</h1>
          <p className="text-sm text-slate-500 mt-1">Berikut adalah ringkasan klinis Anda hari ini.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20 text-sm">
            <Plus size={18} />
            <span>Tambah Artikel</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-xl ${stat.color} text-white`}>
                <stat.icon size={24} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                stat.trend.startsWith('+') ? "text-emerald-600 bg-emerald-50" : stat.trend.startsWith('-') ? "text-red-600 bg-red-50" : "text-slate-500 bg-slate-50"
              }`}>
                {stat.trend}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-slate-500 text-sm font-medium">{stat.label}</h3>
              <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-800">Aktivitas Terbaru</h2>
              <button className="text-indigo-600 text-sm font-medium hover:underline">Lihat semua</button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border border-slate-50 hover:border-indigo-100 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activity.patient}`} alt="" className="w-8 h-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 truncate sm:whitespace-normal">
                      {activity.patient} <span className="font-normal text-slate-500">{activity.action}</span>
                    </p>
                    <p className="text-[10px] md:text-xs text-slate-400 mt-1">{activity.time}</p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 shrink-0">
                    <span className={`hidden xs:block text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                      activity.type === 'update' ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"
                    }`}>
                      {activity.status}
                    </span>
                    <button className="opacity-100 sm:opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-indigo-600 transition-all">
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 h-full">
            <h2 className="text-lg font-bold text-slate-800 mb-6">Aksi Cepat</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all text-left">
                <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Mulai Konsultasi</p>
                  <p className="text-xs text-slate-500">Hubungi pasien via chat</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all text-left">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <Eye size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Lihat Pasien</p>
                  <p className="text-xs text-slate-500">Cek daftar pasien aktif</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all text-left">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                  <Plus size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Buat Info Kesehatan</p>
                  <p className="text-xs text-slate-500">Tulis artikel edukasi baru</p>
                </div>
              </button>
            </div>

            <div className="mt-8 p-4 bg-indigo-600 rounded-xl text-white relative overflow-hidden">
               <div className="relative z-10">
                 <p className="text-xs font-medium opacity-80">Update Sistem</p>
                 <p className="text-sm font-bold mt-1">AI Analisis Risiko v2.4 telah aktif</p>
                 <button className="mt-3 text-xs bg-white text-indigo-600 px-3 py-1.5 rounded-lg font-bold">Pelajari</button>
               </div>
               <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white opacity-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
