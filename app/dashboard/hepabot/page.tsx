"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Send, 
  MoreVertical, 
  Paperclip, 
  Search, 
  User, 
  MessageSquare,
  Circle
} from "lucide-react";
import { BackgroundBlobs } from "../../../components/BackgroundBlobs";
import { ClayCard } from "../../../components/ClayCard";
import { ClayInput } from "../../../components/ClayInput";

export default function HepaBotPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Halo! Saya HepaBot, asisten kesehatan hati Anda. Ada yang bisa saya bantu hari ini?", sender: "bot" },
    { id: 2, text: "Bagaimana cara menjaga pola makan yang baik untuk liver?", sender: "user" },
    { id: 3, text: "Untuk menjaga fungsi hati yang sehat, disarankan untuk mengonsumsi makanan tinggi serat, sayuran hijau, dan mengurangi lemak jenuh serta gula berlebih.", sender: "bot" },
  ]);

  return (
    <main className="relative h-screen bg-clay-canvas overflow-hidden flex flex-col md:flex-row">
      <BackgroundBlobs />
      
      {/* Sidebar - History */}
      <aside className="w-full md:w-80 h-full bg-white/40 backdrop-blur-xl border-r border-white/20 flex flex-col z-20">
        <header className="p-6 flex items-center justify-between border-b border-white/20">
          <h1 className="font-heading text-2xl font-black text-clay-foreground">HepaBot</h1>
          <div className="flex gap-4 text-clay-muted">
            <Search size={20} />
            <MoreVertical size={20} />
          </div>
        </header>
        
        <div className="flex-grow overflow-y-auto no-scrollbar">
           {[
             { title: "Tips Diet", preview: "Sama-sama! Jangan lupa...", time: "14:20" },
             { title: "Analisis Gejala", preview: "Berdasarkan data anda...", time: "Kemarin" },
             { title: "Jadwal Kontrol", preview: "Ingatkan saya...", time: "12 Apr" },
           ].map((item, i) => (
             <div key={i} className={`p-4 flex gap-4 cursor-pointer hover:bg-white/40 transition-colors ${i === 0 ? 'bg-white/60' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-clay-accent/10 flex items-center justify-center text-clay-accent shrink-0">
                   <MessageSquare size={24} />
                </div>
                <div className="flex-grow min-w-0">
                   <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-clay-foreground truncate">{item.title}</span>
                      <span className="text-[10px] font-bold text-clay-muted shrink-0">{item.time}</span>
                   </div>
                   <p className="text-sm text-clay-muted truncate">{item.preview}</p>
                </div>
             </div>
           ))}
        </div>
      </aside>

      {/* Main Chat Area */}
      <section className="flex-grow h-full flex flex-col relative z-10">
        {/* Chat Header */}
        <header className="p-4 bg-white/60 backdrop-blur-xl border-b border-white/20 flex items-center justify-between shadow-sm">
           <div className="flex items-center gap-4">
              <Link href="/dashboard" className="md:hidden p-2 rounded-full hover:bg-clay-accent/5"><ArrowLeft size={20} /></Link>
              <div className="w-10 h-10 rounded-full bg-clay-accent shadow-clayButton flex items-center justify-center text-white">
                 <MessageSquare size={20} />
              </div>
              <div>
                 <h2 className="font-bold text-clay-foreground leading-none">HepaBot</h2>
                 <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-clay-success animate-pulse" />
                    <span className="text-[10px] font-black text-clay-success">AKTIF</span>
                 </div>
              </div>
           </div>
           <div className="flex gap-4 text-clay-muted">
              <Search size={20} />
              <MoreVertical size={20} />
           </div>
        </header>

        {/* Scrollable Messages */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6 no-scrollbar">
           {messages.map((msg) => (
             <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[80%] p-5 rounded-[24px] shadow-clayCard backdrop-blur-md ${msg.sender === 'user' ? 'bg-clay-accent text-white' : 'bg-white/80 text-clay-foreground'}`}>
                   <p className="font-medium leading-relaxed">{msg.text}</p>
                </div>
             </div>
           ))}
           <div className="flex justify-start">
              <div className="p-4 rounded-[20px] bg-white/40 flex gap-1.5">
                 <div className="w-2 h-2 rounded-full bg-clay-accent/40 animate-bounce" />
                 <div className="w-2 h-2 rounded-full bg-clay-accent/40 animate-bounce [animation-delay:0.2s]" />
                 <div className="w-2 h-2 rounded-full bg-clay-accent/40 animate-bounce [animation-delay:0.4s]" />
              </div>
           </div>
        </div>

        {/* Input Area */}
        <footer className="p-6 bg-white/60 backdrop-blur-xl border-t border-white/20">
           <div className="mx-auto max-w-4xl flex gap-4 items-center">
              <button className="p-4 rounded-2xl bg-white shadow-clayCard text-clay-muted hover:text-clay-accent transition-colors"><Paperclip size={20} /></button>
              <div className="flex-grow">
                 <ClayInput placeholder="Ketik pesan..." className="!py-4" />
              </div>
              <button className="p-4 rounded-2xl bg-clay-accent text-white shadow-clayButton hover:scale-105 active:scale-95 transition-all"><Send size={20} /></button>
           </div>
        </footer>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </main>
  );
}
