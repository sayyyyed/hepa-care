"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Search, 
  MoreHorizontal, 
  Edit3, 
  Trash2, 
  Bold, 
  Italic, 
  List,
  Type,
  Share
} from "lucide-react";
import { BackgroundBlobs } from "../../../components/BackgroundBlobs";
import { ClayCard } from "../../../components/ClayCard";

export default function JournalEditorPage() {
  const [selectedId, setSelectedId] = useState(1);
  const [notes, setNotes] = useState([
    { id: 1, title: "Lelah Hari Ini", content: "Merasa sedikit lelah di sore hari setelah aktivitas kantor. Sudah minum cukup air tapi mata terasa berat.", date: "13 Apr 2026" },
    { id: 2, title: "Menu Makan Siang Sehat", content: "Hari ini mencoba salad gandum dengan topping alpukat. Rasanya enak dan perut tidak begah.", date: "12 Apr 2026" },
    { id: 3, title: "Progres Olahraga", content: "Selesai lari pagi 5km. Semangat! Detak jantung terasa stabil.", date: "11 Apr 2026" },
  ]);

  const activeNote = notes.find(n => n.id === selectedId) || notes[0];

  const updateActiveNote = (field: 'title' | 'content', value: string) => {
    setNotes(notes.map(n => n.id === selectedId ? { ...n, [field]: value } : n));
  };

  return (
    <main className="relative h-screen bg-clay-canvas overflow-hidden flex flex-col md:flex-row">
      <BackgroundBlobs />
      
      {/* Sidebar - Notes List */}
      <aside className="w-full md:w-80 h-full bg-white/40 backdrop-blur-xl border-r border-white/20 flex flex-col z-20">
        <header className="p-8 pb-4 flex items-center justify-between">
           <Link href="/dashboard" className="p-2 rounded-full hover:bg-clay-accent/5"><ArrowLeft size={20} /></Link>
           <h1 className="font-heading text-3xl font-black text-clay-foreground underline-offset-8 decoration-clay-accent decoration-4">Journal</h1>
           <button className="p-2 rounded-full hover:bg-clay-accent/5 text-clay-accent"><Edit3 size={20} /></button>
        </header>

        <div className="p-6">
           <div className="flex w-full rounded-2xl bg-[#EFEBF5] px-4 py-3 shadow-clayPressed">
              <Search size={18} className="text-clay-muted mr-2" />
              <input type="text" placeholder="Search..." className="bg-transparent border-0 focus:ring-0 outline-none w-full text-sm font-bold" />
           </div>
        </div>
        
        <div className="flex-grow overflow-y-auto no-scrollbar px-4 pb-10">
           {notes.map((note) => (
             <div 
               key={note.id} 
               onClick={() => setSelectedId(note.id)}
               className={`p-5 rounded-[24px] mb-3 cursor-pointer transition-all duration-300 ${selectedId === note.id ? 'bg-clay-accent text-white shadow-clayButton' : 'bg-white/40 hover:bg-white/60 shadow-sm'}`}
             >
                <h3 className="font-bold truncate mb-1">{note.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                   <span className={`text-[10px] font-black ${selectedId === note.id ? 'text-white/80' : 'text-clay-accent'}`}>{note.date}</span>
                </div>
                <p className={`text-xs line-clamp-1 ${selectedId === note.id ? 'text-white/70' : 'text-clay-muted font-medium'}`}>{note.content}</p>
             </div>
           ))}
        </div>
      </aside>

      {/* Main Editor Area */}
      <section className="flex-grow h-full flex flex-col relative z-10">
        <header className="p-6 bg-white/40 backdrop-blur-xl flex items-center justify-between border-b border-white/10 shadow-sm">
           <div className="text-clay-muted">
              <span className="text-xs font-black uppercase tracking-widest">{activeNote.date}</span>
           </div>
           <div className="flex gap-4 text-clay-muted">
              <Share size={20} />
              <Trash2 size={20} />
              <MoreHorizontal size={20} />
           </div>
        </header>

        {/* Content Section */}
        <div className="flex-grow overflow-y-auto p-10 md:p-16 no-scrollbar">
           <div className="mx-auto max-w-2xl">
              <input 
                type="text" 
                value={activeNote.title}
                onChange={(e) => updateActiveNote('title', e.target.value)}
                className="w-full bg-transparent border-0 focus:ring-0 outline-none font-heading text-4xl md:text-5xl font-black text-clay-foreground mb-8 placeholder:text-clay-muted"
                placeholder="Judul Catatan..."
              />
              
              <div className="flex items-center gap-6 mb-10 py-4 border-y border-white/20 text-clay-muted">
                 <Bold size={18} />
                 <Italic size={18} />
                 <List size={18} />
                 <div className="w-px h-6 bg-white/20 mx-2" />
                 <Type size={18} />
              </div>

              <textarea 
                className="w-full h-full bg-transparent border-0 focus:ring-0 outline-none text-xl md:text-2xl font-medium text-clay-foreground leading-relaxed no-scrollbar resize-none"
                placeholder="Mulai menulis..."
                value={activeNote.content}
                onChange={(e) => updateActiveNote('content', e.target.value)}
              />
           </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </main>
  );
}
