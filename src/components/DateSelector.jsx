import React from 'react';
import { CalendarDays, Calendar, CheckCircle } from 'lucide-react';

export function DateSelector({ generatedDates, activeDates, onToggle, onToggleAll }) {
  const isAll = activeDates.length === generatedDates.length && generatedDates.length > 0;

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 group">
          <div className="relative">
            <CalendarDays className="w-4 h-4 text-(--accent-start)" />
            <div className="absolute inset-0 w-4 h-4 bg-(--accent-start)/20 rounded-full blur-sm animate-pulse" />
          </div>
          <h3 className="text-sm font-bold text-(--text-secondary) uppercase tracking-widest">
            Active Days ({activeDates.length})
          </h3>
          <div className="flex-1 h-px bg-linear-to-r from-(--accent-start)/30 to-transparent" />
        </div>
        
        {/* Toggle All Button */}
        <button
          onClick={onToggleAll}
          className="premium-card px-4 py-2 text-xs font-bold text-(--text-secondary) hover:text-(--accent-start) transition-all duration-300 hover:scale-105 border border-(--border-color)"
        >
          {isAll ? 'Clear All' : 'Select All'}
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="premium-card p-4">
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 max-h-60 overflow-y-auto no-scrollbar p-2">
          {generatedDates.map((dateStr, index) => {
            const date = new Date(dateStr);
            const isActive = activeDates.includes(dateStr);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            const dayNumber = date.getDate();
            
            return (
              <div key={dateStr} className="relative group/date">
                <button
                  onClick={() => onToggle(dateStr)}
                  className={`
                    relative w-full aspect-square rounded-xl flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105
                    ${isActive 
                      ? 'bg-linear-to-br from-(--accent-start) to-(--accent-end) text-black  shadow-(--accent-glow) scale-105' 
                      : 'glass text-(--text-secondary) hover:text-(--accent-start) hover:scale-105 hover:border-(--accent-start)'
                    }
                  `}
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  {/* Day Name */}
                  <span className="text-[10px] uppercase font-bold opacity-80 leading-none">
                    {dayName.charAt(0)}
                  </span>
                  
                  {/* Day Number */}
                  <span className="text-lg font-bold text-(--text-primary) leading-none mt-1">
                    {dayNumber}
                  </span>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <CheckCircle className="absolute top-1 right-1 w-3 h-3" />
                  )}
                  
                  {/* Hover Overlay */}
                  {!isActive && (
                    <div className="absolute inset-0 rounded-xl bg-linear-to-br from-(--accent-start)/10 to-(--accent-end)/10 opacity-0 group-hover/date:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
                
                {/* Floating Pulse for Active Dates */}
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-(--accent-start) rounded-full animate-pulse">
                    <div className="w-full h-full bg-(--accent-start) rounded-full animate-ping" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Calendar Footer */}
        <div className="mt-4 pt-3 border-t border-(--border-color)">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-3 h-3 text-(--accent-start)" />
              <span className="text-xs text-(--text-secondary)">
                {generatedDates.length} total days
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-(--accent-start)" />
              <span className="text-xs text-(--text-secondary)">
                {activeDates.length} selected
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
