import React from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import { MONTHS } from '../utils/constants';

export function MonthSelector({ selectedMonth, selectedYear, onChange }) {
  const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - 1 + i);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-emerald-400/80 text-xs font-bold uppercase tracking-wider">
        <Calendar className="w-3 h-3" />
        <span>Time Period</span>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {/* Month */}
        <div className="relative h-12 glass-interactive rounded-xl flex items-center px-4 justify-between">
          <span className="text-sm font-semibold text-white">{MONTHS[selectedMonth]}</span>
          <ChevronDown className="w-4 h-4 text-white/30" />
          <select
            value={selectedMonth}
            onChange={(e) => onChange(parseInt(e.target.value), selectedYear)}
            className="absolute inset-0 opacity-0 w-full h-full"
          >
            {MONTHS.map((m, idx) => (
              <option key={m} value={idx} className="bg-slate-900 text-white">{m}</option>
            ))}
          </select>
        </div>

        {/* Year */}
        <div className="relative h-12 glass-interactive rounded-xl flex items-center px-4 justify-between">
          <span className="text-sm font-semibold text-white">{selectedYear}</span>
          <ChevronDown className="w-4 h-4 text-white/30" />
          <select
            value={selectedYear}
            onChange={(e) => onChange(selectedMonth, parseInt(e.target.value))}
            className="absolute inset-0 opacity-0 w-full h-full"
          >
            {years.map((y) => (
              <option key={y} value={y} className="bg-slate-900 text-white">{y}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
