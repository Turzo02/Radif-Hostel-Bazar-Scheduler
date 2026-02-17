import React from 'react';
import { AlertCircle } from 'lucide-react';

export function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="w-full p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3 animate-in slide-in-from-bottom-2 fade-in">
      <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
      <p className="text-sm text-red-200 font-medium leading-tight">
        {message}
      </p>
    </div>
  );
}
