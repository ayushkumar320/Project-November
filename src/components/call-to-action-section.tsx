"use client";

import React from "react";

export const CallToActionSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 dark:from-pink-600/15 dark:via-purple-700/15 dark:to-indigo-700/15 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
          Not sure where to start?
        </h3>
        <p className="text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
          Answer a few quick questions and we will help you find the right
          specialist to talk to. Your health journey deserves clarity & speed.
        </p>
        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-6 py-3 shadow-md hover:shadow-lg transition text-sm">
          Get matched now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M4.5 12a.75.75 0 0 1 .75-.75h11.638l-3.97-3.97a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.97-3.97H5.25A.75.75 0 0 1 4.5 12Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-400">
        {[
          "Secure & private",
          "Verified doctors",
          "Fast triage",
          "Evidence based",
          "AI assisted",
          "Global access",
        ].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-gray-800/60 backdrop-blur px-3 py-2 font-medium text-slate-700 dark:text-slate-300 hover:border-pink-400/60 dark:hover:border-pink-500/60 transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};
