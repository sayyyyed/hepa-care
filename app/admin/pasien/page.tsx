"use client";

import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  ChevronRight, 
  MoreHorizontal,
  ChevronLeft,
  ChevronRight as ChevronRightIcon
} from "lucide-react";
import Link from "next/link";

const patients = [
  { id: "1", name: "Budi Santoso", age: 45, risk: "High", lastUpdate: "2 jam yang lalu", status: "Perlu perhatian" },
  { id: "2", name: "Siti Aminah", age: 38, risk: "Low", lastUpdate: "1 hari yang lalu", status: "Aktif" },
  { id: "3", name: "Anto Wijaya", age: 52, risk: "Medium", lastUpdate: "5 jam yang lalu", status: "Aktif" },
  { id: "4", name: "Rina Kartika", age: 29, risk: "Low", lastUpdate: "3 jam yang lalu", status: "Aktif" },
  { id: "5", name: "Dedi Kusuma", age: 61, risk: "High", lastUpdate: "15 menit yang lalu", status: "Perlu perhatian" },
  { id: "6", name: "Lani Marlina", age: 42, risk: "Medium", lastUpdate: "4 hari yang lalu", status: "Aktif" },
  { id: "7", name: "Heri Prasetyo", age: 55, risk: "Low", lastUpdate: "2 hari yang lalu", status: "Aktif" },
  { id: "8", name: "Maya Saputri", age: 33, risk: "Medium", lastUpdate: "6 jam yang lalu", status: "Perlu perhatian" },
];

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High": return "bg-red-50 text-red-600 border-red-100";
      case "Medium": return "bg-amber-50 text-amber-600 border-amber-100";
      case "Low": return "bg-emerald-50 text-emerald-600 border-emerald-100";
      default: return "bg-slate-50 text-slate-600 border-slate-100";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "Perlu perhatian" 
      ? "text-rose-600 before:bg-rose-600" 
      : "text-emerald-600 before:bg-emerald-600";
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-heading font-black text-clay-foreground tracking-tight">Pasien Saya</h1>
          <p className="text-clay-muted font-medium mt-1">Kelola dan pantau data kesehatan semua pasien Anda.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-clay-muted font-heading font-bold rounded-[20px] shadow-clayCard hover:-translate-y-1 hover:shadow-clayButtonHover transition-all active:scale-95 active:shadow-clayPressed">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-clay-accent to-clay-accent-alt text-white rounded-[20px] font-heading font-bold shadow-clayButton hover:-translate-y-1 hover:shadow-clayButtonHover transition-all active:scale-95 active:shadow-clayPressed">
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white/70 backdrop-blur-xl rounded-[32px] border-none shadow-clayDeep overflow-hidden">
        <div className="p-6 border-b border-clay-muted/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-clay-muted/50 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Cari nama atau ID pasien..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#EFEBF5] border-none rounded-2xl py-3 pl-12 pr-4 text-sm text-clay-foreground shadow-clayPressed focus:outline-none focus:ring-4 focus:ring-clay-accent/10 focus:bg-white transition-all font-sans placeholder:text-clay-muted/50"
            />
          </div>
          <div className="flex items-center gap-2">
             <span className="text-xs font-heading font-bold text-clay-muted uppercase tracking-widest">Menampilkan 8 dari 1,284 pasien</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-clay-canvas/50">
                <th className="px-8 py-5 text-xs font-heading font-black text-clay-muted uppercase tracking-widest">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-clay-accent transition-colors">
                    Nama Pasien <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-8 py-5 text-xs font-heading font-black text-clay-muted uppercase tracking-widest">Umur</th>
                <th className="px-8 py-5 text-xs font-heading font-black text-clay-muted uppercase tracking-widest">Status Risiko</th>
                <th className="px-8 py-5 text-xs font-heading font-black text-clay-muted uppercase tracking-widest">Update Terakhir</th>
                <th className="px-8 py-5 text-xs font-heading font-black text-clay-muted uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-xs font-heading font-black text-clay-muted uppercase tracking-widest text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-clay-muted/5">
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-white group cursor-pointer transition-all duration-300">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-clayCard flex items-center justify-center border-2 border-white overflow-hidden group-hover:scale-110 transition-transform">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${patient.name}`} alt="" className="w-10 h-10" />
                      </div>
                      <span className="font-heading font-bold text-clay-foreground group-hover:text-clay-accent transition-colors">{patient.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm font-sans font-bold text-clay-muted">{patient.age} Tahun</td>
                  <td className="px-8 py-5">
                    <span className={`text-[10px] font-heading font-black px-4 py-1.5 rounded-full border shadow-sm uppercase tracking-widest ${getRiskColor(patient.risk)}`}>
                      {patient.risk}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm font-sans font-bold text-clay-muted">{patient.lastUpdate}</td>
                  <td className="px-8 py-5">
                    <span className={`text-xs font-heading font-bold flex items-center gap-2 before:w-2 before:h-2 before:rounded-full shadow-sm px-3 py-1.5 rounded-xl bg-white ${getStatusColor(patient.status)}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center justify-center gap-3">
                       <Link 
                        href={`/admin/pasien/${patient.id}`}
                        className="p-3 text-clay-muted bg-white hover:text-clay-accent hover:shadow-clayCard rounded-xl transition-all active:scale-90"
                       >
                         <ChevronRight size={20} />
                       </Link>
                       <button className="p-3 text-clay-muted bg-white hover:text-clay-foreground hover:shadow-clayCard rounded-xl transition-all active:scale-90">
                         <MoreHorizontal size={20} />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 bg-clay-canvas/30 border-t border-clay-muted/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="p-3 bg-white border-none rounded-2xl text-clay-muted shadow-clayCard hover:-translate-x-1 hover:text-clay-accent transition-all disabled:opacity-30 active:scale-95" disabled>
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
               <button className="w-11 h-11 flex items-center justify-center rounded-2xl bg-gradient-to-br from-clay-accent to-clay-accent-alt text-white font-heading font-black text-sm shadow-clayButton active:scale-90 transition-all">1</button>
               <button className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white text-clay-muted font-heading font-bold text-sm shadow-clayCard hover:-translate-y-1 hover:text-clay-accent transition-all active:scale-90">2</button>
               <button className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white text-clay-muted font-heading font-bold text-sm shadow-clayCard hover:-translate-y-1 hover:text-clay-accent transition-all active:scale-90">3</button>
               <span className="px-2 text-clay-muted/50 font-black">...</span>
               <button className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white text-clay-muted font-heading font-bold text-sm shadow-clayCard hover:-translate-y-1 hover:text-clay-accent transition-all active:scale-90">160</button>
            </div>
            <button className="p-3 bg-white border-none rounded-2xl text-clay-muted shadow-clayCard hover:translate-x-1 hover:text-clay-accent transition-all active:scale-95">
              <ChevronRightIcon size={20} />
            </button>
          </div>
          <p className="text-xs font-heading font-black text-clay-muted uppercase tracking-widest">Hal 1 dari 160</p>
        </div>
      </div>
    </div>
  );
}
