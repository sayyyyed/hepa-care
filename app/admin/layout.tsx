import React from "react";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-clay-canvas font-sans overflow-x-hidden relative">
      <Sidebar />
      <div className="pl-20 md:pl-64 transition-all duration-300">
        <Topbar />
        
        {/* Background Blobs */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-5%] h-[60vh] w-[60vh] rounded-full bg-clay-accent/5 blur-3xl animate-clay-float"></div>
          <div className="absolute bottom-[-10%] right-[-5%] h-[50vh] w-[50vh] rounded-full bg-clay-accent-alt/5 blur-3xl animate-clay-float-delayed"></div>
        </div>

        <main className="p-8 relative z-10">
          {children}
        </main>
      </div>
    </div>
  );
}
