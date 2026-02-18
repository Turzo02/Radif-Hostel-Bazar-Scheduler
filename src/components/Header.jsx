import React from "react";
import { Users, RotateCcw, Sparkles, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme.js";

export function Header({ onReset }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="relative">
      {/* Decorative Floating Elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-linear-to-br from-(--accent-start) to-(--accent-end) rounded-full opacity-20 blur-xl floating" />
      <div
        className="absolute -top-2 -right-2 w-6 h-6 bg-linear-to-br from-(--accent-end) to-(--accent-start) rounded-full opacity-30 blur-lg floating"
        style={{ animationDelay: "1s" }}
      />

      <div className="flex items-center relative z-10">
        {/* Logo & Title Section */}
        <div className="flex items-center  gap-4 group">
          {/* Premium Logo Container */}
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-(--accent-start) to-(--accent-end) flex items-center justify-center shadow-(--accent-glow) transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
              <Users className="w-7 h-7 text-black" />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-(--accent-start) to-(--accent-end) opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30" />
            {/* Sparkle Icon */}
            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-(--accent-start) animate-pulse" />
          </div>

          {/* Text Content */}
          <div className="space-y-1">
            <h1 className="text-2xl font-bold linear-text leading-tight tracking-tight text-center">
              Radif Hostel
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-(--accent-start)/50" />
              <p className="text-xs text-(--text-secondary) font-medium uppercase tracking-widest italic text-center">
                Rotation Manager By TurzO
              </p>
              <div className="h-px w-8 bg-(--accent-start)/50" />
            </div>
          </div>
        </div>
        

        {/* Reset Button */}
        <div className="relative group mr-1">
          <button
            onClick={onReset}
            className="glass p-3 text-(--text-secondary) hover:text-(--accent-start) transition-all duration-300 group/btn"
            aria-label="Reset all data"
          >
            <RotateCcw className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-180" />
          </button>

          {/* Tooltip */}
          <div className="absolute right-0 top-full mt-2 px-3 py-1 glass text-xs text-(--text-secondary) opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
            Reset All Data
          </div>
        </div>
        {/* Theme Toggle Button */}
        <div className="relative group">
          <button
            onClick={toggleTheme}
            className="glass p-3 text-(--text-secondary) hover:text-(--accent-start) transition-all duration-300 group/btn"
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 transition-transform duration-300 group-hover/btn:-rotate-12" />
            ) : (
              <Sun className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-90" />
            )}
          </button>

          {/* Tooltip */}
          <div className="absolute right-0 top-full mt-2 px-3 py-1 glass text-xs text-(--text-secondary) opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </div>
        </div>
      </div>
    </header>
  );
}
