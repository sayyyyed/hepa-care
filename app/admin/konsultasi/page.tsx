"use client";

import React, { useState } from "react";
import { 
  Search, 
  Send, 
  Paperclip, 
  Smile, 
  MoreVertical, 
  Phone, 
  Video, 
  CheckCheck,
  Circle
} from "lucide-react";

export default function ConsultationPage() {
  const [activeChat, setActiveChat] = useState(1);
  const [message, setMessage] = useState("");

  const chatList = [
    { id: 1, name: "Budi Santoso", lastMsg: "Dok, perut saya terasa tidak nyaman...", time: "09:41", unread: 2, online: true },
    { id: 2, name: "Siti Aminah", lastMsg: "Terima kasih banyak dok informasinya.", time: "Kemarin", unread: 0, online: false },
    { id: 3, name: "Anto Wijaya", lastMsg: "Hasil labnya sudah saya upload ya dok.", time: "Kemarin", unread: 0, online: true },
    { id: 4, name: "Rina Kartika", lastMsg: "Apakah obat ini boleh diminum sebelum makan?", time: "Senin", unread: 0, online: false },
  ];

  const messages = [
    { id: 1, sender: "patient", text: "Selamat pagi dok, saya ingin bertanya tentang hasil pemeriksaan kemarin.", time: "09:30" },
    { id: 2, sender: "doctor", text: "Selamat pagi Pak Budi. Silakan, bagian mana yang ingin ditanyakan?", time: "09:32" },
    { id: 3, sender: "patient", text: "Dok, perut saya terasa tidak nyaman dan sedikit kembung setelah minum obat yang baru.", time: "09:41" },
  ];

  return (
    <div className="h-[calc(100vh-180px)] flex bg-white/70 backdrop-blur-xl rounded-[40px] border-none shadow-clayDeep overflow-hidden animate-clay-float-slow">
      {/* Left Column: Chat List */}
      <div className="w-80 border-r border-clay-muted/5 flex flex-col bg-white/30 backdrop-blur-md">
        <div className="p-6 border-b border-clay-muted/5">
           <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-clay-muted/50 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Cari percakapan..." 
                className="w-full bg-[#EFEBF5] border-none rounded-2xl py-3 pl-12 pr-4 text-sm text-clay-foreground shadow-clayPressed focus:outline-none focus:ring-4 focus:ring-clay-accent/10 focus:bg-white transition-all font-sans placeholder:text-clay-muted/50"
              />
           </div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
           {chatList.map((chat) => (
             <div 
                key={chat.id}
                onClick={() => setActiveChat(chat.id)}
                className={`p-4 flex gap-4 cursor-pointer rounded-[24px] transition-all duration-300 relative group ${
                  activeChat === chat.id 
                    ? "bg-white text-clay-accent shadow-clayCard scale-[1.02]" 
                    : "text-clay-muted hover:bg-white/50 hover:text-clay-foreground hover:-translate-y-1 hover:shadow-clayCard"
                } active:scale-[0.95] active:shadow-clayPressed`}
             >
                <div className="relative shrink-0">
                   <div className="w-14 h-14 rounded-2xl bg-white shadow-clayCard flex items-center justify-center border-2 border-white overflow-hidden group-hover:scale-110 transition-transform">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${chat.name}`} alt="" className="w-12 h-12" />
                   </div>
                   {chat.online && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm"></div>}
                </div>
                <div className="flex-1 min-w-0 py-1">
                   <div className="flex items-center justify-between">
                      <p className="text-sm font-heading font-black truncate">{chat.name}</p>
                      <span className="text-[10px] font-heading font-bold opacity-50">{chat.time}</span>
                   </div>
                   <p className="text-xs font-sans font-medium truncate mt-1 group-hover:text-clay-foreground transition-colors">{chat.lastMsg}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="shrink-0 flex items-center justify-center">
                     <span className="w-6 h-6 bg-gradient-to-br from-clay-accent to-clay-accent-alt text-white text-[10px] font-heading font-black rounded-full flex items-center justify-center shadow-clayButton group-hover:scale-110 transition-transform">{chat.unread}</span>
                  </div>
                )}
             </div>
           ))}
        </div>
      </div>

      {/* Right Column: Chat Window */}
      <div className="flex-1 flex flex-col bg-clay-canvas/20 backdrop-blur-sm">
        {/* Chat Header */}
        <div className="p-5 bg-white/60 backdrop-blur-xl border-b border-clay-muted/5 flex items-center justify-between shadow-sm">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-clayCard flex items-center justify-center border-2 border-white overflow-hidden">
                 <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${chatList.find(c => c.id === activeChat)?.name || 'User'}`} alt="" className="w-10 h-10" />
              </div>
              <div>
                 <p className="text-base font-heading font-black text-clay-foreground">{chatList.find(c => c.id === activeChat)?.name}</p>
                 <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    <p className="text-[10px] font-heading font-black text-clay-accent uppercase tracking-widest">Pasien Online</p>
                 </div>
              </div>
           </div>
           <div className="flex items-center gap-2">
              <button className="p-3 text-clay-muted bg-white hover:text-clay-accent hover:shadow-clayCard rounded-xl transition-all active:scale-90"><Phone size={22} /></button>
              <button className="p-3 text-clay-muted bg-white hover:text-clay-accent hover:shadow-clayCard rounded-xl transition-all active:scale-90"><Video size={22} /></button>
              <button className="p-3 text-clay-muted bg-white hover:text-clay-foreground hover:shadow-clayCard rounded-xl transition-all active:scale-90"><MoreVertical size={22} /></button>
           </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-10 space-y-8 scroll-smooth">
           <div className="flex justify-center">
              <span className="px-5 py-2 bg-white/50 backdrop-blur-md text-clay-muted text-[10px] font-heading font-black rounded-full uppercase tracking-widest shadow-sm">Percakapan Hari Ini</span>
           </div>

           {messages.map((msg) => (
             <div key={msg.id} className={`flex ${msg.sender === 'doctor' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
                <div className={`group flex flex-col ${msg.sender === 'doctor' ? 'items-end' : 'items-start'} max-w-[75%]`}>
                   <div className={`px-6 py-4 rounded-[28px] text-base font-sans font-medium shadow-clayCard relative transition-all duration-300 hover:-translate-y-1 ${
                      msg.sender === 'doctor' 
                        ? 'bg-gradient-to-br from-clay-accent to-clay-accent-alt text-white rounded-tr-sm shadow-clayButton' 
                        : 'bg-white text-clay-foreground rounded-tl-sm border border-white'
                   }`}>
                      {msg.text}
                   </div>
                   <div className="flex items-center gap-3 mt-3 px-2">
                      <span className="text-[10px] font-heading font-black text-clay-muted uppercase tracking-widest opacity-60">{msg.time}</span>
                      {msg.sender === 'doctor' && <CheckCheck size={16} className="text-clay-accent drop-shadow-sm" />}
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white/60 backdrop-blur-xl border-t border-clay-muted/5">
           <div className="flex items-center gap-5">
              <button className="p-4 bg-white text-clay-muted hover:text-clay-accent hover:shadow-clayCard rounded-2xl transition-all active:scale-90 shadow-sm"><Paperclip size={22} /></button>
              <div className="flex-1 relative group">
                 <input 
                    type="text" 
                    placeholder="Tulis pesan untuk pasien..." 
                    className="w-full bg-[#EFEBF5] border-none rounded-3xl py-4 px-8 text-base text-clay-foreground shadow-clayPressed focus:outline-none focus:ring-8 focus:ring-clay-accent/5 focus:bg-white transition-all pr-16 font-sans placeholder:text-clay-muted/40"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && setMessage("")}
                 />
                 <button className="absolute right-4 top-1/2 -translate-y-1/2 text-clay-muted/40 hover:text-clay-accent transition-colors">
                    <Smile size={24} />
                 </button>
              </div>
              <button 
                onClick={() => setMessage("")}
                className="p-5 bg-gradient-to-br from-clay-accent to-clay-accent-alt text-white rounded-full hover:shadow-clayButtonHover hover:-translate-y-1 transition-all shadow-clayButton active:scale-[0.85] active:shadow-clayPressed group"
              >
                 <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
