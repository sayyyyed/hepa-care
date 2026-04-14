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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Pasien Saya</h1>
          <p className="text-slate-500 mt-1">Kelola dan pantau data kesehatan semua pasien Anda.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden text-slate-500">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Cari nama atau ID pasien..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-700"
            />
          </div>
          <div className="flex items-center gap-2">
             <span className="text-sm">Menampilkan 1-8 dari 1,284 pasien</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-sm font-bold text-slate-700">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-indigo-600">
                    Nama Pasien <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-6 py-4 text-sm font-bold text-slate-700">Umur</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-700">Status Risiko</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-700">Terakhir Update</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-700">Status</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-700 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${patient.name}`} alt="" className="w-7 h-7" />
                      </div>
                      <span className="font-semibold text-slate-800">{patient.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{patient.age} Tahun</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${getRiskColor(patient.risk)}`}>
                      {patient.risk}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{patient.lastUpdate}</td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium flex items-center gap-2 before:w-1.5 before:h-1.5 before:rounded-full ${getStatusColor(patient.status)}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                       <Link 
                        href={`/admin/pasien/${patient.id}`}
                        className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                       >
                         <ChevronRight size={18} />
                       </Link>
                       <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                         <MoreHorizontal size={18} />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-400 disabled:opacity-50" disabled>
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-1">
               <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-sm">1</button>
               <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-medium text-sm">2</button>
               <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-medium text-sm">3</button>
               <span className="px-1 text-slate-400">...</span>
               <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-medium text-sm">160</button>
            </div>
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-400">
              <ChevronRightIcon size={18} />
            </button>
          </div>
          <p className="text-sm text-slate-500">Hal 1 dari 160</p>
        </div>
      </div>
    </div>
  );
}
