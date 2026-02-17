import React, { useState } from 'react';
import { ChevronDown, CalendarDays, Clock } from 'lucide-react';
import { MONTHS } from '../utils/constants';

export function MonthSelector({ selectedMonth, selectedYear, onChange }) {
  // 1. Add state to track which dropdown is open
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);

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
        
        {/* --- Month Selector --- */}
        <div className="relative group/month">
          {/* Trigger Button */}
          <div 
            onClick={() => {
              setIsMonthOpen(!isMonthOpen);
              setIsYearOpen(false); // Close other dropdown
            }}
            className="premium-card p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-(--accent-start)/20 to-(--accent-end)/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-(--accent-start)" />
                </div>
                <span className="text-sm font-semibold text-(--text-primary)">
                  {MONTHS[selectedMonth]}
                </span>
              </div>
              {/* Rotate Chevron based on state */}
              <ChevronDown 
                className={`w-4 h-4 text-(--text-secondary) transition-transform duration-300 ${isMonthOpen ? 'rotate-180' : ''}`} 
              />
            </div>
          </div>

          {/* Custom Dropdown List */}
          {isMonthOpen && (
            <div className="absolute top-full left-0 w-full mt-2 z-50 rounded-xl border border-(--accent-start)/20 bg-(--bg-secondary) shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
              <div className="max-h-60 overflow-y-auto">
                {MONTHS.map((m, idx) => (
                  <div
                    key={m}
                    onClick={() => {
                      onChange(idx, selectedYear);
                      setIsMonthOpen(false);
                    }}
                    className={`px-4 py-3 text-sm cursor-pointer transition-colors flex items-center justify-between
                      ${selectedMonth === idx 
                        ? 'bg-(--accent-start)/10 text-(--accent-start) font-medium' 
                        : 'text-(--text-primary) hover:bg-(--accent-start)/5'
                      }`}
                  >
                    {m}
                    {selectedMonth === idx && <div className="w-1.5 h-1.5 rounded-full bg-(--accent-start)" />}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* --- Year Selector --- */}
        <div className="relative group/year">
          {/* Trigger Button */}
          <div 
            onClick={() => {
              setIsYearOpen(!isYearOpen);
              setIsMonthOpen(false); // Close other dropdown
            }}
            className="premium-card p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-(--accent-end)/20 to-(--accent-start)/20 flex items-center justify-center">
                  {/* I added a Calendar icon here to fill the empty spot in your original code */}
                  <CalendarDays className="w-4 h-4 text-(--accent-end)" />
                </div>
                <span className="text-sm font-semibold text-(--text-primary)">
                  {selectedYear}
                </span>
              </div>
              <ChevronDown 
                className={`w-4 h-4 text-(--text-secondary) transition-transform duration-300 ${isYearOpen ? 'rotate-180' : ''}`} 
              />
            </div>
          </div>

          {/* Custom Dropdown List */}
          {isYearOpen && (
            <div className="absolute top-full left-0 w-full mt-2 z-50 rounded-xl border border-(--accent-start)/20 bg-(--bg-secondary) shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
              <div className="max-h-60 overflow-y-auto">
                {years.map((y) => (
                  <div
                    key={y}
                    onClick={() => {
                      onChange(selectedMonth, y);
                      setIsYearOpen(false);
                    }}
                    className={`px-4 py-3 text-sm cursor-pointer transition-colors flex items-center justify-between
                      ${selectedYear === y 
                        ? 'bg-(--accent-start)/10 text-(--accent-start) font-medium' 
                        : 'text-(--text-primary) hover:bg-(--accent-start)/5'
                      }`}
                  >
                    {y}
                    {selectedYear === y && <div className="w-1.5 h-1.5 rounded-full bg-(--accent-start)" />}
                  </div>
                ))}
              </div>
            </div>
          )}
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
