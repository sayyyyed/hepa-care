"use client";

import React, { useState } from "react";
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
  Activity
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

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside 
      className={`fixed left-0 top-0 h-screen bg-white/80 backdrop-blur-xl border-none transition-all duration-500 ease-in-out z-50 rounded-r-[32px] md:rounded-r-[40px] shadow-clayDeep ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo Section */}
        <div className="p-8 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-clay-accent to-clay-accent-alt rounded-2xl flex items-center justify-center shadow-clayButton">
                <Activity className="text-white w-6 h-6" />
              </div>
              <span className="font-heading font-black text-2xl text-clay-foreground tracking-tighter">HepaCare</span>
            </div>
          )}
          {isCollapsed && (
            <div className="w-10 h-10 bg-gradient-to-br from-clay-accent to-clay-accent-alt rounded-2xl flex items-center justify-center mx-auto shadow-clayButton">
              <Activity className="text-white w-6 h-6" />
            </div>
          )}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute -right-4 top-24 bg-white border-0 rounded-2xl p-2 shadow-clayCard hover:shadow-clayButtonHover transition-all active:scale-90 active:shadow-clayPressed cursor-pointer"
          >
            {isCollapsed ? <ChevronRight size={20} className="text-clay-accent" /> : <ChevronLeft size={20} className="text-clay-accent" />}
          </button>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 px-4 space-y-3 mt-8">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-4 rounded-[20px] transition-all duration-300 group ${
                  isActive 
                    ? "bg-white text-clay-accent shadow-clayCard" 
                    : "text-clay-muted hover:bg-white/50 hover:text-clay-foreground hover:-translate-y-1 hover:shadow-clayCard"
                } active:scale-[0.92] active:shadow-clayPressed`}
              >
                <item.icon className={`shrink-0 transition-transform duration-300 ${isCollapsed ? "mx-auto" : ""} ${isActive ? "scale-110 drop-shadow-[0_4px_8px_rgba(124,58,237,0.3)]" : "group-hover:scale-110"}`} size={24} />
                {!isCollapsed && <span className="font-heading font-bold text-sm tracking-wide">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer Section */}
        <div className="p-6">
          <button className={`w-full flex items-center gap-3 px-4 py-4 rounded-[20px] text-red-500 hover:bg-red-50/50 hover:shadow-clayCard transition-all duration-300 active:scale-[0.92] active:shadow-clayPressed ${isCollapsed ? "justify-center" : ""}`}>
            <LogOut size={24} />
            {!isCollapsed && <span className="font-heading font-bold text-sm tracking-wide">Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}
