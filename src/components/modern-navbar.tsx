"use client";

import React from "react";
import Link from "next/link";

interface ModernNavbarProps {
  theme: "light" | "dark";
  onThemeToggle: () => void;
}

export const ModernNavbar: React.FC<ModernNavbarProps> = ({
  theme,
  onThemeToggle,
}) => {
  return (
    <nav className="relative z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 bg-white/80 dark:bg-gray-900/80 border-b border-slate-200/60 dark:border-slate-800/70 px-4 md:px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold tracking-tight bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent select-none">
          DocBook
        </span>
        <span className="hidden sm:inline text-xs px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-300 border border-pink-500/20">
          Beta
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};
