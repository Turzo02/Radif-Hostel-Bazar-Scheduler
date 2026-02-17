import React from 'react';
import { Grid, CheckCircle2 } from 'lucide-react';
import { DEFAULT_ROOMS } from '../utils/constants';

export function RoomSelector({ activeRooms, onToggle, onToggleAll }) {
  const isAll = activeRooms.length === DEFAULT_ROOMS.length;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-emerald-400/80 text-xs font-bold uppercase tracking-wider">
          <Grid className="w-3 h-3" />
          <span>Rooms ({activeRooms.length})</span>
        </div>
        <button onClick={onToggleAll} className="text-[10px] font-bold text-white/50 active:text-white uppercase">
          {isAll ? 'Clear' : 'All'}
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {DEFAULT_ROOMS.map((room) => {
          const isActive = activeRooms.includes(room);
          return (
            <button
              key={room}
              onClick={() => onToggle(room)}
              className={`
                h-10 rounded-lg text-sm font-bold transition-all duration-200 active:scale-95
                ${isActive ? 'active-emerald' : 'glass-interactive text-white/60'}
              `}
            >
              {room}
            </button>
          );
        })}
      </div>
    </div>
  );
}
