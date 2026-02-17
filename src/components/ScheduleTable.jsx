import { Table, Calendar } from 'lucide-react';
import { formatDateDisplay } from '../utils/helpers';
import { MONTHS } from '../utils/constants';

export function ScheduleTable({ schedule, selectedMonth, selectedYear }) {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-full min-h-[500px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Table className="w-6 h-6 text-indigo-500" />
          Bazar Schedule
        </h2>
        {schedule.length > 0 && (
          <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {MONTHS[selectedMonth]} {selectedYear}
          </span>
        )}
      </div>

      {schedule.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-100 rounded-xl bg-slate-50/50">
          <Calendar className="w-16 h-16 mb-4 text-slate-300" />
          <p className="font-medium text-slate-600">Ready to generate.</p>
          <p className="text-sm">Select dates and rooms to begin.</p>
        </div>
      ) : (
        <div className="overflow-hidden border border-slate-200 rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 font-semibold text-slate-600 text-sm">Date</th>
                <th className="p-4 font-semibold text-slate-600 text-sm text-center">Room 1</th>
                <th className="p-4 font-semibold text-slate-600 text-sm text-center">Room 2</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {schedule.map((row) => (
                <tr key={row.id} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="p-4 text-sm font-medium text-slate-700 whitespace-nowrap">
                    {formatDateDisplay(row.date)}
                  </td>
                  <td className="p-4 text-sm text-center">
                    <span className="inline-block bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-md shadow-sm min-w-[3.5rem] font-mono">
                      {row.room1}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-center">
                    <span className="inline-block bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-md shadow-sm min-w-[3.5rem] font-mono">
                      {row.room2}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
