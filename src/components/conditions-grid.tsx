"use client";

import React from "react";
import Link from "next/link";

interface Disease {
  name: string;
  description: string;
}

interface ConditionsGridProps {
  diseases: Disease[];
}

export const ConditionsGrid: React.FC<ConditionsGridProps> = ({diseases}) => {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          Common condition types
        </h2>
        <Link
          href="#"
          className="text-sm font-medium text-pink-600 dark:text-pink-400 hover:underline"
        >
          View all
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {diseases.length === 0 && (
          <div className="col-span-full text-sm text-slate-500 dark:text-slate-400 italic">
            No matches – try a different search term.
          </div>
        )}
        {diseases.map((d) => (
          <div
            key={d.name}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-gray-800/60 backdrop-blur shadow-sm hover:shadow-lg hover:border-pink-400/50 dark:hover:border-pink-500/40 transition-all p-5 flex flex-col"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-transparent" />
            <h3 className="font-semibold mb-2 text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-[10px] font-bold text-white shadow-sm">
                {d.name.charAt(0)}
              </span>
              {d.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
              {d.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <button className="text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow hover:shadow-md hover:from-pink-600 hover:to-purple-700 transition">
                Learn more
              </button>
              <button className="text-xs font-medium px-3 py-1.5 rounded-full border border-slate-300/70 dark:border-slate-600/70 hover:border-pink-400/60 dark:hover:border-pink-500/60 text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition">
                Match doctor
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
