import { CheckSquare } from 'lucide-react';

export function DateSelector({ generatedDates, activeDates, onToggle, onToggleAll }) {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <CheckSquare className="w-5 h-5 text-indigo-500" />
          Dates <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600 font-normal">{activeDates.length} Active</span>
        </h2>
        <button onClick={onToggleAll} className="text-xs text-indigo-600 hover:text-indigo-800 font-medium">
          {activeDates.length === generatedDates.length ? 'Deselect All' : 'Select All'}
        </button>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
        {generatedDates.map(dateStr => {
          const dayNum = new Date(dateStr).getDate();
          const isSelected = activeDates.includes(dateStr);
          return (
            <button
              key={dateStr}
              onClick={() => onToggle(dateStr)}
              className={`
                flex flex-col items-center justify-center p-2 rounded border transition-all
                ${isSelected
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm'
                  : 'bg-slate-50 border-slate-100 text-slate-400 hover:bg-slate-100'}
              `}
            >
              <span className="text-xs opacity-70 uppercase">{new Date(dateStr).toLocaleDateString('en-US', { weekday: 'short' })}</span>
              <span className="text-lg font-bold leading-none">{dayNum}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
