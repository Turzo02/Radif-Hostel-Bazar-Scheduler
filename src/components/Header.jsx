import React from 'react';
import { Users, RotateCcw } from 'lucide-react';

export function Header({ onReset }) {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-900/50">
          <Users className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white leading-tight tracking-tight">
            Radif Hostel
          </h1>
          <p className="text-xs text-emerald-400/80 font-medium uppercase tracking-wider">
            Rotation Manager
          </p>
        </div>
      </div>

      <button
        onClick={onReset}
        className="glass-interactive rounded-full p-2.5 text-emerald-400 active:text-red-400 active:bg-red-500/10 transition-colors"
        aria-label="Reset"
      >
        <RotateCcw className="w-5 h-5" />
      </button>
    </header>
  );
}
