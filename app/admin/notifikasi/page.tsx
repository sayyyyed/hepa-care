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
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-heading font-black text-clay-foreground tracking-tight">Notifikasi</h1>
        <button className="text-xs font-heading font-black text-clay-accent bg-white shadow-clayCard px-6 py-2 rounded-xl transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-widest">Tandai semua dibaca</button>
      </div>

      <div className="bg-white/70 backdrop-blur-xl rounded-[40px] border-none shadow-clayDeep overflow-hidden">
         <div className="divide-y divide-clay-muted/5">
            {notifications.map((n) => (
              <div key={n.id} className={`p-8 flex gap-6 hover:bg-white transition-all relative group cursor-default ${!n.read ? 'bg-clay-accent/[0.03]' : ''}`}>
                 {!n.read && <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-clay-accent rounded-r-full shadow-clayButton"></div>}
                 
                 <div className={`shrink-0 w-16 h-16 rounded-[24px] flex items-center justify-center shadow-clayCard group-hover:scale-110 transition-transform ${
                    n.type === 'alert' ? 'bg-red-50 text-red-600' : 
                    n.type === 'message' ? 'bg-blue-50 text-blue-600' : 
                    'bg-white text-clay-muted'
                 }`}>
                    {n.type === 'alert' && <AlertCircle size={28} />}
                    {n.type === 'message' && <MessageSquare size={28} />}
                    {n.type === 'request' && <UserPlus size={28} />}
                    {n.type === 'system' && <Bell size={28} />}
                 </div>

                 <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                       <h3 className={`text-base font-heading font-black ${!n.read ? 'text-clay-foreground' : 'text-clay-muted'}`}>{n.title}</h3>
                       <span className="text-[10px] font-heading font-black text-clay-muted/40 uppercase tracking-widest">{n.time}</span>
                    </div>
                    <p className="text-base font-sans font-medium text-clay-muted leading-relaxed">{n.desc}</p>
                    
                    {!n.read && (
                      <div className="mt-5 flex gap-4">
                         <button className="px-6 py-2.5 bg-gradient-to-br from-clay-accent to-clay-accent-alt text-white rounded-xl font-heading font-black text-[10px] uppercase tracking-widest shadow-clayButton hover:shadow-clayButtonHover transition-all active:scale-95">Lihat Detail</button>
                         <button className="px-6 py-2.5 bg-white border border-clay-muted/5 text-clay-muted rounded-xl font-heading font-black text-[10px] uppercase tracking-widest shadow-sm hover:shadow-clayCard hover:text-clay-foreground transition-all active:scale-95">Abaikan</button>
                      </div>
                    )}
                 </div>

                 <button className="shrink-0 p-2 text-clay-muted/20 hover:text-clay-accent hover:bg-clay-canvas/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all active:scale-90 h-fit">
                    <MoreHorizontal size={22} />
                 </button>
              </div>
            ))}
         </div>
         <div className="p-6 bg-clay-canvas/30 backdrop-blur-md border-t border-clay-muted/5 text-center">
            <button className="text-[10px] font-heading font-black text-clay-muted/50 hover:text-clay-accent transition-colors uppercase tracking-widest flex items-center gap-2 mx-auto">
               Lihat Notifikasi Lama
               <ChevronRight size={14} />
            </button>
         </div>
      </div>
    </div>
  );
}
