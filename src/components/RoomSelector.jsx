import React from 'react';
import { Grid, CheckCircle2, Home } from 'lucide-react';
import { DEFAULT_ROOMS } from '../utils/constants';

export function RoomSelector({ activeRooms, onToggle, onToggleAll }) {
  const isAll = activeRooms.length === DEFAULT_ROOMS.length;

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 group">
          <div className="relative">
            <Grid className="w-4 h-4 text-(--accent-start)" />
            <div className="absolute inset-0 w-4 h-4 bg-(--accent-start)/20 rounded-full blur-sm animate-pulse" />
          </div>
          <h3 className="text-sm font-bold text-(--text-secondary) uppercase tracking-widest">
            Rooms ({activeRooms.length})
          </h3>
          <div className="flex-1 h-px bg-linear-to-r from-(--accent-start)/30 to-transparent" />
        </div>
        
        {/* Toggle All Button */}
        <button
          onClick={onToggleAll}
          className="glass px-4 py-2 text-xs font-bold text-(--text-secondary) hover:text-(--accent-start) transition-all duration-300 hover:scale-105"
        >
          {isAll ? 'Clear All' : 'Select All'}
        </button>
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-4 gap-3 max-h-50 overflow-y-auto no-scrollbar py-2 pr-2">
        {DEFAULT_ROOMS.map((room, index) => {
          const isActive = activeRooms.includes(room);
          return (
            <div key={room} className="relative group/room">
              <button
                onClick={() => onToggle(room)}
                className={`
                  relative w-full h-12 rounded-xl font-bold text-sm transition-all duration-300 transform
                  ${isActive 
                    ? 'bg-linear-to-br from-(--accent-start) to-(--accent-end) text-black  shadow-(--accent-glow) scale-105' 
                    : 'glass text-(--text-secondary) hover:text-(--accent-start) hover:scale-105 hover:border-(--accent-start)'
                  }
                `}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-center gap-2">
                  {isActive && <CheckCircle2 className="w-3 h-3" />}
                  <span>{room}</span>
                </div>
                
                {/* Hover Effect */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-xl bg-linear-to-br from-(--accent-start)/10 to-(--accent-end)/10 opacity-0 group-hover/room:opacity-100 transition-opacity duration-300" />
                )}
              </button>
              
              {/* Floating Indicator */}
              {isActive && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-(--accent-start) rounded-full animate-pulse">
                  <div className="w-full h-full bg-(--accent-start) rounded-full animate-ping" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Room Count Badge */}
      <div className="flex justify-center">
        <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
          <Home className="w-3 h-3 text-(--accent-start)" />
          <span className="text-xs font-semibold text-(--text-secondary)">
            {activeRooms.length} of {DEFAULT_ROOMS.length} selected
          </span>
        </div>
      </div>
    </div>
  );
}
