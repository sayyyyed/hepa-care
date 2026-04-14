"use client";

import React, { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className={`transition-all duration-300 ${isSidebarOpen ? "md:pl-64" : "md:pl-20"}`}>
        <Topbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
