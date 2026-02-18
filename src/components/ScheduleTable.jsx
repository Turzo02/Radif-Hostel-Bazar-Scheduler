import React from 'react';
import { CalendarCheck, ArrowRight, Users, Calendar } from 'lucide-react';
import { MONTHS } from '../utils/constants';

export function ScheduleTable({ schedule, selectedMonth, selectedYear }) {
  if (schedule.length === 0) {
    return (
      <div className="premium-card min-h-100 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in-95 duration-500">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center mb-6 floating">
            <CalendarCheck className="w-10 h-10 text-(--text-secondary)" />
          </div>
          <div className="absolute inset-0 w-20 h-20 bg-(--accent-start)/10 rounded-2xl blur-xl animate-pulse" />
        </div>
        
        <h3 className="text-xl font-bold gradient-text mb-3">No Schedule Yet</h3>
        <p className="text-(--text-secondary) text-sm max-w-62.5 leading-relaxed">
          Select dates and rooms, then tap Generate to create your rotation plan.
        </p>
        
        {/* Decorative Elements */}
        <div className="flex gap-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-(--accent-start) animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-(--accent-end) animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="w-2 h-2 rounded-full bg-(--accent-start) animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    );
  }

  return (
    <div className="premium-card overflow-hidden flex flex-col h-full min-h-125 animate-in slide-in-from-bottom-8 duration-700 p-4">
      
      {/* Header */}
      <div className="p-6 border-b border-(--border-color) glass sticky top-0 z-10 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold gradient-text mb-1">Rotation Schedule</h2>
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-(--accent-start)" />
            <p className="text-(--text-secondary) text-sm font-medium uppercase tracking-wider">
              {MONTHS[selectedMonth]} {selectedYear}
            </p>
          </div>
        </div>
        
        <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
          <Users className="w-3 h-3 text-(--accent-start)" />
          <span className="text-xs font-bold text-(--text-secondary)">
            {schedule.length} Entries
          </span>
        </div>
      </div>

      {/* Schedule List */}
      <div className="flex-1 overflow-auto py-4 px-2 space-y-3">
        {schedule.map((row, idx) => {
          const dateObj = new Date(row.date);
          const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
          const dayNumber = dateObj.getDate();
          
          return (
            <div
              key={row.id}
              className="glass p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:border-(--accent-start) group"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-center gap-4">
                {/* Date Box */}
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br from-(--accent-start)/20 to-(--accent-end)/20 border border-(--glass-border) flex flex-col items-center justify-center text-center relative">
                  <span className="text-[10px] text-(--text-secondary) uppercase font-bold leading-none mb-1">
                    {dayName}
                  </span>
                  <span className="text-lg font-bold text-(--text-primary) leading-none">
                    {dayNumber}
                  </span>
                  
                  {/* Date Indicator */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-(--accent-start) rounded-full opacity-60" />
                </div>

                {/* Arrow */}
                <ArrowRight className="w-5 h-5 text-(--text-secondary)/30 shrink-0" />

                {/* Room Assignments */}
                <div className="flex-1 flex items-center justify-around gap-4">
                  {/* Shopper 1 */}
                  <div className="flex flex-col items-center gap-2 group/room1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-(--accent-start)" />
                      <span className="text-[10px] text-(--text-secondary) font-bold uppercase tracking-widest">
                        Shopper 1
                      </span>
                    </div>
                    <div className="premium-card px-4 py-2 min-w-20 text-center">
                      <span className="text-sm font-mono font-bold text-(--text-primary)">
                        {row.room1}
                      </span>
                    </div>
                  </div>
                  
                  {/* Shopper 2 */}
                  <div className="flex flex-col items-center gap-2 group/room2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-(--accent-end)" />
                      <span className="text-[10px] text-(--text-secondary) font-bold uppercase tracking-widest">
                        Shopper 2
                      </span>
                    </div>
                    <div className="premium-card px-4 py-2 min-w-20 text-center">
                      <span className="text-sm font-mono font-bold text-(--text-primary)">
                        {row.room2}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-(--accent-start)/5 to-(--accent-end)/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          );
        })}
      </div>
      
      {/* Footer */}
      <div className="p-4 border-t border-(--border-color) glass">
        <div className="flex items-center justify-between text-xs text-(--text-secondary)">
          <span>Generated rotation schedule</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-(--accent-start)" />
            <span>{schedule.length} assignments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
