"use client";

import React from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-20 bg-white/60 backdrop-blur-xl border-none sticky top-0 z-40 px-8 flex items-center justify-between rounded-b-[24px] shadow-clayCard">
      {/* Search Section */}
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-clay-muted w-4 h-4" />
        <input 
          type="text" 
          placeholder="Cari pasien cepat..." 
          className="w-full bg-[#EFEBF5] border-none rounded-2xl py-3 pl-12 pr-4 text-sm text-clay-foreground shadow-clayPressed focus:outline-none focus:ring-4 focus:ring-clay-accent/10 focus:bg-white transition-all font-sans placeholder:text-clay-muted/50"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <button className="relative p-3 text-clay-muted bg-white/50 hover:bg-white hover:-translate-y-1 hover:shadow-clayCard rounded-xl transition-all shadow-sm active:scale-95 active:shadow-clayPressed">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-clay-accent-alt rounded-full border-2 border-white shadow-clayButton"></span>
        </button>

        {/* User Dropdown */}
        <div className="flex items-center gap-4 pl-6 border-l border-clay-muted/10 group cursor-pointer hover:bg-white/30 p-2 rounded-2xl transition-all">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-heading font-black text-clay-foreground leading-none">Dr. Sarah Johnson</p>
            <p className="text-[10px] font-heading font-bold text-clay-muted mt-1 uppercase tracking-wider">Spesialis Hepatologi</p>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-white shadow-clayCard border-2 border-white overflow-hidden active:scale-90 transition-transform">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" 
              alt="Dr. Sarah" 
              className="w-full h-full object-cover"
            />
          </div>
          <ChevronDown className="w-4 h-4 text-clay-muted group-hover:text-clay-accent transition-colors" />
        </div>
      </div>
    </header>
  );
}
