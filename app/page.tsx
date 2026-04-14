import React from "react";
import Link from "next/link";
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
  Layers,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  Mail,
  Phone
} from "lucide-react";
import { Accordion } from "../components/Accordion";

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
            <Link href="/login" className="font-bold text-clay-foreground hover:text-clay-accent transition-colors duration-200">Login</Link>
            <Link href="/register">
              <ClayButton size="sm">Coba Gratis</ClayButton>
            </Link>
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto mt-4">
            <Link href="/register" className="w-full sm:w-auto">
              <ClayButton size="lg" className="w-full sm:w-auto">
                Mulai Pantau Sekarang
              </ClayButton>
            </Link>
            
            <Link href="/pelajari-fitur" className="w-full sm:w-auto">
              <ClayButton variant="secondary" size="lg" className="w-full sm:w-auto text-clay-accent">
                Pelajari Fitur
              </ClayButton>
            </Link>
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
            <h3 className="font-heading text-3xl font-bold mb-4">Dashboard Pintar</h3>
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
            <h3 className="font-heading text-2xl font-bold mb-3">Profil Saya</h3>
            <p className="text-clay-muted">
              Kelola data pribadi dan riwayat kesehatan yang menjadi dasar analisis sistem AI kami.
            </p>
          </ClayCard>

          {/* 3. Cek Kesehatan */}
          <ClayCard>
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#38BDF8] to-[#0284C7] mb-6 shadow-clayButton">
              <HeartPulse className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">Cek Kesehatan</h3>
            <p className="text-clay-muted">
              Fitur penilaian risiko penyakit hati otomatis dan analisis kondisi kesehatan akurat.
            </p>
          </ClayCard>

          {/* 4. Analisis Diet */}
          <ClayCard>
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#34D399] to-[#059669] mb-6 shadow-clayButton">
              <Utensils className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">Analisis Diet</h3>
            <p className="text-clay-muted">
              Mengevaluasi pola makan harian dan memberikan rekomendasi nutrisi hati yang sesuai.
            </p>
          </ClayCard>

          {/* 5. Jurnal Kesehatan */}
          <ClayCard>
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#FBBF24] to-[#D97706] mb-6 shadow-clayButton">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">Jurnal Kesehatan</h3>
            <p className="text-clay-muted">
              Catat aktivitas, hasil pemeriksaan klinis, serta perkembangan kondisi kesehatan Anda.
            </p>
          </ClayCard>

          {/* 6. Edukasi */}
          <ClayCard>
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#818CF8] to-[#4338CA] mb-6 shadow-clayButton">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">Edukasi Terpadu</h3>
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
                <h3 className="font-heading text-2xl font-bold mb-2">Konsultasi & Layanan Medis</h3>
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
            <h3 className="font-heading text-2xl font-bold mb-3">Fitur Pendukung</h3>
            <p className="text-clay-muted">
              Nikmati pengingat obat harian, peta navigasi kesehatan, dan panduan cerdas dari AI Chatbot kami.
            </p>
          </ClayCard>

        </div>
      </section>
      
      {/* How Hepa Care Works */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-32">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Bagaimana HepaCare Bekerja?</h2>
          <p className="text-lg text-clay-muted font-medium max-w-2xl mx-auto">
            Pendekatan cerdas tiga langkah untuk kesehatan hati yang optimal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
           <div className="hidden md:block absolute top-[40px] left-[20%] right-[20%] h-1 bg-clay-muted/20 z-0"></div>
           {[
             { step: "1", title: "Input Data", desc: "Masukkan ritel data kesehatan Anda secara berkala ke dalam jurnal sistem kami." },
             { step: "2", title: "Analisis AI", desc: "Asisten AI kami memproses korelasi data untuk mendeteksi risiko dini." },
             { step: "3", title: "Rekomendasi", desc: "Dapatkan saran diet, gaya hidup, atau jadwal rujukan ke dokter terdekat." }
           ].map((item, i) => (
             <div key={i} className="relative z-10 flex flex-col items-center text-center group">
               <div className="w-20 h-20 rounded-[24px] bg-white shadow-clayButton flex items-center justify-center font-heading text-3xl font-black text-clay-accent mb-6 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                 {item.step}
               </div>
               <h3 className="font-heading text-2xl font-bold mb-3">{item.title}</h3>
               <p className="text-clay-muted font-medium">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Why Choose Hepa-Care */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-32">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
             <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-[48px] shadow-clayCard transform rotate-3 scale-105 transition-transform duration-500 hover:-rotate-3"></div>
                <div className="absolute inset-0 bg-white/80 rounded-[48px] shadow-clayCard p-8 flex flex-col justify-center items-center text-center backdrop-blur-xl">
                  <ShieldCheck className="h-24 w-24 text-[#10B981] mb-6 drop-shadow-md" />
                  <h3 className="font-heading text-3xl font-bold mb-4">Aman & Terenkripsi</h3>
                  <p className="text-clay-muted font-medium">Data rekam medis Anda dienkripsi secara end-to-end sesuai standar HIPAA dan privasi nasional.</p>
                </div>
             </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8">Mengapa Memilih HepaCare?</h2>
            <div className="space-y-4">
               {[
                 "Akurasi Diagnostik Awal Hingga 94%",
                 "Rekomendasi Responsif Berbasis Pengguna",
                 "Didukung oleh Ahli Hepatologi Ternama",
                 "Telah Terintegrasi dengan 500+ Rumah Sakit"
               ].map((point, i) => (
                 <div key={i} className="flex items-center gap-4 bg-white/60 p-4 rounded-[24px] shadow-sm backdrop-blur-md transition-all hover:shadow-clayButton hover:-translate-y-1">
                   <div className="flex-shrink-0 w-12 h-12 rounded-[16px] bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-inner">
                     <CheckCircle className="h-6 w-6 text-white" />
                   </div>
                   <span className="font-bold text-clay-foreground text-lg">{point}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lihat Blog Terbaru */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-32">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-2">Lihat Blog Terbaru</h2>
            <p className="text-clay-muted font-medium">Temukan wawasan kesehatan hati terkini.</p>
          </div>
          <ClayButton variant="ghost" className="hidden md:flex gap-2">Lihat Semua <ArrowRight className="w-4 h-4" /></ClayButton>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { title: "5 Makanan Pantangan Untuk Penderita Fatty Liver", category: "Gaya Hidup", min: "5 min read",  color: "from-[#FBBF24] to-[#D97706]" },
             { title: "Mengenal Perbedaan Hepatitis A, B, dan C Secara Mendalam", category: "Edukasi Medis", min: "8 min read", color: "from-[#8B5CF6] to-[#4C1D95]" },
             { title: "Gerakan Olahraga Yang Tepat Untuk Menjaga Fungsi Hati", category: "Kebugaran", min: "4 min read", color: "from-[#38BDF8] to-[#0284C7]" }
           ].map((blog, i) => (
             <ClayCard key={i} glass={false} className="flex flex-col h-full bg-white !p-6 hover:-translate-y-3 cursor-pointer">
                <div className={`w-full h-40 rounded-[24px] bg-gradient-to-br ${blog.color} mb-6 shadow-inner`} />
                <div className="flex gap-4 mb-3 text-sm font-bold text-clay-muted">
                  <span className="text-clay-accent">{blog.category}</span>
                  <span>•</span>
                  <span>{blog.min}</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-4 line-clamp-2 leading-snug">{blog.title}</h3>
                <div className="mt-auto">
                    <span className="font-bold text-clay-foreground underline hover:text-clay-accent">Baca Selengkapnya</span>
                </div>
             </ClayCard>
           ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <ClayButton variant="outline" className="w-full">Lihat Semua Blog</ClayButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-32">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">Pertanyaan Populer (FAQ)</h2>
          <p className="text-clay-muted font-medium">Punya pertanyaan seputar HepaCare? Kami punya jawabannya.</p>
        </div>
        <div className="space-y-4">
          <Accordion 
            question="Apakah aplikasi HepaCare menggantikan diagnosis dokter?"
            answer="Tidak. HepaCare adalah alat bantu deteksi dini dan pemantauan harian. Anda tetap disarankan berkonsultasi dengan profesional medis melalui layanan rujukan kami untuk diagnosis final dan penanganan medis." />
          <Accordion 
            question="Apakah profil kesehatan saya aman?"
            answer="Sangat aman. Kami mematuhi standar enkripsi medis tingkat tinggi (HIPAA Compliance) dan Undang-Undang Perlindungan Data Pribadi (PDP) Indonesia." />
          <Accordion 
            question="Apakah ada biaya langganan bulanan?"
            answer="HepaCare menyediakan modul dasar secara gratis. Untuk akses ke Konsultasi Medis Langsung dan Analisis AI Deep Learning tanpa batas, kami menawarkan paket premium yang sangat terjangkau." />
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-32">
        <div className="bg-gradient-to-br from-[#7C3AED] to-[#DB2777] rounded-[48px] p-8 sm:p-12 md:p-20 text-center shadow-clayCard relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[#0EA5E9]/30 rounded-full blur-3xl pointer-events-none"></div>
          
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-white mb-6 relative z-10 leading-tight">Mulai Rawat Hati Anda Hari Ini</h2>
          <p className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto relative z-10">
            Berlangganan newsletter kami untuk panduan kesehatan eksklusif mingguan langsung dari ahli hepatologi.
          </p>
          
          <div className="max-w-md mx-auto relative z-10 flex flex-col sm:flex-row gap-2 w-full bg-white/20 p-2 rounded-[24px] backdrop-blur-md">
            <div className="flex-grow flex items-center pl-4 text-white h-12">
              <Mail className="h-5 w-5 mr-3 opacity-80" />
              <input type="email" placeholder="Masukkan email Anda" className="bg-transparent border-0 text-white placeholder:text-white/70 focus:ring-0 w-full outline-none font-medium placeholder:font-medium" />
            </div>
            <ClayButton variant="secondary" className="h-12 w-full sm:w-32 rounded-[16px] flex-shrink-0 mt-2 sm:mt-0">Daftar</ClayButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white rounded-t-[48px] px-4 pt-16 pb-28 md:pb-16 shadow-[0_-20px_60px_rgba(205,198,217,0.3)] relative z-20 mx-0 sm:mx-4 lg:mx-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-12 border-b-2 border-clay-canvas grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center sm:text-left">
           <div className="md:col-span-1">
             <div className="flex items-center justify-center sm:justify-start gap-2 mb-6">
               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] shadow-sm">
                 <HeartPulse className="h-5 w-5 text-white" />
               </div>
               <span className="font-heading text-2xl font-black tracking-tight text-clay-foreground">
                 Hepa<span className="text-clay-accent">Care</span>
               </span>
             </div>
             <p className="text-clay-muted text-sm font-medium leading-relaxed">
               Digital health companion untuk mendampingi setiap langkah Anda menjaga fungsi optimal hati Anda.
             </p>
           </div>
           <div>
             <h4 className="font-bold mb-5 text-lg">Fitur Utama</h4>
             <ul className="text-sm text-clay-muted space-y-4 font-medium">
               <li><a href="#" className="hover:text-clay-accent transition-colors">Dashboard Pintar</a></li>
               <li><a href="#" className="hover:text-clay-accent transition-colors">Jurnal Kesehatan</a></li>
               <li><a href="#" className="hover:text-clay-accent transition-colors">Konsultasi Medis</a></li>
               <li><a href="#" className="hover:text-clay-accent transition-colors">AI Analisis Diet</a></li>
             </ul>
           </div>
           <div>
             <h4 className="font-bold mb-5 text-lg">Perusahaan</h4>
             <ul className="text-sm text-clay-muted space-y-4 font-medium">
               <li><a href="#" className="hover:text-clay-accent transition-colors">Tentang Kami</a></li>
               <li><a href="#" className="hover:text-clay-accent transition-colors">Tim Klinis</a></li>
               <li><a href="#" className="hover:text-clay-accent transition-colors">Karir</a></li>
               <li><a href="#" className="hover:text-clay-accent transition-colors">Hubungi Kami</a></li>
             </ul>
           </div>
           <div>
             <h4 className="font-bold mb-5 text-lg">Legal</h4>
             <ul className="text-sm text-clay-muted space-y-4 font-medium">
               <li><a href="#" className="hover:text-clay-accent transition-colors">Syarat & Ketentuan</a></li>
               <li><a href="#" className="hover:text-clay-accent transition-colors">Kebijakan Privasi</a></li>
               <li><a href="#" className="hover:text-clay-accent transition-colors">Kebijakan Cookie</a></li>
             </ul>
           </div>
        </div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-8 text-center text-clay-muted font-bold text-sm">
          © 2026 HepaCare Digital Health. All rights reserved.
        </div>
      </footer>
      
      {/* Mobile Bottom Navbar */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="bg-white/80 backdrop-blur-xl h-[72px] rounded-[32px] shadow-clayCard flex items-center justify-around px-2 border border-white/40 leading-none">
          <a href="#" className="flex flex-col items-center justify-center w-14 h-14 text-clay-accent transition-transform active:scale-90">
            <Activity className="h-5 w-5 mb-1.5" />
            <span className="text-[10px] font-bold">Home</span>
          </a>
          <a href="#features" className="flex flex-col items-center justify-center w-14 h-14 text-clay-muted hover:text-clay-accent transition-transform active:scale-90">
            <Layers className="h-5 w-5 mb-1.5" />
            <span className="text-[10px] font-bold">Fitur</span>
          </a>
          <a href="#" className="flex flex-col items-center w-14 group">
             <div className="w-14 h-14 rounded-[24px] bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-clayButton transform -translate-y-5 transition-transform group-active:scale-90 border-[3px] border-[#F4F1FA]">
                <Phone className="h-6 w-6 text-white" />
             </div>
          </a>
          <a href="#" className="flex flex-col items-center justify-center w-14 h-14 text-clay-muted hover:text-clay-accent transition-transform active:scale-90">
            <BookOpen className="h-5 w-5 mb-1.5" />
            <span className="text-[10px] font-bold">Blog</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center w-14 h-14 text-clay-muted hover:text-clay-accent transition-transform active:scale-90">
            <User className="h-5 w-5 mb-1.5" />
            <span className="text-[10px] font-bold">Profil</span>
          </a>
        </div>
      </div>
    </main>
  );
}
