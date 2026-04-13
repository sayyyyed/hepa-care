import React from "react";
import { ClayButton } from "../components/ClayButton";
import { ClayCard } from "../components/ClayCard";
import { BackgroundBlobs } from "../components/BackgroundBlobs";
import { 
  Activity, 
  User, 
  HeartPulse, 
  Utensils, 
  BookOpen, 
  GraduationCap, 
  Stethoscope, 
  Layers 
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundBlobs />

      {/* Navigation Layer */}
      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex h-16 sm:h-20 items-center justify-between rounded-[32px] sm:rounded-[40px] bg-white/60 px-6 sm:px-8 shadow-clayCard backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] shadow-clayButton">
              <HeartPulse className="h-5 w-5 text-white" />
            </div>
            <span className="font-heading text-2xl font-black tracking-tight text-clay-foreground">
              Hepa<span className="text-clay-accent">Care</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="font-bold text-clay-muted hover:text-clay-accent transition-colors duration-200">Fitur</a>
            <a href="#about" className="font-bold text-clay-muted hover:text-clay-accent transition-colors duration-200">Tentang</a>
            <ClayButton size="sm">Coba Gratis</ClayButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 font-bold shadow-clayCard backdrop-blur-xl">
            <span className="flex h-2 w-2 rounded-full bg-clay-success animate-pulse"></span>
            <span className="text-sm">Asisten Kesehatan Hati AI Anda</span>
          </div>
          
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8">
            <span className="clay-text-gradient block">Perlindungan Optimal</span>
            Untuk Hati Anda.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-clay-muted mb-12 max-w-2xl leading-relaxed">
            Pantau kesehatan hati secara mandiri dan komprehensif. HepaCare menggunakan teknologi AI untuk merawat Anda setiap hari.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <ClayButton size="lg" className="w-full sm:w-auto">
              Mulai Pantau Sekarang
            </ClayButton>
            <ClayButton variant="secondary" size="lg" className="w-full sm:w-auto text-clay-accent">
              Pelajari Fitur
            </ClayButton>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-40">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Fitur Unggulan</h2>
          <p className="text-lg text-clay-muted font-medium max-w-2xl mx-auto">
            Sistem terintegrasi yang dirancang untuk mendukung gaya hidup sehat dan mencegah gangguan fungsi hati.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Dashboard (Hero feature card) */}
          <ClayCard className="md:col-span-2 md:row-span-2 group">
            <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-gradient-to-br from-[#8B5CF6] to-[#4C1D95] mb-8 shadow-clayButton transition-transform duration-300 group-hover:scale-110">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-heading text-3xl font-bold mb-4">1. Dashboard Pintar</h3>
            <p className="text-xl text-clay-muted leading-relaxed max-w-md">
              Menampilkan ringkasan kondisi kesehatan Anda, termasuk hasil analisis risiko secara real-time dan catatan jurnal kesehatan harian.
            </p>
            {/* Decorative clay element floating in the card */}
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-gradient-to-tr from-[#A78BFA]/20 to-[#7C3AED]/10 blur-2xl pointer-events-none" />
          </ClayCard>

          {/* 2. Profil Saya */}
          <ClayCard>
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#F472B6] to-[#DB2777] mb-6 shadow-clayButton">
              <User className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">2. Profil Saya</h3>
            <p className="text-clay-muted">
              Kelola data pribadi dan riwayat kesehatan yang menjadi dasar analisis sistem AI kami.
            </p>
          </ClayCard>

          {/* 3. Cek Kesehatan */}
          <ClayCard>
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#38BDF8] to-[#0284C7] mb-6 shadow-clayButton">
              <HeartPulse className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">3. Cek Kesehatan</h3>
            <p className="text-clay-muted">
              Fitur penilaian risiko penyakit hati otomatis dan analisis kondisi kesehatan akurat.
            </p>
          </ClayCard>

          {/* 4. Analisis Diet */}
          <ClayCard>
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#34D399] to-[#059669] mb-6 shadow-clayButton">
              <Utensils className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">4. Analisis Diet</h3>
            <p className="text-clay-muted">
              Mengevaluasi pola makan harian dan memberikan rekomendasi nutrisi hati yang sesuai.
            </p>
          </ClayCard>

          {/* 5. Jurnal Kesehatan */}
          <ClayCard>
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#FBBF24] to-[#D97706] mb-6 shadow-clayButton">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">5. Jurnal Kesehatan</h3>
            <p className="text-clay-muted">
              Catat aktivitas, hasil pemeriksaan klinis, serta perkembangan kondisi kesehatan Anda.
            </p>
          </ClayCard>

          {/* 6. Edukasi */}
          <ClayCard>
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#818CF8] to-[#4338CA] mb-6 shadow-clayButton">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">6. Edukasi Terpadu</h3>
            <p className="text-clay-muted">
              Artikel pemahaman, video infografik, dan berita terbaru seputar cara merawat kesehatan hati.
            </p>
          </ClayCard>

          {/* 7. Konsultasi dan Fasilitas Kesehatan */}
          <ClayCard className="md:col-span-2">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-[24px] bg-gradient-to-br from-[#FB7185] to-[#E11D48] shadow-clayButton">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold mb-2">7. Konsultasi & Layanan Medis</h3>
                <p className="text-clay-muted max-w-lg">
                  Berkomunikasi langsung dengan tenaga spesialis medis serta dapatkan penunjuk jalan ke fasilitas rujukan terdekat.
                </p>
              </div>
            </div>
          </ClayCard>

          {/* 8. Fitur Pendukung */}
          <ClayCard>
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#2DD4BF] to-[#0F766E] mb-6 shadow-clayButton">
              <Layers className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">8. Fitur Pendukung</h3>
            <p className="text-clay-muted">
              Nikmati pengingat obat harian, peta navigasi kesehatan, dan panduan cerdas dari AI Chatbot kami.
            </p>
          </ClayCard>

        </div>
      </section>
      
      {/* Footer minimal */}
      <footer className="w-full pb-10 text-center">
        <p className="font-bold text-clay-muted">© 2026 HepaCare Digital Health. All rights reserved.</p>
      </footer>
    </main>
  );
}
