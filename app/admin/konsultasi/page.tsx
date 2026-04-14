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
    <div className="h-[calc(100vh-160px)] flex bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      {/* Left Column: Chat List */}
      <div className="w-80 border-r border-slate-100 flex flex-col">
        <div className="p-4 border-b border-slate-100">
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Cari percakapan..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
           </div>
        </div>
        <div className="flex-1 overflow-y-auto">
           {chatList.map((chat) => (
             <div 
                key={chat.id}
                onClick={() => setActiveChat(chat.id)}
                className={`p-4 flex gap-3 cursor-pointer hover:bg-slate-50 transition-colors ${activeChat === chat.id ? "bg-indigo-50/50 border-r-4 border-indigo-600" : ""}`}
             >
                <div className="relative shrink-0">
                   <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${chat.name}`} alt="" />
                   </div>
                   {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>}
                </div>
                <div className="flex-1 min-w-0">
                   <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-slate-800 truncate">{chat.name}</p>
                      <span className="text-[10px] text-slate-400">{chat.time}</span>
                   </div>
                   <p className="text-xs text-slate-500 truncate mt-1">{chat.lastMsg}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="shrink-0 flex items-center justify-center">
                     <span className="w-5 h-5 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">{chat.unread}</span>
                  </div>
                )}
             </div>
           ))}
        </div>
      </div>

      {/* Right Column: Chat Window */}
      <div className="flex-1 flex flex-col bg-slate-50/30">
        {/* Chat Header */}
        <div className="p-4 bg-white border-b border-slate-100 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                 <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${chatList.find(c => c.id === activeChat)?.name || 'User'}`} alt="" />
              </div>
              <div>
                 <p className="text-sm font-bold text-slate-800">{chatList.find(c => c.id === activeChat)?.name}</p>
                 <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Online</p>
                 </div>
              </div>
           </div>
           <div className="flex items-center gap-1">
              <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"><Phone size={20} /></button>
              <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"><Video size={20} /></button>
              <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"><MoreVertical size={20} /></button>
           </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
           <div className="flex justify-center">
              <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-widest">Hari Ini</span>
           </div>

           {messages.map((msg) => (
             <div key={msg.id} className={`flex ${msg.sender === 'doctor' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] ${msg.sender === 'doctor' ? 'order-2 ml-3' : 'order-1 mr-3'}`}>
                   {/* Avatar could go here if needed */}
                </div>
                <div className={`group flex flex-col ${msg.sender === 'doctor' ? 'items-end' : 'items-start'}`}>
                   <div className={`px-4 py-3 rounded-2xl text-sm shadow-sm ${
                      msg.sender === 'doctor' 
                        ? 'bg-indigo-600 text-white rounded-tr-none' 
                        : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                   }`}>
                      {msg.text}
                   </div>
                   <div className="flex items-center gap-2 mt-1 px-1">
                      <span className="text-[10px] text-slate-400 font-semibold uppercase">{msg.time}</span>
                      {msg.sender === 'doctor' && <CheckCheck size={14} className="text-indigo-500" />}
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100">
           <div className="flex items-center gap-3">
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><Paperclip size={20} /></button>
              <div className="flex-1 relative">
                 <input 
                    type="text" 
                    placeholder="Tulis pesan untuk pasien..." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-full py-3 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all pr-12"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && setMessage("")}
                 />
                 <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors">
                    <Smile size={20} />
                 </button>
              </div>
              <button 
                onClick={() => setMessage("")}
                className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
              >
                 <Send size={20} />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
