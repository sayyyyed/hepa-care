"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  Eye, 
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Bold,
  Italic,
  List,
  Image as ImageIcon,
  Type,
  Layout,
  Save,
  Rocket
} from "lucide-react";

export default function ArticlesPage() {
  const [view, setView] = useState<"list" | "editor">("list");
  const [activeTab, setActiveTab] = useState("all");

  const articles = [
    { id: 1, title: "Menjaga Kesehatan Hati dengan Pola Makan Sehat", date: "12 Apr 2026", status: "Published", views: "1.2k" },
    { id: 2, title: "Mengenal Gejala Awal Penyakit Hati Kronis", date: "10 Apr 2026", status: "Published", views: "856" },
    { id: 3, title: "Pentingnya Vaksinasi Hepatitis B bagi Dewasa", date: "08 Apr 2026", status: "Draft", views: "0" },
    { id: 4, title: "Olahraga yang Tepat untuk Pasien Perlemakan Hati", date: "05 Apr 2026", status: "Published", views: "2.1k" },
  ];

  if (view === "editor") {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
           <button 
              onClick={() => setView("list")}
              className="text-clay-muted hover:text-clay-accent font-heading font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all hover:-translate-x-1 group"
           >
              <ChevronLeft size={20} className="transition-transform group-hover:scale-125" />
              Kembali ke Daftar
           </button>
           <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-white text-clay-muted font-heading font-bold rounded-[20px] shadow-clayCard hover:-translate-y-1 hover:shadow-clayButtonHover transition-all active:scale-95 active:shadow-clayPressed flex items-center gap-2">
                 <Save size={18} />
                 Simpan Draft
              </button>
              <button className="px-8 py-3 bg-gradient-to-br from-clay-accent to-clay-accent-alt text-white rounded-[20px] font-heading font-black shadow-clayButton hover:-translate-y-1 hover:shadow-clayButtonHover transition-all active:scale-95 active:shadow-clayPressed flex items-center gap-2">
                 <Rocket size={18} className="animate-clay-float" />
                 Publikasikan
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           {/* Main Editor */}
           <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 backdrop-blur-xl rounded-[40px] border-none shadow-clayDeep p-10 min-h-[700px] flex flex-col group">
                 <input 
                    type="text" 
                    placeholder="Masukkan Judul Artikel..." 
                    className="text-4xl font-heading font-black text-clay-foreground placeholder:text-clay-muted/20 border-none focus:ring-0 w-full mb-10 outline-none bg-transparent"
                    autoFocus
                 />
                 
                 {/* Toolbar */}
                 <div className="flex items-center gap-2 p-3 bg-clay-canvas/50 backdrop-blur-md rounded-2xl mb-10 shadow-clayPressed border border-white/50">
                    <button className="p-3 hover:bg-white hover:shadow-clayCard rounded-xl text-clay-muted hover:text-clay-accent transition-all active:scale-90"><Type size={20} /></button>
                    <div className="w-px h-8 bg-clay-muted/10 mx-2"></div>
                    <button className="p-3 hover:bg-white hover:shadow-clayCard rounded-xl text-clay-muted hover:text-clay-accent transition-all font-black active:scale-90"><Bold size={20} /></button>
                    <button className="p-3 hover:bg-white hover:shadow-clayCard rounded-xl text-clay-muted hover:text-clay-accent transition-all italic active:scale-90"><Italic size={20} /></button>
                    <div className="w-px h-8 bg-clay-muted/10 mx-2"></div>
                    <button className="p-3 hover:bg-white hover:shadow-clayCard rounded-xl text-clay-muted hover:text-clay-accent transition-all active:scale-90"><List size={20} /></button>
                    <button className="p-3 hover:bg-white hover:shadow-clayCard rounded-xl text-clay-muted hover:text-clay-accent transition-all active:scale-90"><ImageIcon size={20} /></button>
                    <div className="w-px h-8 bg-clay-muted/10 mx-2"></div>
                    <button className="p-3 hover:bg-white hover:shadow-clayCard rounded-xl text-clay-muted hover:text-clay-accent transition-all active:scale-90"><Layout size={20} /></button>
                 </div>

                 <textarea 
                    placeholder="Mulai menulis konten artikel Anda di sini..."
                    className="flex-1 w-full text-clay-foreground placeholder:text-clay-muted/30 border-none focus:ring-0 resize-none text-xl leading-relaxed outline-none font-sans bg-transparent"
                 />
              </div>
           </div>

           {/* Editor Sidebar */}
           <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-xl rounded-[32px] border-none shadow-clayCard p-8">
                 <h3 className="text-lg font-heading font-black text-clay-foreground mb-8">Pengaturan Artikel</h3>
                 
                 <div className="space-y-6">
                    <div>
                       <label className="text-[10px] font-heading font-black text-clay-muted uppercase tracking-widest block mb-3">Thumbnail Utama</label>
                       <div className="aspect-video bg-[#EFEBF5] border-2 border-dashed border-clay-accent/10 rounded-[24px] flex flex-col items-center justify-center text-clay-muted hover:border-clay-accent hover:bg-white hover:shadow-clayCard transition-all duration-300 cursor-pointer group shadow-clayPressed">
                          <ImageIcon size={40} className="group-hover:scale-110 group-hover:text-clay-accent transition-transform" />
                          <p className="text-xs font-heading font-black mt-3 uppercase tracking-wider">Upload Gambar</p>
                       </div>
                    </div>
                    
                    <div>
                       <label className="text-[10px] font-heading font-black text-clay-muted uppercase tracking-widest block mb-3">Kategori</label>
                       <select className="w-full bg-[#EFEBF5] border-none rounded-xl py-3 px-4 text-sm font-heading font-bold text-clay-foreground shadow-clayPressed focus:outline-none focus:ring-4 focus:ring-clay-accent/10 focus:bg-white transition-all cursor-pointer">
                          <option>Tips Kesehatan</option>
                          <option>Edukasi Penyakit</option>
                          <option>Nutrisi & Diet</option>
                       </select>
                    </div>

                    <div>
                       <label className="text-[10px] font-heading font-black text-clay-muted uppercase tracking-widest block mb-3">Tags & Kata Kunci</label>
                       <input 
                          type="text" 
                          placeholder="pisah dengan koma..." 
                          className="w-full bg-[#EFEBF5] border-none rounded-xl py-3 px-4 text-sm font-heading font-bold text-clay-foreground shadow-clayPressed focus:outline-none focus:ring-4 focus:ring-clay-accent/10 focus:bg-white transition-all placeholder:text-clay-muted/30"
                       />
                       <div className="flex flex-wrap gap-2 mt-4">
                          <span className="px-3 py-1.5 bg-clay-accent/10 text-clay-accent text-[10px] font-heading font-black rounded-lg shadow-sm border border-clay-accent/5">HEPACARE</span>
                          <span className="px-3 py-1.5 bg-clay-accent/10 text-clay-accent text-[10px] font-heading font-black rounded-lg shadow-sm border border-clay-accent/5">GAYA HIDUP</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[32px] p-8 text-white shadow-clayDeep relative overflow-hidden group">
                 <p className="text-[10px] font-heading font-black uppercase tracking-widest opacity-80 mb-4 flex items-center gap-2">
                    <Rocket size={14} />
                    SEO Search Preview
                 </p>
                 <p className="text-lg font-heading font-black line-clamp-2 leading-tight">Judul Artikel Akan Muncul Menarik di Google...</p>
                 <p className="text-xs font-sans font-medium mt-3 line-clamp-2 opacity-70">Deskripsi singkat artikel Anda akan muncul di sini untuk membantu pembaca menemukan konten Anda via mesin pencari.</p>
                 
                 <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-heading font-black text-clay-foreground tracking-tight">Artikel / Blog</h1>
          <p className="text-clay-muted font-medium mt-1">Edukasi pasien Anda dengan konten tulisan yang bermanfaat.</p>
        </div>
        <button 
          onClick={() => setView("editor")}
          className="flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-clay-accent to-clay-accent-alt text-white rounded-[24px] font-heading font-black shadow-clayButton hover:-translate-y-1 hover:shadow-clayButtonHover transition-all active:scale-[0.92] active:shadow-clayPressed"
        >
          <Plus size={22} />
          <span>Tulis Artikel Baru</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b border-clay-muted/10">
         <button 
            onClick={() => setActiveTab("all")}
            className={`pb-5 px-3 text-sm font-heading font-black transition-all relative uppercase tracking-widest ${activeTab === 'all' ? "text-clay-accent scale-110" : "text-clay-muted hover:text-clay-foreground"}`}
         >
            Semua Artikel
            {activeTab === 'all' && <div className="absolute bottom-0 left-0 w-full h-1.5 bg-clay-accent rounded-t-full shadow-[0_-4px_12px_rgba(124,58,237,0.3)]"></div>}
         </button>
         <button 
            onClick={() => setActiveTab("published")}
            className={`pb-5 px-3 text-sm font-heading font-black transition-all relative uppercase tracking-widest ${activeTab === 'published' ? "text-clay-accent scale-110" : "text-clay-muted hover:text-clay-foreground"}`}
         >
            Telah Terbit
            {activeTab === 'published' && <div className="absolute bottom-0 left-0 w-full h-1.5 bg-clay-accent rounded-t-full shadow-[0_-4px_12px_rgba(124,58,237,0.3)]"></div>}
         </button>
         <button 
            onClick={() => setActiveTab("draft")}
            className={`pb-5 px-3 text-sm font-heading font-black transition-all relative uppercase tracking-widest ${activeTab === 'draft' ? "text-clay-accent scale-110" : "text-clay-muted hover:text-clay-foreground"}`}
         >
            Draft
            {activeTab === 'draft' && <div className="absolute bottom-0 left-0 w-full h-1.5 bg-clay-accent rounded-t-full shadow-[0_-4px_12px_rgba(124,58,237,0.3)]"></div>}
         </button>
      </div>

      {/* Article List Table */}
      <div className="bg-white/70 backdrop-blur-xl rounded-[40px] border-none shadow-clayDeep overflow-hidden">
        <div className="p-6 border-b border-clay-muted/5 flex items-center justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-clay-muted/50 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Cari judul artikel..." 
                className="w-full bg-[#EFEBF5] border-none rounded-2xl py-3 pl-12 pr-4 text-sm text-clay-foreground shadow-clayPressed focus:outline-none focus:ring-4 focus:ring-clay-accent/10 focus:bg-white transition-all font-sans placeholder:text-clay-muted/50"
              />
            </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
             <thead>
                <tr className="bg-clay-canvas/50">
                   <th className="px-8 py-5 text-[10px] font-heading font-black text-clay-muted uppercase tracking-widest">Judul Artikel</th>
                   <th className="px-8 py-5 text-[10px] font-heading font-black text-clay-muted uppercase tracking-widest">Tanggal Terbit</th>
                   <th className="px-8 py-5 text-[10px] font-heading font-black text-clay-muted uppercase tracking-widest">Status</th>
                   <th className="px-8 py-5 text-[10px] font-heading font-black text-clay-muted uppercase tracking-widest">Dilihat</th>
                   <th className="px-8 py-5 text-[10px] font-heading font-black text-clay-muted uppercase tracking-widest text-center">Aksi</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-clay-muted/5">
                {articles.map((article) => (
                  <tr key={article.id} className="hover:bg-white group cursor-pointer transition-all duration-300">
                    <td className="px-8 py-6">
                       <p className="font-heading font-black text-clay-foreground text-base line-clamp-1 group-hover:text-clay-accent transition-colors">{article.title}</p>
                    </td>
                    <td className="px-8 py-6 text-sm font-sans font-bold text-clay-muted/70">{article.date}</td>
                    <td className="px-8 py-6">
                       <span className={`px-4 py-1.5 rounded-xl text-[10px] font-heading font-black uppercase tracking-widest shadow-sm border ${
                          article.status === 'Published' 
                            ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                            : 'bg-clay-canvas text-clay-muted border-transparent'
                       }`}>
                          {article.status}
                       </span>
                    </td>
                    <td className="px-8 py-6">
                       <div className="flex items-center gap-2 text-sm font-heading font-bold text-clay-muted">
                          <Eye size={16} className="text-clay-accent/50" />
                          {article.views}
                       </div>
                    </td>
                    <td className="px-8 py-6">
                       <div className="flex items-center justify-center gap-3">
                          <button 
                            onClick={() => setView("editor")}
                            className="p-3 bg-white text-clay-muted hover:text-clay-accent hover:shadow-clayCard rounded-xl transition-all active:scale-90"
                          >
                             <Edit2 size={18} />
                          </button>
                          <button className="p-3 bg-white text-clay-muted hover:text-rose-600 hover:shadow-clayCard rounded-xl transition-all active:scale-90">
                             <Trash2 size={18} />
                          </button>
                          <button className="p-3 bg-white text-clay-muted hover:text-clay-foreground hover:shadow-clayCard rounded-xl transition-all active:scale-90">
                             <MoreHorizontal size={18} />
                          </button>
                       </div>
                    </td>
                  </tr>
                ))}
             </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
