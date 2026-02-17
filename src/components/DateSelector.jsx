import React from 'react';
import { CalendarDays } from 'lucide-react';

export function DateSelector({ generatedDates, activeDates, onToggle, onToggleAll }) {
  const isAll = activeDates.length === generatedDates.length && generatedDates.length > 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-emerald-400/80 text-xs font-bold uppercase tracking-wider">
          <CalendarDays className="w-3 h-3" />
          <span>Active Days ({activeDates.length})</span>
        </div>
        <button onClick={onToggleAll} className="text-[10px] font-bold text-white/50 active:text-white uppercase">
          {isAll ? 'Clear' : 'All'}
        </button>
      </div>

      <div className="bg-black/20 rounded-xl p-2 border border-white/5">
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 max-h-[180px] overflow-y-auto pr-1">
          {generatedDates.map((dateStr) => {
            const date = new Date(dateStr);
            const isActive = activeDates.includes(dateStr);
            return (
              <button
                key={dateStr}
                onClick={() => onToggle(dateStr)}
                className={`
                  flex flex-col items-center justify-center py-2 rounded-lg transition-all duration-200 active:scale-95
                  ${isActive ? 'active-emerald' : 'bg-white/5 text-white/40 border border-transparent'}
                `}
              >
                <span className="text-[9px] uppercase font-bold opacity-80">
                  {date.toLocaleDateString('en-US', { weekday: 'short' })}
                </span>
                <span className="text-base font-bold leading-none mt-0.5">
                  {date.getDate()}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
