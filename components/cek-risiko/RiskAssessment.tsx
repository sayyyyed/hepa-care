"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Activity, ArrowRight, Heart } from "lucide-react";
import { ClayCard } from "../ClayCard";
import { ClayButton } from "../ClayButton";
import { useRouter } from "next/navigation";

export interface RiskAssessmentAnswers {
  age: number;
  gender: "L" | "P" | "";
  height: number;
  weight: number;
  alcohol: number; // 0: tidak, 1: kadang, 2: sering
  activity: number; // 0: tinggi, 1: sedang, 2: rendah
  diet: number; // 0: sehat, 1: seimbang, 2: tinggi lemak
  medicalHistory: string[]; // hepatitisB, hepatitisC, fattyLiver
  diabetes: boolean;
  cholesterol: boolean;
  familyHistory: boolean;
}

const defaultAnswers: RiskAssessmentAnswers = {
  age: 30,
  gender: "",
  height: 165,
  weight: 65,
  alcohol: 0,
  activity: 1,
  diet: 1,
  medicalHistory: [],
  diabetes: false,
  cholesterol: false,
  familyHistory: false,
};

type Step = "intro" | "questions" | "analyzing" | "results";

interface QuestionDef {
  id: string;
  title: string;
  category: string;
  type: "slider" | "stepper" | "single-choice" | "multi-choice" | "boolean";
  options?: { label: string; value: any }[];
  field: keyof RiskAssessmentAnswers | string;
}

const stepsConfig: QuestionDef[] = [
  { id: "q1", title: "Berapa usia Anda?", category: "Demografi", type: "stepper", field: "age" },
  { id: "q2", title: "Apa jenis kelamin Anda?", category: "Demografi", type: "single-choice", field: "gender", options: [{ label: "Laki-laki", value: "L" }, { label: "Perempuan", value: "P" }] },
  { id: "q3", title: "Berapa tinggi badan Anda (cm)?", category: "Data Fisik", type: "stepper", field: "height" },
  { id: "q4", title: "Berapa berat badan Anda (kg)?", category: "Data Fisik", type: "stepper", field: "weight" },
  { id: "q5", title: "Seberapa sering Anda mengonsumsi alkohol?", category: "Gaya Hidup", type: "single-choice", field: "alcohol", options: [{ label: "Tidak Pernah", value: 0 }, { label: "Kadang-kadang", value: 1 }, { label: "Sering", value: 2 }] },
  { id: "q6", title: "Bagaimana tingkat aktivitas fisik Anda?", category: "Gaya Hidup", type: "single-choice", field: "activity", options: [{ label: "Tinggi (Sering olahraga)", value: 0 }, { label: "Sedang", value: 1 }, { label: "Rendah (Jarang bergerak)", value: 2 }] },
  { id: "q7", title: "Bagaimana pola makan Anda sehari-hari?", category: "Gaya Hidup", type: "single-choice", field: "diet", options: [{ label: "Sangat Sehat", value: 0 }, { label: "Seimbang", value: 1 }, { label: "Tinggi Lemak / Gorengan", value: 2 }] },
  { id: "q8", title: "Apakah Anda memiliki riwayat medis berikut?", category: "Riwayat Medis", type: "multi-choice", field: "medicalHistory", options: [{ label: "Hepatitis B", value: "hepatitisB" }, { label: "Hepatitis C", value: "hepatitisC" }, { label: "Fatty Liver", value: "fattyLiver" }] },
  { id: "q9", title: "Apakah Anda menderita Diabetes?", category: "Kondisi Metabolik", type: "boolean", field: "diabetes" },
  { id: "q10", title: "Apakah Anda memiliki Kolesterol Tinggi?", category: "Kondisi Metabolik", type: "boolean", field: "cholesterol" },
  { id: "q11", title: "Apakah ada riwayat penyakit hati di keluarga Anda?", category: "Riwayat Keluarga", type: "boolean", field: "familyHistory" },
];

export function RiskAssessment() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<RiskAssessmentAnswers>(defaultAnswers);
  const [scoreData, setScoreData] = useState<{ frs: number, riskLevel: string, factors: string[] } | null>(null);
  const [analyzingMessage, setAnalyzingMessage] = useState("Menganalisis gaya hidupmu...");

  // Progress computation
  const totalQuestions = stepsConfig.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const currentQ = stepsConfig[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      startAnalysis();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      setStep("intro");
    }
  };

  const startAnalysis = () => {
    setStep("analyzing");
    
    // Simulate AI loading steps
    setTimeout(() => setAnalyzingMessage("Menghitung faktor risiko..."), 1500);
    setTimeout(() => setAnalyzingMessage("Menyusun hasil analitik..."), 3000);
    
    setTimeout(() => {
      calculateRisk();
      setStep("results");
    }, 4500);
  };

  const calculateRisk = () => {
    // A. Base Risk Factor (BRF) - max 15
    let brf = 0;
    const bmi = answers.weight / Math.pow(answers.height / 100, 2);
    
    if (bmi > 30) brf += 3;
    else if (bmi > 25) brf += 2;

    if (answers.alcohol === 2) brf += 3;
    else if (answers.alcohol === 1) brf += 1;

    if (answers.activity === 2) brf += 2;
    else if (answers.activity === 1) brf += 1;

    if (answers.diet === 2) brf += 2;

    if (answers.diabetes) brf += 2;
    if (answers.cholesterol) brf += 2;

    answers.medicalHistory.forEach(history => {
      if (history === "hepatitisB" || history === "hepatitisC") brf += 3;
      if (history === "fattyLiver") brf += 2;
    });

    if (answers.familyHistory) brf += 1;

    brf = Math.min(brf, 15);

    // B. Clinical Proxy Score (CPS)
    // CPS = 0.02 × Age + 0.8 × BMI + 1.5 × Diabetes + 1.2 × Alcohol + 1.0 × Inactivity
    const cps = (0.02 * answers.age) + (0.8 * bmi) + (1.5 * (answers.diabetes ? 1 : 0)) + (1.2 * answers.alcohol) + (1.0 * answers.activity);
    
    // Normalisasi: CPS_norm = (CPS / 60) × 10
    const cpsNorm = (cps / 60) * 10;

    // C. Final Risk Score (FRS)
    const frs = (0.6 * brf) + (0.4 * cpsNorm);

    let riskLevel = "Rendah";
    if (frs >= 10) riskLevel = "Tinggi";
    else if (frs >= 5) riskLevel = "Sedang";

    // Factors
    const factors = [];
    if (bmi > 25) factors.push("BMI");
    if (answers.activity > 0) factors.push("Aktivitas");
    if (answers.alcohol > 0) factors.push("Alkohol");
    if (answers.diet > 1) factors.push("Pola Makan");

    setScoreData({
      frs,
      riskLevel,
      factors: factors.length > 0 ? factors : ["Kondisi Anda relatif baik"]
    });
  };

  const handleUpdateAnswer = (field: keyof RiskAssessmentAnswers, value: any) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiChoiceToggle = (field: keyof RiskAssessmentAnswers, value: string) => {
    setAnswers(prev => {
      const currentList: string[] = (prev[field] as string[]) || [];
      const isSelected = currentList.includes(value);
      return {
        ...prev,
        [field]: isSelected ? currentList.filter(v => v !== value) : [...currentList, value]
      };
    });
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-clay-canvas min-h-screen">
      {step === "intro" && (
        <div className="flex flex-col items-center justify-center p-6 min-h-screen text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-clayButton flex items-center justify-center mb-8">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h1 className="font-heading text-3xl font-black text-clay-foreground mb-4">Cek Risiko Kesehatan Hatimu</h1>
          <p className="text-clay-muted font-medium mb-8 text-lg">Hanya butuh 1–2 menit untuk mengetahui risikomu</p>
          
          <div className="bg-white/60 p-6 rounded-[32px] shadow-clayCard backdrop-blur-md mb-12 w-full text-left">
            <h3 className="font-bold text-sm text-clay-accent mb-3 uppercase tracking-wider">Informasi</h3>
            <ul className="space-y-3 font-medium text-clay-foreground text-sm">
              <li className="flex gap-2 items-start"><Activity className="w-5 h-5 text-amber-500 shrink-0" /> Penilaian ini berdasarkan faktor risiko medis umum</li>
              <li className="flex gap-2 items-start"><Activity className="w-5 h-5 text-amber-500 shrink-0" /> Bukan diagnosis medis pengganti dokter</li>
            </ul>
          </div>

          <ClayButton className="w-full text-lg py-6" onClick={() => setStep("questions")}>
            Mulai Perjalanan
          </ClayButton>
        </div>
      )}

      {step === "questions" && currentQ && (
        <div className="flex flex-col min-h-screen p-6 pt-12 animate-in fade-in duration-500 relative">
          <button onClick={handlePrevQuestion} className="absolute top-6 left-6 w-10 h-10 bg-white shadow-clayButton rounded-xl flex items-center justify-center text-clay-muted hover:text-clay-accent transition-colors">
            <ChevronLeft size={20} />
          </button>

          {/* Progress Bar */}
          <div className="w-full flex items-center justify-center mb-12 mt-4">
             <div className="w-full max-w-xs relative h-3 bg-[#EFEBF5] rounded-full shadow-clayPressed overflow-hidden">
                <div 
                  className="absolute h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${progress}%` }} 
                />
             </div>
             <span className="ml-4 text-xs font-black text-clay-muted w-10">{currentQuestionIndex + 1}/{totalQuestions}</span>
          </div>

          <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
            <span className="text-xs font-black text-clay-accent mb-4 uppercase tracking-widest text-center">{currentQ.category}</span>
            <h2 className="font-heading text-2xl md:text-3xl font-black text-clay-foreground text-center mb-10 leading-snug">
              {currentQ.title}
            </h2>

            <div className="w-full space-y-4">
              {currentQ.type === "single-choice" && currentQ.options?.map((opt, i) => {
                const isSelected = answers[currentQ.field as keyof RiskAssessmentAnswers] === opt.value;
                return (
                  <button 
                    key={i}
                    onClick={() => handleUpdateAnswer(currentQ.field as keyof RiskAssessmentAnswers, opt.value)}
                    className={`w-full p-5 rounded-[24px] transition-all font-bold text-left flex justify-between items-center ${
                      isSelected 
                        ? 'bg-clay-accent text-white shadow-clayButton' 
                        : 'bg-white text-clay-foreground shadow-clayCard hover:bg-slate-50'
                    }`}
                  >
                    {opt.label}
                    {isSelected && <Activity size={20} className="text-white" />}
                  </button>
                )
              })}

              {currentQ.type === "multi-choice" && currentQ.options?.map((opt, i) => {
                const values = (answers[currentQ.field as keyof RiskAssessmentAnswers] as string[]) || [];
                const isSelected = values.includes(opt.value);
                return (
                  <button 
                    key={i}
                    onClick={() => handleMultiChoiceToggle(currentQ.field as keyof RiskAssessmentAnswers, opt.value)}
                    className={`w-full p-5 rounded-[24px] transition-all font-bold text-left flex justify-between items-center ${
                      isSelected 
                        ? 'bg-clay-accent text-white shadow-clayButton' 
                        : 'bg-white text-clay-foreground shadow-clayCard hover:bg-slate-50'
                    }`}
                  >
                    {opt.label}
                    {isSelected && <Activity size={20} className="text-white" />}
                  </button>
                )
              })}

              {currentQ.type === "boolean" && (
                <div className="flex gap-4">
                  <button 
                    onClick={() => handleUpdateAnswer(currentQ.field as keyof RiskAssessmentAnswers, true)}
                    className={`flex-1 p-5 rounded-[24px] transition-all font-bold text-center ${
                      answers[currentQ.field as keyof RiskAssessmentAnswers] === true
                        ? 'bg-clay-accent text-white shadow-clayButton' 
                        : 'bg-white text-clay-foreground shadow-clayCard hover:bg-slate-50'
                    }`}
                  >
                    Ya
                  </button>
                  <button 
                    onClick={() => handleUpdateAnswer(currentQ.field as keyof RiskAssessmentAnswers, false)}
                    className={`flex-1 p-5 rounded-[24px] transition-all font-bold text-center ${
                      answers[currentQ.field as keyof RiskAssessmentAnswers] === false
                        ? 'bg-clay-success text-white shadow-clayButton' 
                        : 'bg-white text-clay-foreground shadow-clayCard hover:bg-slate-50'
                    }`}
                  >
                    Tidak
                  </button>
                </div>
              )}

              {currentQ.type === "stepper" && (
                <div className="flex items-center justify-center gap-6">
                  <button 
                    onClick={() => handleUpdateAnswer(currentQ.field as keyof RiskAssessmentAnswers, (answers[currentQ.field as keyof RiskAssessmentAnswers] as number) - 1)}
                    className="w-16 h-16 rounded-[24px] bg-white shadow-clayCard flex items-center justify-center text-3xl font-black text-clay-accent hover:bg-slate-50 transition-all active:scale-95"
                  >
                    -
                  </button>
                  <div className="w-32 h-32 rounded-full bg-[#EFEBF5] shadow-clayPressed flex items-center justify-center">
                    <span className="text-4xl font-black text-clay-foreground">{answers[currentQ.field as keyof RiskAssessmentAnswers] as number}</span>
                  </div>
                  <button 
                    onClick={() => handleUpdateAnswer(currentQ.field as keyof RiskAssessmentAnswers, (answers[currentQ.field as keyof RiskAssessmentAnswers] as number) + 1)}
                    className="w-16 h-16 rounded-[24px] bg-white shadow-clayCard flex items-center justify-center text-3xl font-black text-clay-accent hover:bg-slate-50 transition-all active:scale-95"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
            
            <div className="mt-12">
               <ClayButton className="w-full flex items-center justify-center gap-2" onClick={handleNextQuestion}>
                 Lanjut <ArrowRight size={20} />
               </ClayButton>
            </div>
          </div>
        </div>
      )}

      {step === "analyzing" && (
        <div className="flex flex-col items-center justify-center p-6 min-h-screen text-center animate-in fade-in duration-500">
          <div className="relative w-32 h-32 flex items-center justify-center mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-indigo-200 animate-ping opacity-75"></div>
            <div className="absolute inset-2 rounded-full border-4 border-clay-accent/30 animate-spin"></div>
            <div className="w-20 h-20 rounded-full bg-clay-accent text-white flex items-center justify-center shadow-clayButton z-10">
              <Activity size={32} className="animate-pulse" />
            </div>
          </div>
          <h2 className="font-heading text-2xl font-black text-clay-foreground transition-opacity duration-300">
            {analyzingMessage}
          </h2>
        </div>
      )}

      {step === "results" && scoreData && (
        <div className="flex flex-col p-6 min-h-screen animate-in fade-in slide-in-from-bottom-8 duration-700 bg-clay-canvas pb-24">
          <h1 className="font-heading text-3xl font-black text-clay-foreground mb-6 text-center mt-6">Hasil Analisis</h1>
          
          <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-8 -mx-6 px-6">
            
            {/* Card 1: Ringkasan Risiko */}
            <ClayCard className="snap-center shrink-0 w-[280px] flex flex-col items-center justify-center text-center !p-8">
              <h3 className="font-bold text-sm text-clay-muted mb-4">RISIKO PENYAKIT HATI</h3>
              <div className={`w-32 h-32 rounded-full flex items-center justify-center shadow-clayButton mb-6 ${
                scoreData.riskLevel === 'Rendah' ? 'bg-clay-success' : 
                scoreData.riskLevel === 'Sedang' ? 'bg-amber-500' : 'bg-red-500'
              }`}>
                <span className="text-3xl font-black text-white uppercase">{scoreData.riskLevel}</span>
              </div>
              <p className="font-medium text-slate-500 text-sm">Berdasarkan hasil kalkulasi model AI & Klinis</p>
            </ClayCard>

            {/* Card 2: Faktor Utama */}
            <ClayCard className="snap-center shrink-0 w-[280px] flex flex-col justify-center !p-8">
              <h3 className="font-bold text-sm text-clay-muted mb-4 uppercase text-center">Faktor Utama</h3>
              <div className="space-y-3">
                {scoreData.factors.map((f, i) => (
                  <div key={i} className="bg-[#EFEBF5] p-4 rounded-2xl flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="font-bold text-clay-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </ClayCard>

            {/* Card 3: Insight & Rekomendasi */}
            <ClayCard className="snap-center shrink-0 w-[280px] flex flex-col justify-center !p-8">
              <h3 className="font-bold text-sm text-clay-muted mb-4 uppercase text-center">Rekomendasi Aksi</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-clay-success text-white flex items-center justify-center shrink-0 font-bold text-xs">1</div>
                  <p className="font-medium text-sm text-clay-foreground">Jalan kaki ringan 15 menit per hari</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-clay-success text-white flex items-center justify-center shrink-0 font-bold text-xs">2</div>
                  <p className="font-medium text-sm text-clay-foreground">Kurangi makanan berminyak / gorengan</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-clay-success text-white flex items-center justify-center shrink-0 font-bold text-xs">3</div>
                  <p className="font-medium text-sm text-clay-foreground">Perbanyak asupan air putih</p>
                </li>
              </ul>
            </ClayCard>

          </div>

          <div className="mt-8 bg-white/60 p-5 rounded-3xl shadow-clayCard backdrop-blur-md">
            <p className="text-[10px] text-clay-muted font-bold text-justify leading-relaxed">
              DISCLAIMER: Hasil ini merupakan estimasi berdasarkan faktor risiko umum dan bukan diagnosis medis. Konsultasikan dengan tenaga kesehatan profesional (dokter) untuk pemeriksaan lebih lanjut dan tata laksana medis yang tepat.
            </p>
          </div>

          <div className="fixed bottom-6 left-6 right-6 flex flex-col gap-3 max-w-lg mx-auto">
             <ClayButton 
               className="w-full shadow-clayButton"
               onClick={() => router.push('/dashboard/jurnal')}
             >
               Mulai Pantau Kesehatan
             </ClayButton>
             <ClayButton
               variant="ghost" 
               className="w-full text-slate-500 bg-white shadow-clayCard"
               onClick={() => router.push('/dashboard')}
             >
               Kembali ke Beranda
             </ClayButton>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
