import React from 'react';
import { AlertCircle, AlertTriangle } from 'lucide-react';

export function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="premium-card p-4 border-red-500/30 bg-red-500/5 animate-in slide-in-from-bottom-2 fade-in group">
      <div className="flex items-start gap-3">
        <div className="relative">
          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
          <div className="absolute inset-0 w-5 h-5 bg-red-500/20 rounded-full blur-sm animate-pulse" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium leading-tight text-red-400">
            {message}
          </p>
          
          {/* Decorative Elements */}
          <div className="flex gap-1 mt-2">
            <div className="w-1 h-1 rounded-full bg-red-500/60" />
            <div className="w-1 h-1 rounded-full bg-red-500/40" />
            <div className="w-1 h-1 rounded-full bg-red-500/20" />
          </div>
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
