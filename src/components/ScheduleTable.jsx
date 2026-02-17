import React from 'react';
import { CalendarCheck, ArrowRight } from 'lucide-react';
import { MONTHS } from '../utils/constants';

export function ScheduleTable({ schedule, selectedMonth, selectedYear }) {
  if (schedule.length === 0) {
    return (
      <div className="glass-panel rounded-3xl min-h-[400px] flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in-95 duration-500">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
          <CalendarCheck className="w-8 h-8 text-white/20" />
        </div>
        <h3 className="text-white font-bold text-lg mb-1">No Schedule Yet</h3>
        <p className="text-white/40 text-sm max-w-[200px]">
          Select dates and rooms, then tap Generate to create your plan.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-panel rounded-3xl overflow-hidden flex flex-col h-full min-h-[500px] animate-in slide-in-from-bottom-8 duration-700">
      
      {/* Header */}
      <div className="p-5 border-b border-white/5 bg-white/5 backdrop-blur-md sticky top-0 z-10 flex justify-between items-center">
        <div>
          <h2 className="text-white font-bold text-lg">Itinerary</h2>
          <p className="text-emerald-400 text-xs font-medium uppercase tracking-wider">
            {MONTHS[selectedMonth]} {selectedYear}
          </p>
        </div>
        <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold uppercase">
          {schedule.length} Entries
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-auto p-2 space-y-2">
        {schedule.map((row, idx) => {
          const dateObj = new Date(row.date);
          return (
            <div
              key={row.id}
              className="group flex items-center p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Date Box */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#020403] border border-white/10 flex flex-col items-center justify-center text-center">
                <span className="text-[9px] text-white/50 uppercase font-bold leading-none mb-0.5">
                  {dateObj.toLocaleDateString('en-US', { weekday: 'short' })}
                </span>
                <span className="text-lg font-bold text-white leading-none">
                  {dateObj.getDate()}
                </span>
              </div>

              {/* Rooms */}
              <div className="flex-1 flex items-center justify-around px-4">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[9px] text-emerald-500/70 font-bold uppercase tracking-widest">
                    Shopper 1
                  </span>
                  <span className="text-sm font-mono font-bold text-white bg-emerald-900/40 px-3 py-1 rounded-lg border border-emerald-500/20">
                    {row.room1}
                  </span>
                </div>
                
                <ArrowRight className="w-4 h-4 text-white/10" />

                <div className="flex flex-col items-center gap-1">
                  <span className="text-[9px] text-teal-500/70 font-bold uppercase tracking-widest">
                    Shopper 2
                  </span>
                  <span className="text-sm font-mono font-bold text-white bg-teal-900/40 px-3 py-1 rounded-lg border border-teal-500/20">
                    {row.room2}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
