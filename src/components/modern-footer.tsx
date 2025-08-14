"use client";

import React from "react";
import Link from "next/link";

export const ModernFooter: React.FC = () => {
  return (
    <footer className="relative z-10 mt-10 border-t border-slate-200/60 dark:border-slate-800/70 bg-white/70 dark:bg-gray-900/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row gap-8 md:gap-4 md:items-center justify-between text-sm">
        <div className="space-y-2">
          <p className="font-semibold text-slate-700 dark:text-slate-200">
            DocBook
          </p>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
            Information here does not replace professional medical advice.
            Always consult a qualified provider for diagnosis & treatment.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-slate-500 dark:text-slate-400">
          <Link
            href="#"
            className="hover:text-pink-600 dark:hover:text-pink-400 transition"
          >
            About
          </Link>
          <Link
            href="#"
            className="hover:text-pink-600 dark:hover:text-pink-400 transition"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="hover:text-pink-600 dark:hover:text-pink-400 transition"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="hover:text-pink-600 dark:hover:text-pink-400 transition"
          >
            Terms
          </Link>
        </div>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} DocBook. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
