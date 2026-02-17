import { Users, Trash2 } from 'lucide-react';

export function Header({ onReset }) {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
          <Users className="w-8 h-8 text-indigo-600" />
          Hostel Bazar Rotation
        </h1>
        <p className="text-slate-500 mt-1">Balanced round-robin scheduling system</p>
      </div>
      <button
        onClick={onReset}
        className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 font-medium px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
      >
        <Trash2 className="w-4 h-4" /> Reset Data
      </button>
    </header>
  );
}
