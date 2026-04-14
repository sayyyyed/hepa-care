"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  MessageSquare, 
  FileText, 
  Calendar, 
  Bell, 
  UserCircle, 
  ChevronLeft, 
  ChevronRight,
  LogOut,
  Activity,
  X
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: Users, label: "Pasien Saya", href: "/admin/pasien" },
  { icon: BookOpen, label: "Jurnal Pasien", href: "/admin/jurnal" },
  { icon: MessageSquare, label: "Konsultasi", href: "/admin/konsultasi" },
  { icon: FileText, label: "Artikel / Blog", href: "/admin/artikel" },
  { icon: Calendar, label: "Jadwal", href: "/admin/jadwal" },
  { icon: Bell, label: "Notifikasi", href: "/admin/notifikasi" },
  { icon: UserCircle, label: "Profil Dokter", href: "/admin/profil" },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside 
      className={`fixed left-0 top-0 h-screen bg-white border-r border-slate-200 transition-all duration-300 ease-in-out z-50 
        ${isOpen ? "w-64 translate-x-0" : "w-20 -translate-x-full md:translate-x-0"}
      `}
    >
      <div className="flex flex-col h-full relative">
        {/* Mobile Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute -right-12 top-4 bg-white p-2 rounded-lg shadow-lg text-slate-600"
        >
          <X size={20} />
        </button>

        {/* Logo Section */}
        <div className="p-6 flex items-center justify-between">
          {(isOpen || !isOpen) && (
            <div className={`flex items-center gap-2 ${!isOpen ? "md:mx-auto" : ""}`}>
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                <Activity className="text-white w-5 h-5" />
              </div>
              <span className={`font-bold text-xl text-slate-800 tracking-tight transition-opacity duration-300 ${!isOpen ? "md:hidden" : "block"}`}>
                HepaCare
              </span>
            </div>
          )}
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="hidden md:flex absolute -right-3 top-20 bg-white border border-slate-200 rounded-full p-1 shadow-sm hover:bg-slate-50 transition-colors"
          >
            {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </button>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 px-3 space-y-1 mt-4 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  if (window.innerWidth < 768) setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <item.icon className={`shrink-0 transition-transform duration-200 ${!isOpen ? "md:mx-auto" : ""} ${isActive ? "scale-110" : "group-hover:scale-110"}`} size={22} />
                <span className={`font-medium transition-opacity duration-300 ${!isOpen ? "md:hidden" : "block text-sm"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Footer Section */}
        <div className="p-4 border-t border-slate-100">
          <button className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all duration-200 ${!isOpen ? "md:justify-center" : ""}`}>
            <LogOut size={22} className="shrink-0" />
            <span className={`font-medium transition-opacity duration-300 ${!isOpen ? "md:hidden" : "block"}`}>
              Logout
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
