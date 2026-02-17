import React from 'react';
import { ChevronDown, CalendarDays, Clock } from 'lucide-react';
import { MONTHS } from '../utils/constants';

export function MonthSelector({ selectedMonth, selectedYear, onChange }) {
  const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - 1 + i);

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center gap-3 group">
        <div className="relative">
          <CalendarDays className="w-4 h-4 text-(--accent-start)" />
          <div className="absolute inset-0 w-4 h-4 bg-(--accent-start)/20 rounded-full blur-sm animate-pulse" />
        </div>
        <h3 className="text-sm font-bold text-(--text-secondary) uppercase tracking-widest">
          Time Period
        </h3>
        <div className="flex-1 h-px bg-linear-to-r from-(--accent-start)/30 to-transparent" />
      </div>
      
      {/* Selectors Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Month Selector */}
        <div className="relative group/month">
          <div className="premium-card p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-(--accent-start)/20 to-(--accent-end)/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-(--accent-start)" />
                </div>
                <span className="text-sm font-semibold text-(--text-primary)">
                  {MONTHS[selectedMonth]}
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-(--text-secondary) transition-transform duration-300 group-hover/month:rotate-180" />
            </div>
          </div>
          
          <select
            value={selectedMonth}
            onChange={(e) => onChange(parseInt(e.target.value), selectedYear)}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          >
            {MONTHS.map((m, idx) => (
              <option key={m} value={idx} className="bg-(--bg-secondary) text-(--text-primary)">{m}</option>
            ))}
          </select>
        </div>

        {/* Year Selector */}
        <div className="relative group/year">
          <div className="premium-card p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-(--accent-end)/20 to-(--accent-start)/20 flex items-center justify-center">
             
                </div>
                <span className="text-sm font-semibold text-(--text-primary)">
                  {selectedYear}
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-(--text-secondary) transition-transform duration-300 group-hover/year:rotate-180" />
            </div>
          </div>
          
          <select
            value={selectedYear}
            onChange={(e) => onChange(selectedMonth, parseInt(e.target.value))}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          >
            {years.map((y) => (
              <option key={y} value={y} className="bg-(--bg-secondary) text-(--text-primary)">{y}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="flex justify-between px-2">
        <div className="w-2 h-2 rounded-full bg-linear-to-br from-(--accent-start) to-(--accent-end) opacity-60 animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-linear-to-br from-(--accent-end) to-(--accent-start) opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
}
