"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ClayCard } from "../../components/ClayCard";
import { ClayButton } from "../../components/ClayButton";
import { ClayInput } from "../../components/ClayInput";
import { BackgroundBlobs } from "../../components/BackgroundBlobs";
import { ArrowLeft, ArrowRight, Check, Activity, HeartPulse } from "lucide-react";

type UserData = {
  nama: string; email: string; pass: string; dob: string;
  gender: string; height: string; weight: string;
  alcohol: string; smoke: string; activity: string;
  liverHistory: string[]; familyHistory: string; otherConditions: string[];
  consent: boolean;
};

export default function RegisterWizard() {
  const [step, setStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSteps = 14;

  const [data, setData] = useState<UserData>({
    nama: "", email: "", pass: "", dob: "",
    gender: "", height: "", weight: "",
    alcohol: "", smoke: "", activity: "",
    liverHistory: [], familyHistory: "", otherConditions: [],
    consent: false,
  });

  const nextStep = () => {
    if (step < 16) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStep(s => s + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStep(s => s - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const updateArray = (key: keyof UserData, val: string) => {
    const list = data[key] as string[];
    if (val === "Tidak ada") {
      setData({ ...data, [key]: ["Tidak ada"] });
      return;
    }
    const newList = list.includes(val) ? list.filter(v => v !== val) : [...list.filter(v => v !== "Tidak ada"), val];
    setData({ ...data, [key]: newList });
  };

  useEffect(() => {
    if (step === 15) {
      const timer = setTimeout(() => {
        setStep(16);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden">
      <BackgroundBlobs />
      
      {step < 15 && (
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
          <Link href="/login" className="inline-flex items-center justify-center p-3 rounded-full bg-white/60 shadow-clayCard backdrop-blur-md text-clay-muted hover:text-clay-accent transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </div>
      )}

      {/* Progress Bar */}
      {step > 1 && step <= totalSteps && (
        <div className="absolute top-10 z-10 hidden sm:flex space-x-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
             <div key={i} className={`h-2 w-8 rounded-full transition-colors duration-500 ${i < step ? 'bg-clay-accent' : 'bg-white shadow-clayPressed'}`} />
          ))}
        </div>
      )}

      {/* Container to handle animations */}
      <div className={`w-full max-w-lg z-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
        
        {/* Steps Content */}
        {step <= 14 && (
          <ClayCard className="flex flex-col !p-10 duration-500">
             
            {step === 1 && (
              <div className="flex flex-col justify-center items-center h-64">
                <h2 className="font-heading text-3xl font-bold text-center mb-8">Halo! Siapa nama lengkap Anda?</h2>
                <ClayInput autoFocus value={data.nama} onChange={e => setData({...data, nama: e.target.value})} placeholder="Masukkan nama" />
              </div>
            )}
            
            {step === 2 && (
              <div className="flex flex-col justify-center items-center h-64">
                <h2 className="font-heading text-3xl font-bold text-center mb-8">Halo {data.nama.split(" ")[0]}, masukkan email Anda</h2>
                <ClayInput type="email" autoFocus value={data.email} onChange={e => setData({...data, email: e.target.value})} placeholder="contoh@email.com" />
              </div>
            )}
            
            {step === 3 && (
              <div className="flex flex-col justify-center items-center h-64">
                <h2 className="font-heading text-3xl font-bold text-center mb-8">Buat password untuk keamanan</h2>
                <ClayInput type="password" autoFocus value={data.pass} onChange={e => setData({...data, pass: e.target.value})} placeholder="Minimal 8 karakter" />
              </div>
            )}
            
            {step === 4 && (
              <div className="flex flex-col justify-center items-center h-64">
                <h2 className="font-heading text-3xl font-bold text-center mb-8">Kapan tanggal lahir Anda?</h2>
                <ClayInput type="date" value={data.dob} onChange={e => setData({...data, dob: e.target.value})} />
              </div>
            )}
            
            {step === 5 && (
               <div className="flex flex-col h-64 justify-center">
                 <h2 className="font-heading text-3xl font-bold text-center mb-8">Apa jenis kelamin Anda?</h2>
                 <div className="space-y-4">
                   {["Laki-laki", "Perempuan", "Tidak ingin menyebutkan"].map(opt => (
                     <button key={opt} onClick={() => setData({...data, gender: opt})} className={`w-full py-4 rounded-2xl font-bold transition-all ${data.gender === opt ? 'bg-clay-accent text-white shadow-clayButton' : 'bg-[#EFEBF5] text-clay-muted shadow-clayPressed'}`}>{opt}</button>
                   ))}
                 </div>
               </div>
            )}

            {step === 6 && (
               <div className="flex flex-col h-64 justify-center items-center">
                 <h2 className="font-heading text-3xl font-bold text-center mb-8">Berapa tinggi badan Anda?</h2>
                 <div className="relative w-full">
                    <ClayInput type="number" autoFocus value={data.height} onChange={e => setData({...data, height: e.target.value})} placeholder="Misal: 170" />
                    <span className="absolute right-6 top-4 font-bold text-clay-muted">cm</span>
                 </div>
               </div>
            )}

            {step === 7 && (
               <div className="flex flex-col h-64 justify-center items-center">
                 <h2 className="font-heading text-3xl font-bold text-center mb-8">Berapa berat badan Anda?</h2>
                 <div className="relative w-full">
                    <ClayInput type="number" autoFocus value={data.weight} onChange={e => setData({...data, weight: e.target.value})} placeholder="Misal: 65" />
                    <span className="absolute right-6 top-4 font-bold text-clay-muted">kg</span>
                 </div>
               </div>
            )}

            {step === 8 && (
               <div className="flex flex-col h-64 justify-center">
                 <h2 className="font-heading text-2xl font-bold text-center mb-6">Seberapa sering Anda mengonsumsi alkohol?</h2>
                 <div className="space-y-4">
                   {["Tidak pernah", "Kadang-kadang", "Sering"].map(opt => (
                     <button key={opt} onClick={() => setData({...data, alcohol: opt})} className={`w-full py-4 rounded-2xl font-bold transition-all ${data.alcohol === opt ? 'bg-clay-accent text-white shadow-clayButton' : 'bg-[#EFEBF5] text-clay-muted shadow-clayPressed'}`}>{opt}</button>
                   ))}
                 </div>
               </div>
            )}

            {step === 9 && (
               <div className="flex flex-col h-64 justify-center">
                 <h2 className="font-heading text-3xl font-bold text-center mb-8">Apakah Anda merokok?</h2>
                 <div className="flex gap-4">
                   {["Ya", "Tidak"].map(opt => (
                     <button key={opt} onClick={() => setData({...data, smoke: opt})} className={`w-full py-4 rounded-2xl font-bold transition-all ${data.smoke === opt ? 'bg-clay-accent text-white shadow-clayButton' : 'bg-[#EFEBF5] text-clay-muted shadow-clayPressed'}`}>{opt}</button>
                   ))}
                 </div>
               </div>
            )}

            {step === 10 && (
               <div className="flex flex-col h-64 justify-center">
                 <h2 className="font-heading text-2xl font-bold text-center mb-6">Seberapa aktif aktivitas fisik Anda?</h2>
                 <div className="space-y-4">
                   {["Rendah", "Sedang", "Tinggi"].map(opt => (
                     <button key={opt} onClick={() => setData({...data, activity: opt})} className={`w-full py-4 rounded-2xl font-bold transition-all ${data.activity === opt ? 'bg-clay-accent text-white shadow-clayButton' : 'bg-[#EFEBF5] text-clay-muted shadow-clayPressed'}`}>{opt}</button>
                   ))}
                 </div>
               </div>
            )}

            {step === 11 && (
               <div className="flex flex-col h-72 justify-center">
                 <h2 className="font-heading text-2xl font-bold text-center mb-6">Apakah Anda pernah didiagnosis penyakit hati?</h2>
                 <div className="grid grid-cols-2 gap-4">
                   {["Hepatitis", "Fatty Liver", "Sirosis", "Tidak ada"].map(opt => {
                     const active = data.liverHistory.includes(opt);
                     return (
                       <button key={opt} onClick={() => updateArray('liverHistory', opt)} className={`w-full py-4 rounded-2xl font-bold transition-all ${active ? 'bg-clay-accent text-white shadow-clayButton' : 'bg-[#EFEBF5] text-clay-muted shadow-clayPressed'}`}>{opt}</button>
                     );
                   })}
                 </div>
               </div>
            )}

            {step === 12 && (
               <div className="flex flex-col h-64 justify-center">
                 <h2 className="font-heading text-2xl font-bold text-center mb-8">Apakah ada riwayat penyakit hati dalam keluarga Anda?</h2>
                 <div className="flex gap-4">
                   {["Ya", "Tidak"].map(opt => (
                     <button key={opt} onClick={() => setData({...data, familyHistory: opt})} className={`w-full py-4 rounded-2xl font-bold transition-all ${data.familyHistory === opt ? 'bg-clay-accent text-white shadow-clayButton' : 'bg-[#EFEBF5] text-clay-muted shadow-clayPressed'}`}>{opt}</button>
                   ))}
                 </div>
               </div>
            )}

            {step === 13 && (
               <div className="flex flex-col h-72 justify-center">
                 <h2 className="font-heading text-2xl font-bold text-center mb-6">Apakah Anda memiliki kondisi berikut?</h2>
                 <div className="grid gap-4">
                   {["Diabetes", "Kolesterol tinggi", "Tidak ada"].map(opt => {
                     const active = data.otherConditions.includes(opt);
                     return (
                       <button key={opt} onClick={() => updateArray('otherConditions', opt)} className={`w-full py-4 rounded-2xl font-bold transition-all ${active ? 'bg-clay-accent text-white shadow-clayButton' : 'bg-[#EFEBF5] text-clay-muted shadow-clayPressed'}`}>{opt}</button>
                     );
                   })}
                 </div>
               </div>
            )}

            {step === 14 && (
               <div className="flex flex-col h-72 justify-center items-center text-center">
                 <ShieldCheckIcon className="h-16 w-16 text-clay-success mb-6" />
                 <h2 className="font-heading text-2xl font-bold mb-4">Persetujuan Keamanan</h2>
                 <p className="text-clay-muted mb-6">Sistem menggunakan data yang baru diberikan untuk melakukan evaluasi kecerdasan buatan.</p>
                 <label className="flex items-center gap-3 cursor-pointer select-none">
                    <div className="relative">
                       <input type="checkbox" className="sr-only" checked={data.consent} onChange={e => setData({...data, consent: e.target.checked})} />
                       <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${data.consent ? 'bg-clay-success shadow-clayButton' : 'bg-[#EFEBF5] shadow-clayPressed'}`}>
                          {data.consent && <Check className="h-5 w-5 text-white" />}
                       </div>
                    </div>
                    <span className="font-bold text-clay-foreground text-sm">Saya menyetujui penggunaan data kesehatan sesuai kebijakan privasi.</span>
                 </label>
               </div>
            )}

            <div className="mt-8 flex justify-between items-center w-full">
              {step > 1 ? (
                <button onClick={prevStep} className="font-bold text-clay-muted hover:text-clay-foreground underline p-2">Kembali</button>
              ) : <div></div>}
              
              {step < 14 ? (
                <ClayButton onClick={nextStep} className="gap-2 px-10">Lanjut <ArrowRight className="h-5 w-5" /></ClayButton>
              ) : (
                <ClayButton onClick={nextStep} disabled={!data.consent} className={`${!data.consent && 'opacity-50 grayscale'}`}>Selesaikan Pendaftaran</ClayButton>
              )}
            </div>
          </ClayCard>
        )}

        {/* LOADING STATE - STEP 15 */}
        {step === 15 && (
           <div className="flex flex-col items-center justify-center h-[500px]">
             <div className="animate-[clay-breathe_4s_ease-in-out_infinite] w-32 h-32 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] shadow-clayButton flex items-center justify-center mb-8">
                <Activity className="h-12 w-12 text-white animate-pulse" />
             </div>
             <h2 className="font-heading text-2xl sm:text-3xl font-black text-center mb-4">Sedang menganalisis profil kesehatan Anda...</h2>
             <p className="text-clay-muted font-bold text-center">AI engine sedang meninjau rekam data Anda.</p>
           </div>
        )}
      </div>

      {/* RESULTS SWIPER - STEP 16 */}
      {step === 16 && (
        <div className="w-full h-[600px] flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 z-10">
           <h2 className="font-heading text-4xl sm:text-5xl font-black text-center mb-2">Hasil Analisis</h2>
           <p className="text-clay-muted font-bold text-center mb-10">Geser untuk melihat detail dari AI kami.</p>
           
           <div className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scroll pb-10 px-4 sm:px-[20vw] gap-6">
              
              <ClayCard className="snap-center shrink-0 w-[300px] sm:w-[350px] !p-10 flex flex-col items-center justify-center text-center">
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-clayButton mb-6 flex items-center justify-center">
                   <HeartPulse className="h-10 w-10 text-white" />
                 </div>
                 <h3 className="font-heading text-3xl font-bold mb-4">Risiko Sedang</h3>
                 <p className="text-clay-muted mb-4">Berdasarkan data Anda, ada indikasi awal terhadap risiko kesehatan fungsi hati.</p>
                 <div className="w-full h-4 bg-[#EFEBF5] rounded-full shadow-clayPressed overflow-hidden mt-6">
                    <div className="h-full bg-amber-500 w-[60%]"></div>
                 </div>
              </ClayCard>

              <ClayCard className="snap-center shrink-0 w-[300px] sm:w-[350px] !p-10 flex flex-col items-center text-center">
                 <h3 className="font-heading text-2xl font-bold mb-6">Faktor Risiko Utama</h3>
                 <div className="w-full space-y-4">
                    <div className="bg-white/60 p-4 rounded-xl shadow-sm text-left">
                      <p className="font-bold">Konsumsi Alkohol</p>
                      <p className="text-sm text-amber-600">Perlu penyesuaian intensitas harian.</p>
                    </div>
                    <div className="bg-white/60 p-4 rounded-xl shadow-sm text-left">
                      <p className="font-bold">Indeks Massa Tubuh</p>
                      <p className="text-sm text-amber-600">BMI Sedikit di atas ambang wajar.</p>
                    </div>
                 </div>
              </ClayCard>

              <ClayCard className="snap-center shrink-0 w-[300px] sm:w-[350px] !p-10 flex flex-col items-center justify-center text-center">
                 <h3 className="font-heading text-2xl font-bold mb-6">Insight Gaya Hidup</h3>
                 <p className="text-lg text-clay-foreground leading-relaxed">
                   "Aktivitas fisik Anda masih bisa sangat ditingkatkan untuk membantu organ membakar residu lemak."
                 </p>
              </ClayCard>

              <ClayCard className="snap-center shrink-0 w-[300px] sm:w-[350px] !p-10 flex flex-col items-center justify-center text-center">
                 <h3 className="font-heading text-2xl font-bold mb-6">Rekomendasi Cerdas</h3>
                 <ul className="text-left space-y-3 font-medium">
                   <li className="flex items-center gap-3"><Check className="h-5 w-5 text-clay-success" /> Kurangi rekreasi alkohol.</li>
                   <li className="flex items-center gap-3"><Check className="h-5 w-5 text-clay-success" /> Rutin olahraga cardio 30m.</li>
                   <li className="flex items-center gap-3"><Check className="h-5 w-5 text-clay-success" /> Coba puasa intermiten ringan.</li>
                 </ul>
              </ClayCard>

              <ClayCard className="snap-center shrink-0 w-[300px] sm:w-[350px] !p-10 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#7C3AED]/10 to-[#DB2777]/5 border-2 border-clay-accent/20">
                 <h3 className="font-heading text-3xl font-bold mb-6">Siap Melangkah?</h3>
                 <p className="text-clay-muted mb-8">Masuk ke dalam dashboard cerdas Anda sekarang juga untuk rekam jejak harian.</p>
                 <Link href="/">
                    <ClayButton size="lg" className="w-full">Lihat Dashboard Utama</ClayButton>
                 </Link>
              </ClayCard>
           </div>
        </div>
      )}

      {/* Basic hide scrollbar style */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </main>
  );
}

// Temporary icon to avoid import errors if its missing
function ShieldCheckIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
