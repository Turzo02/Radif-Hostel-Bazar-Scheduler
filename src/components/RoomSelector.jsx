import { Users } from 'lucide-react';
import { DEFAULT_ROOMS } from '../utils/constants';

export function RoomSelector({ activeRooms, onToggle, onToggleAll }) {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-500" />
          Rooms <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600 font-normal">{activeRooms.length} Active</span>
        </h2>
        <button onClick={onToggleAll} className="text-xs text-indigo-600 hover:text-indigo-800 font-medium">
          {activeRooms.length === DEFAULT_ROOMS.length ? 'Deselect All' : 'Select All'}
        </button>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
        {DEFAULT_ROOMS.map(room => (
          <button
            key={room}
            onClick={() => onToggle(room)}
            className={`
              text-sm py-1.5 px-1 rounded border transition-all duration-200
              ${activeRooms.includes(room)
                ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-medium shadow-sm'
                : 'bg-slate-50 border-slate-100 text-slate-400 hover:bg-slate-100'}
            `}
          >
            {room}
          </button>
        ))}
      </div>
    </section>
  );
}
