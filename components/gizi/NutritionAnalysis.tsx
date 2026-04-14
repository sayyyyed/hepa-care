"use client";

import React, { useState } from "react";
import { ChevronLeft, ArrowRight, Heart, Utensils, Apple, Info, Activity } from "lucide-react";
import { ClayCard } from "../ClayCard";
import { ClayButton } from "../ClayButton";
import { useRouter } from "next/navigation";

interface FoodItem {
  id: string;
  name: string;
  icon: string;
  nutrients: {
    fiber: number;
    protein: number;
    healthyFat: number;
    saturatedFat: number;
    sugar: number;
    upf: number; // ultra-processed food penalty
  };
}

const foodDatabase: FoodItem[] = [
  { id: "nasi_putih", name: "Nasi Putih", icon: "🍚", nutrients: { fiber: 1, protein: 2, healthyFat: 0, saturatedFat: 0, sugar: 0, upf: 0 } },
  { id: "nasi_merah", name: "Nasi Merah", icon: "🍛", nutrients: { fiber: 4, protein: 3, healthyFat: 0, saturatedFat: 0, sugar: 0, upf: 0 } },
  { id: "sayuran", name: "Sayuran", icon: "🥗", nutrients: { fiber: 5, protein: 1, healthyFat: 0, saturatedFat: 0, sugar: 0, upf: 0 } },
  { id: "buah", name: "Buah-buahan", icon: "🍎", nutrients: { fiber: 3, protein: 0, healthyFat: 0, saturatedFat: 0, sugar: 3, upf: 0 } },
  { id: "ayam_panggang", name: "Ayam Panggang/Rebus", icon: "🍗", nutrients: { fiber: 0, protein: 5, healthyFat: 1, saturatedFat: 1, sugar: 0, upf: 0 } },
  { id: "ayam_goreng", name: "Ayam Goreng", icon: "🍤", nutrients: { fiber: 0, protein: 4, healthyFat: 0, saturatedFat: 4, sugar: 0, upf: 0 } },
  { id: "ikan", name: "Ikan", icon: "🐟", nutrients: { fiber: 0, protein: 5, healthyFat: 4, saturatedFat: 0, sugar: 0, upf: 0 } },
  { id: "fast_food", name: "Fast Food", icon: "🍔", nutrients: { fiber: 1, protein: 3, healthyFat: 0, saturatedFat: 5, sugar: 1, upf: 5 } },
  { id: "gorengan", name: "Gorengan", icon: "🥟", nutrients: { fiber: 0, protein: 1, healthyFat: 0, saturatedFat: 4, sugar: 0, upf: 3 } },
  { id: "minuman_manis", name: "Minuman Manis", icon: "🥤", nutrients: { fiber: 0, protein: 0, healthyFat: 0, saturatedFat: 0, sugar: 5, upf: 2 } },
];

const portionOptions = [
  { value: 0.5, label: "Sedikit" },
  { value: 1.0, label: "Sedang" },
  { value: 1.5, label: "Banyak" },
];

const meals = [
  { id: "breakfast", label: "Sarapan" },
  { id: "lunch", label: "Makan Siang" },
  { id: "dinner", label: "Makan Malam" },
  { id: "snack", label: "Snack/Cemilan" },
];

type Step = "intro" | "meals" | "analyzing" | "results";

export function NutritionAnalysis() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("intro");
  const [currentMealIndex, setCurrentMealIndex] = useState(0);
  
  // State for what was eaten. Structure: { [mealId]: [ { foodId, portion }, ... ] }
  const [mealLog, setMealLog] = useState<{ [key: string]: { foodId: string, portion: number }[] }>({
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: []
  });

  const [analyzingMessage, setAnalyzingMessage] = useState("Menganalisis kandungan nutrisi...");
  const [scoreData, setScoreData] = useState<any>(null);

  const currentMeal = meals[currentMealIndex];
  const currentSelections = mealLog[currentMeal.id] || [];

  const handleNextMeal = () => {
    if (currentMealIndex < meals.length - 1) {
      setCurrentMealIndex(prev => prev + 1);
    } else {
      startAnalysis();
    }
  };

  const handlePrevMeal = () => {
    if (currentMealIndex > 0) {
      setCurrentMealIndex(prev => prev - 1);
    } else {
      setStep("intro");
    }
  };

  const toggleFoodSelect = (foodId: string) => {
    const mealId = currentMeal.id;
    const existing = currentSelections.find(s => s.foodId === foodId);
    if (existing) {
      setMealLog({ ...mealLog, [mealId]: currentSelections.filter(s => s.foodId !== foodId) });
    } else {
      setMealLog({ ...mealLog, [mealId]: [...currentSelections, { foodId, portion: 1.0 }] });
    }
  };

  const updatePortion = (foodId: string, portion: number) => {
    const mealId = currentMeal.id;
    setMealLog({
      ...mealLog,
      [mealId]: currentSelections.map(s => s.foodId === foodId ? { ...s, portion } : s)
    });
  };

  const startAnalysis = () => {
    setStep("analyzing");
    
    // Simulate AI loading steps
    setTimeout(() => setAnalyzingMessage("Membandingkan dengan standar kesehatan..."), 1500);
    setTimeout(() => setAnalyzingMessage("Menyusun rekomendasi diet..."), 3000);
    
    setTimeout(() => {
      calculateDietScore();
      setStep("results");
    }, 4500);
  };

  const calculateDietScore = () => {
    let totalFiber = 0;
    let totalProtein = 0;
    let totalHealthyFat = 0;
    let totalSaturatedFat = 0;
    let totalSugar = 0;
    let totalUpf = 0;

    Object.values(mealLog).forEach(selections => {
      selections.forEach(sel => {
        const item = foodDatabase.find(f => f.id === sel.foodId);
        if (item) {
          totalFiber += item.nutrients.fiber * sel.portion;
          totalProtein += item.nutrients.protein * sel.portion;
          totalHealthyFat += item.nutrients.healthyFat * sel.portion;
          totalSaturatedFat += item.nutrients.saturatedFat * sel.portion;
          totalSugar += item.nutrients.sugar * sel.portion;
          totalUpf += item.nutrients.upf * sel.portion;
        }
      });
    });

    // Score calculation
    const DS_raw = (totalFiber * 2 + totalProtein * 1.5 + totalHealthyFat * 2) - (totalSaturatedFat * 1.5 + totalSugar * 1.5 + totalUpf * 2.5);
    
    // Normalize logic
    let score = Math.min(Math.max((DS_raw + 20) * 2, 10), 100); 
    
    let category = "Tidak Sehat";
    if (score >= 80) category = "Sangat Sehat";
    else if (score >= 60) category = "Cukup Sehat";
    else if (score >= 40) category = "Perlu Perbaikan";

    let liverImpact = "";
    if (totalSaturatedFat > 10 || totalUpf > 10) liverImpact = "Pola ini dapat memicu penumpukan lemak di hati.";
    else if (totalSugar > 10) liverImpact = "Asupan gula berlebih berisiko menyebabkan fatty liver.";
    else if (totalFiber > 10) liverImpact = "Sangat baik! Diet kaya serat membantu metabolisme organ hati.";
    else liverImpact = "Pola makan ini cukup netral bagi kesehatan hati.";

    setScoreData({
      score: Math.round(score),
      category,
      insights: {
        fat: totalSaturatedFat > 8 ? "Tinggi" : (totalSaturatedFat > 4 ? "Sedang" : "Rendah"),
        fiber: totalFiber > 8 ? "Tinggi" : (totalFiber > 4 ? "Sedang" : "Rendah"),
        sugar: totalSugar > 8 ? "Tinggi" : (totalSugar > 4 ? "Sedang" : "Rendah")
      },
      liverImpact
    });
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-clay-canvas min-h-screen relative overflow-x-hidden">
      {step === "intro" && (
        <div className="flex flex-col items-center justify-center p-6 min-h-screen text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-clayButton flex items-center justify-center mb-8 transform hover:scale-105 transition-transform">
            <Utensils className="w-12 h-12 text-white" />
          </div>
          <h1 className="font-heading text-3xl font-black text-clay-foreground mb-4">Yuk lihat pola makanmu hari ini</h1>
          <p className="text-clay-muted font-medium mb-12 text-lg px-4">Kami akan bantu analisis dan beri saran terbaik untuk kesehatan hatimu 🥑</p>
          
          <ClayButton className="w-full text-lg py-6 bg-clay-success hover:bg-emerald-600 shadow-clayButton" onClick={() => setStep("meals")}>
            Mulai Analisis
          </ClayButton>
        </div>
      )}

      {step === "meals" && (
        <div className="flex flex-col min-h-screen p-6 pt-12 animate-in fade-in duration-500">
          <button onClick={handlePrevMeal} className="absolute top-6 left-6 w-10 h-10 bg-white shadow-clayButton rounded-xl flex items-center justify-center text-clay-muted hover:text-clay-accent transition-colors z-10">
            <ChevronLeft size={20} />
          </button>

          {/* Progress Bar */}
          <div className="w-full flex items-center justify-center mb-6 mt-4">
             <div className="w-full max-w-xs relative h-3 bg-[#EFEBF5] rounded-full shadow-clayPressed overflow-hidden">
                <div 
                  className="absolute h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${((currentMealIndex + 1) / meals.length) * 100}%` }} 
                />
             </div>
             <span className="ml-4 text-xs font-black text-clay-muted w-8">{currentMealIndex + 1}/{meals.length}</span>
          </div>

          <div className="flex-1 flex flex-col items-center w-full">
            <h2 className="font-heading text-2xl font-black text-clay-foreground text-center mb-2">
              Apa yang Anda makan untuk <span className="text-emerald-500">{currentMeal.label}</span>?
            </h2>
            <p className="text-sm font-medium text-clay-muted mb-8 text-center">Pilih makanan di bawah ini, atau gunakan kotak pencarian.</p>

            <div className="w-full bg-[#EFEBF5] rounded-2xl flex items-center px-4 py-3 shadow-clayPressed mb-6">
               <Utensils size={18} className="text-clay-muted mr-3" />
               <input type="text" placeholder="Ketik nama makanan..." className="bg-transparent border-none outline-none font-medium w-full text-clay-foreground placeholder-clay-muted/50" />
            </div>

            <div className="w-full relative pb-24">
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-4 mb-8">
                {foodDatabase.map((item) => {
                  const isSelected = !!currentSelections.find(s => s.foodId === item.id);
                  return (
                    <div 
                      key={item.id}
                      onClick={() => toggleFoodSelect(item.id)}
                      className={`flex flex-col items-center p-4 rounded-3xl transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-emerald-50 border-2 border-emerald-400 shadow-clayCard scale-105' 
                          : 'bg-white shadow-clayCard hover:scale-105 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <span className="text-xs font-bold text-center text-clay-foreground">{item.name}</span>
                    </div>
                  );
                })}
              </div>

              {currentSelections.length > 0 && (
                <div className="w-full space-y-4 mb-8 bg-white/50 p-4 rounded-3xl backdrop-blur-md">
                  <h3 className="font-bold text-sm text-clay-foreground mb-4">Atur Porsi</h3>
                  {currentSelections.map(sel => {
                    const food = foodDatabase.find(f => f.id === sel.foodId);
                    return (
                      <div key={sel.foodId} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl shadow-clayCard">
                        <span className="font-bold text-sm">{food?.name}</span>
                        <div className="flex bg-[#EFEBF5] rounded-xl p-1 shadow-clayPressed">
                          {portionOptions.map(p => (
                            <button
                              key={p.value}
                              onClick={() => updatePortion(sel.foodId, p.value)}
                              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                                sel.portion === p.value ? 'bg-white shadow-clayCard text-emerald-600' : 'text-clay-muted hover:text-clay-foreground'
                              }`}
                            >
                              {p.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            
            <div className="fixed bottom-6 w-full max-w-lg px-6 left-1/2 -translate-x-1/2">
               <ClayButton className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700" onClick={handleNextMeal}>
                 {currentMealIndex < meals.length - 1 ? 'Lanjut ke Menu Berikutnya' : 'Selesai & Analisis'} <ArrowRight size={20} />
               </ClayButton>
            </div>
          </div>
        </div>
      )}

      {step === "analyzing" && (
        <div className="flex flex-col items-center justify-center p-6 min-h-screen text-center animate-in fade-in duration-500">
          <div className="relative w-32 h-32 flex items-center justify-center mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-emerald-200 animate-ping opacity-75"></div>
            <div className="absolute inset-2 rounded-full border-4 border-emerald-500/30 animate-spin"></div>
            <div className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-clayButton z-10">
              <Apple size={36} className="animate-pulse" />
            </div>
          </div>
          <h2 className="font-heading text-2xl font-black text-clay-foreground transition-opacity duration-300">
            {analyzingMessage}
          </h2>
        </div>
      )}

      {step === "results" && scoreData && (
        <div className="flex flex-col p-6 min-h-screen animate-in fade-in slide-in-from-bottom-8 duration-700 bg-clay-canvas pb-24">
          <h1 className="font-heading text-3xl font-black text-clay-foreground mb-6 text-center mt-6">Hasil Analisis Gizi</h1>
          
          <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-8 -mx-6 px-6">
            
            {/* Card 1: Skor Diet */}
            <ClayCard className="snap-center shrink-0 w-[280px] flex flex-col items-center justify-center text-center !p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Apple size={80} />
              </div>
              <h3 className="font-bold text-sm text-clay-muted mb-4 uppercase z-10">Skor Pola Makanmu</h3>
              <div className={`w-32 h-32 rounded-full flex items-center justify-center shadow-clayDeep mb-6 relative z-10 ${
                scoreData.category === 'Sangat Sehat' ? 'bg-gradient-to-br from-emerald-400 to-emerald-600' : 
                scoreData.category === 'Cukup Sehat' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                scoreData.category === 'Perlu Perbaikan' ? 'bg-gradient-to-br from-amber-400 to-amber-600' :
                'bg-gradient-to-br from-red-400 to-red-600'
              }`}>
                <div className="flex flex-col items-center">
                   <span className="text-4xl font-black text-white">{scoreData.score}</span>
                   <span className="text-xs text-white/80 font-bold uppercase tracking-wider">/100</span>
                </div>
              </div>
              <p className="font-black text-clay-foreground text-lg z-10">{scoreData.category}</p>
            </ClayCard>

            {/* Card 2: Breakdown Nutrisi */}
            <ClayCard className="snap-center shrink-0 w-[280px] flex flex-col justify-center !p-8">
              <h3 className="font-bold text-sm text-clay-muted mb-6 uppercase text-center">Profil Nutrisi Kunci</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-clay-foreground">Lemak & Gorengan</span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black ${scoreData.insights.fat === 'Tinggi' ? 'bg-red-100 text-red-600' : scoreData.insights.fat === 'Sedang' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>{scoreData.insights.fat}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-clay-foreground">Serat & Sayur</span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black ${scoreData.insights.fiber === 'Tinggi' ? 'bg-emerald-100 text-emerald-600' : scoreData.insights.fiber === 'Sedang' ? 'bg-amber-100 text-amber-600' : 'bg-red-100 text-red-600'}`}>{scoreData.insights.fiber}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-clay-foreground">Gula Tersembunyi</span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black ${scoreData.insights.sugar === 'Tinggi' ? 'bg-red-100 text-red-600' : scoreData.insights.sugar === 'Sedang' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>{scoreData.insights.sugar}</span>
                </div>
              </div>
            </ClayCard>

            {/* Card 3: Dampak Hati & Rekomendasi */}
            <ClayCard className="snap-center shrink-0 w-[280px] flex flex-col justify-center !p-8">
              <h3 className="font-bold text-sm text-clay-muted mb-4 uppercase text-center flex items-center justify-center gap-2"><Activity size={16} /> Dampak Hati</h3>
              <p className="font-bold text-sm text-clay-foreground mb-6 text-center leading-snug">
                "{scoreData.liverImpact}"
              </p>
              
              <div className="space-y-4 mt-2">
                 <div>
                   <h4 className="text-[10px] uppercase font-black text-emerald-500 mb-2">Tambahkan:</h4>
                   <p className="text-xs font-bold text-clay-foreground">Sayur hijau, Buah segar, Protein tanpa lemak (Ikan/Ayam Rebus)</p>
                 </div>
                 <div>
                   <h4 className="text-[10px] uppercase font-black text-red-500 mb-2">Kurangi:</h4>
                   <p className="text-xs font-bold text-clay-foreground">Gorengan, Minuman kemasan manis, Fast food</p>
                 </div>
              </div>
            </ClayCard>

          </div>

          <div className="mt-8 bg-white/60 p-5 rounded-3xl shadow-clayCard backdrop-blur-md flex gap-3">
            <Info className="w-5 h-5 text-clay-muted shrink-0" />
            <p className="text-[10px] text-clay-muted font-bold leading-relaxed">
              Hasil ini merupakan analisis berdasarkan pola makan yang Anda input dan bukan pengganti saran medis atau gizi profesional.
            </p>
          </div>

          <div className="fixed bottom-6 left-6 right-6 flex flex-col gap-3 max-w-lg mx-auto">
             <ClayButton 
               className="w-full shadow-clayButton bg-emerald-600 hover:bg-emerald-700"
               onClick={() => router.push('/dashboard/jurnal')}
             >
               Simpan Ke Jurnal Hari Ini
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
    </div>
  );
}
