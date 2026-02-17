import { Calendar } from 'lucide-react';
import { MONTHS } from '../utils/constants';

export function MonthSelector({ selectedMonth, selectedYear, onChange }) {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Calendar className="w-5 h-5 text-indigo-500" />
        Month & Year
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <select
          value={selectedMonth}
          onChange={(e) => onChange(parseInt(e.target.value), selectedYear)}
          className="block w-full rounded-lg border-slate-300 bg-slate-50 p-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 border"
        >
          {MONTHS.map((m, idx) => (
            <option key={m} value={idx}>{m}</option>
          ))}
        </select>
        <select
          value={selectedYear}
          onChange={(e) => onChange(selectedMonth, parseInt(e.target.value))}
          className="block w-full rounded-lg border-slate-300 bg-slate-50 p-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 border"
        >
          {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - 1 + i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </section>
  );
}
