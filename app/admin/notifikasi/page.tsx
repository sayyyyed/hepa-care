"use client";

import React from "react";
import { Bell, MessageSquare, AlertCircle, UserPlus, Check, MoreHorizontal } from "lucide-react";

export default function NotificationsPage() {
  const notifications = [
    { id: 1, type: "alert", title: "Pasien Risiko Tinggi", desc: "Budi Santoso menunjukkan penurunan kondisi pada jurnal pagi ini.", time: "10 menit yang lalu", read: false },
    { id: 2, type: "message", title: "Pesan Baru", desc: "Siti Aminah mengirimkan lampiran hasil cek lab terbaru.", time: "1 jam yang lalu", read: false },
    { id: 3, type: "request", title: "Permintaan Konsultasi", desc: "Anto Wijaya ingin menjadwalkan ulang janji temu besok.", time: "3 jam yang lalu", read: true },
    { id: 4, type: "system", title: "Update Artikel", desc: "Artikel 'Mengenal Gejala Awal...' telah mencapai 1,000 pembaca.", time: "5 jam yang lalu", read: true },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Notifikasi</h1>
        <button className="text-sm font-bold text-indigo-600 hover:underline">Tandai semua dibaca</button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
         <div className="divide-y divide-slate-100">
            {notifications.map((n) => (
              <div key={n.id} className={`p-6 flex gap-4 hover:bg-slate-50 transition-colors relative group ${!n.read ? 'bg-indigo-50/20' : ''}`}>
                 {!n.read && <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600"></div>}
                 
                 <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                    n.type === 'alert' ? 'bg-red-100 text-red-600' : 
                    n.type === 'message' ? 'bg-blue-100 text-blue-600' : 
                    'bg-slate-100 text-slate-600'
                 }`}>
                    {n.type === 'alert' && <AlertCircle size={24} />}
                    {n.type === 'message' && <MessageSquare size={24} />}
                    {n.type === 'request' && <UserPlus size={24} />}
                    {n.type === 'system' && <Bell size={24} />}
                 </div>

                 <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                       <h3 className={`text-sm font-bold ${!n.read ? 'text-slate-900' : 'text-slate-700'}`}>{n.title}</h3>
                       <span className="text-[10px] font-bold text-slate-400 uppercase">{n.time}</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{n.desc}</p>
                    
                    {!n.read && (
                      <div className="mt-3 flex gap-2">
                         <button className="px-3 py-1 bg-indigo-600 text-white rounded text-xs font-bold hover:bg-indigo-700 transition-colors">Lihat Detail</button>
                         <button className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded text-xs font-bold hover:bg-slate-50 transition-colors">Abaikan</button>
                      </div>
                    )}
                 </div>

                 <button className="shrink-0 p-1 text-slate-300 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-all">
                    <MoreHorizontal size={20} />
                 </button>
              </div>
            ))}
         </div>
         <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
            <button className="text-sm font-bold text-slate-400 hover:text-slate-600">Lihat Notifikasi Lama</button>
         </div>
      </div>
    </div>
  );
}
