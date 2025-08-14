"use client";

import React, {useEffect, useState} from "react";
import {ModernNavbar} from "@/components/modern-navbar";
import {HeroSection} from "@/components/hero-section";
import {ConditionsGrid} from "@/components/conditions-grid";
import {CallToActionSection} from "@/components/call-to-action-section";
import {ModernFooter} from "@/components/modern-footer";
import {diseaseTypes} from "@/components/disease-data";

export default function HomePage() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [query, setQuery] = useState("");
  const [symptom, setSymptom] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  
  const filtered = React.useMemo(() => {
    const q = query.toLowerCase().trim();
    const s = symptom.toLowerCase().trim();
    // Early return full list if both empty
    if (!q && !s) return diseaseTypes;

    return diseaseTypes
      .map((d) => {
        const name = d.name.toLowerCase();
        const desc = d.description.toLowerCase();
        let include = true;
        
        if (q) {
          include = include && (name.includes(q) || desc.includes(q));
        }
        if (s) {
          include = include && (desc.includes(s) || name.includes(s));
        }
        if (!include) return null;
        
        let score = 0;
        if (q) {
          if (name.includes(q)) score += 4;
          else if (desc.includes(q)) score += 2;
        }
        if (s) {
          if (desc.includes(s)) score += 3;
          else if (name.includes(s)) score += 1;
        }
        
        if (q && s) score += 1;
        return {d, score};
      })
      .filter(Boolean)
      .sort((a, b) => b!.score - a!.score)
      .map((x) => x!.d);
  }, [query, symptom]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-slate-100 dark:from-gray-950 dark:to-gray-900 text-slate-800 dark:text-slate-100 transition-colors duration-500 relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl dark:bg-pink-600/20 animate-pulse" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-700/20 animate-pulse [animation-delay:3s]" />
      </div>

      <ModernNavbar theme={theme} onThemeToggle={toggleTheme} />

      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col gap-10">
        <HeroSection
          query={query}
          symptom={symptom}
          onQueryChange={setQuery}
          onSymptomChange={setSymptom}
          onClear={() => {
            setQuery("");
            setSymptom("");
          }}
        />

        <ConditionsGrid diseases={filtered} />

        <CallToActionSection />
      </main>

      <ModernFooter />
    </div>
  );
}
