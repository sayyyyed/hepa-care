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
      <div className="space-y-6">
        <div className="flex items-center justify-between">
           <button 
              onClick={() => setView("list")}
              className="text-slate-500 hover:text-indigo-600 font-medium flex items-center gap-2"
           >
              <ChevronLeft size={18} />
              Kembali ke Daftar
           </button>
           <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors text-sm flex items-center gap-2">
                 <Save size={16} />
                 Simpan Draft
              </button>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20 text-sm flex items-center gap-2">
                 <Rocket size={16} />
                 Publikasikan
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Main Editor */}
           <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 min-h-[600px] flex flex-col">
                 <input 
                    type="text" 
                    placeholder="Masukkan Judul Artikel..." 
                    className="text-3xl font-bold text-slate-800 placeholder:text-slate-200 border-none focus:ring-0 w-full mb-8 outline-none"
                    autoFocus
                 />
                 
                 {/* Toolbar */}
                 <div className="flex items-center gap-1 p-2 bg-slate-50 rounded-xl mb-6 border border-slate-100">
                    <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-500 transition-all"><Type size={18} /></button>
                    <div className="w-px h-6 bg-slate-200 mx-1"></div>
                    <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-500 transition-all font-bold"><Bold size={18} /></button>
                    <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-500 transition-all italic"><Italic size={18} /></button>
                    <div className="w-px h-6 bg-slate-200 mx-1"></div>
                    <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-500 transition-all"><List size={18} /></button>
                    <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-500 transition-all"><ImageIcon size={18} /></button>
                    <div className="w-px h-6 bg-slate-200 mx-1"></div>
                    <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-500 transition-all"><Layout size={18} /></button>
                 </div>

                 <textarea 
                    placeholder="Mulai menulis konten artikel Anda di sini..."
                    className="flex-1 w-full text-slate-700 placeholder:text-slate-300 border-none focus:ring-0 resize-none text-lg leading-relaxed outline-none"
                 />
              </div>
           </div>

           {/* Editor Sidebar */}
           <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                 <h3 className="font-bold text-slate-800 mb-4">Pengaturan Artikel</h3>
                 
                 <div className="space-y-4">
                    <div>
                       <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Thumbnail</label>
                       <div className="aspect-video bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:border-indigo-300 hover:bg-indigo-50 transition-all cursor-pointer group">
                          <ImageIcon size={32} className="group-hover:scale-110 transition-transform" />
                          <p className="text-xs font-medium mt-2">Upload Gambar</p>
                       </div>
                    </div>
                    
                    <div>
                       <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Kategori</label>
                       <select className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
                          <option>Tips Kesehatan</option>
                          <option>Edukasi Penyakit</option>
                          <option>Nutrisi & Diet</option>
                       </select>
                    </div>

                    <div>
                       <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Tags</label>
                       <input 
                          type="text" 
                          placeholder="pisah dengan koma..." 
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                       />
                       <div className="flex flex-wrap gap-2 mt-3">
                          <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-md">HepaCare</span>
                          <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-md">Gaya Hidup</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                 <p className="text-xs font-bold text-emerald-600 uppercase mb-2">SEO Preview</p>
                 <p className="text-sm font-bold text-slate-800 line-clamp-1">Judul Artikel Akan Muncul di Google...</p>
                 <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">Deskripsi singkat artikel Anda akan muncul di sini untuk membantu pembaca menemukan konten Anda via mesin pencari.</p>
              </div>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Artikel / Blog</h1>
          <p className="text-slate-500 mt-1">Edukasi pasien Anda dengan konten tulisan yang bermanfaat.</p>
        </div>
        <button 
          onClick={() => setView("editor")}
          className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20"
        >
          <Plus size={20} />
          <span>Tulis Artikel Baru</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-slate-200">
         <button 
            onClick={() => setActiveTab("all")}
            className={`pb-4 px-2 text-sm font-bold transition-all relative ${activeTab === 'all' ? "text-indigo-600" : "text-slate-400 hover:text-slate-600"}`}
         >
            Semua Artikel
            {activeTab === 'all' && <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 rounded-t-full"></div>}
         </button>
         <button 
            onClick={() => setActiveTab("published")}
            className={`pb-4 px-2 text-sm font-bold transition-all relative ${activeTab === 'published' ? "text-indigo-600" : "text-slate-400 hover:text-slate-600"}`}
         >
            Telah Terbit
            {activeTab === 'published' && <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 rounded-t-full"></div>}
         </button>
         <button 
            onClick={() => setActiveTab("draft")}
            className={`pb-4 px-2 text-sm font-bold transition-all relative ${activeTab === 'draft' ? "text-indigo-600" : "text-slate-400 hover:text-slate-600"}`}
         >
            Draft
            {activeTab === 'draft' && <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 rounded-t-full"></div>}
         </button>
      </div>

      {/* Article List Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Cari judul artikel..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
             <thead className="bg-slate-50/50">
                <tr>
                   <th className="px-6 py-4 text-sm font-bold text-slate-700">Judul Artikel</th>
                   <th className="px-6 py-4 text-sm font-bold text-slate-700">Tanggal</th>
                   <th className="px-6 py-4 text-sm font-bold text-slate-700">Status</th>
                   <th className="px-6 py-4 text-sm font-bold text-slate-700">Dilihat</th>
                   <th className="px-6 py-4 text-sm font-bold text-slate-700 text-center">Aksi</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-slate-100">
                {articles.map((article) => (
                  <tr key={article.id} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="px-6 py-4">
                       <p className="font-bold text-slate-800 line-clamp-1 group-hover:text-indigo-600 transition-colors">{article.title}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">{article.date}</td>
                    <td className="px-6 py-4">
                       <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                          article.status === 'Published' 
                            ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                            : 'bg-slate-50 text-slate-500 border-slate-200'
                       }`}>
                          {article.status}
                       </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                       <div className="flex items-center gap-1.5">
                          <Eye size={14} />
                          {article.views}
                       </div>
                    </td>
                    <td className="px-6 py-4">
                       <div className="flex items-center justify-center gap-2">
                          <button 
                            onClick={() => setView("editor")}
                            className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                          >
                             <Edit2 size={16} />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all">
                             <Trash2 size={16} />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                             <MoreHorizontal size={16} />
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
