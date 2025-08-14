"use client";

import React from "react";

interface HeroSectionProps {
  query: string;
  symptom: string;
  onQueryChange: (value: string) => void;
  onSymptomChange: (value: string) => void;
  onClear?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  query,
  symptom,
  onQueryChange,
  onSymptomChange,
  onClear,
}) => {
  return (
    <section className="space-y-6">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Bridge the gap between you & the right doctor
        </h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Explore common condition types, understand symptoms, and take the next
          step towards professional care. MediLink helps you discover, learn,
          and connect.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl pt-2">
        <div className="relative flex-1">
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search conditions (e.g. diabetes)"
            className="w-full rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/70 dark:bg-gray-800/70 backdrop-blur px-4 pr-10 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-400 transition shadow-sm text-slate-700 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-500"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </span>
        </div>
        <div className="relative flex-1">
          <input
            value={symptom}
            onChange={(e) => onSymptomChange(e.target.value)}
            placeholder="Search by symptom (e.g. headache)"
            className="w-full rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/70 dark:bg-gray-800/70 backdrop-blur px-4 pr-10 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-400 transition shadow-sm text-slate-700 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-500"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-6-6" />
            </svg>
          </span>
        </div>
        <div className="flex-shrink-0">
          <button
            type="button"
            onClick={() => onClear && onClear()}
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium border border-slate-300/70 bg-white/70 dark:bg-gray-800/70 text-slate-700 dark:text-slate-200 hover:border-pink-500 hover:text-pink-500 transition"
          >
            Clear
          </button>
        </div>
      </div>
    </section>
  );
};
