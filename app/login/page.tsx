import React from "react";
import Link from "next/link";
import { ClayCard } from "../../components/ClayCard";
import { ClayButton } from "../../components/ClayButton";
import { ClayInput } from "../../components/ClayInput";
import { BackgroundBlobs } from "../../components/BackgroundBlobs";
import { HeartPulse, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center p-4">
      <BackgroundBlobs />
      
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
        <Link href="/" className="inline-flex items-center justify-center p-3 rounded-full bg-white/60 shadow-clayCard backdrop-blur-md text-clay-muted hover:text-clay-accent transition-colors">
          <ArrowLeft className="h-6 w-6" />
        </Link>
      </div>

      <div className="w-full max-w-md z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <ClayCard className="flex flex-col items-center">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-[24px] bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] shadow-clayButton">
            <HeartPulse className="h-8 w-8 text-white" />
          </div>
          
          <h1 className="font-heading text-3xl font-black mb-2 text-center text-clay-foreground">Selamat Datang</h1>
          <p className="text-clay-muted font-medium mb-8 text-center">Masuk ke akun HepaCare Anda untuk melanjutkan perjalanan sehat.</p>
          
          <form className="w-full flex flex-col gap-5">
            <div>
              <label className="block text-sm font-bold text-clay-muted mb-2 ml-2">Email</label>
              <ClayInput type="email" placeholder="contoh@email.com" required />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-clay-muted mb-2 ml-2">Password</label>
              <ClayInput type="password" placeholder="••••••••" required />
            </div>
            
            <div className="flex justify-end mt-1 mb-2">
              <a href="#" className="text-sm font-bold text-clay-accent hover:underline">Lupa Password?</a>
            </div>
            
            <Link href="/dashboard" className="w-full mt-2">
              <ClayButton type="button" className="w-full">
                Masuk
              </ClayButton>
            </Link>
          </form>

          <div className="mt-8 text-center text-clay-muted font-medium">
            Belum punya akun? {" "}
            <Link href="/register" className="font-bold text-clay-accent hover:underline">
              Buat Akun
            </Link>
          </div>
        </ClayCard>
      </div>
    </main>
  );
}
