"use client";

import React from "react";
import { Search, Bell, ChevronDown, Menu } from "lucide-react";

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>

        {/* Search Section - Hidden on mobile extra small */}
        <div className="hidden sm:flex flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Cari pasien cepat..." 
            className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-6">
        {/* Notification */}
        <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* User Dropdown */}
        <div className="flex items-center gap-3 pl-2 md:pl-6 border-l border-slate-200 group cursor-pointer">
          <div className="hidden md:block text-right">
            <p className="text-sm font-semibold text-slate-900 leading-none">Dr. Sarah Johnson</p>
            <p className="text-xs text-slate-500 mt-1">Spesialis Hepatologi</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-indigo-100 border border-indigo-200 overflow-hidden shrink-0">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" 
              alt="Dr. Sarah" 
              className="w-full h-full object-cover"
            />
          </div>
          <ChevronDown className="hidden sm:block w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
        </div>
      </div>
    </header>
  );
}
