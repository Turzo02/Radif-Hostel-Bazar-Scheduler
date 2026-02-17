import { useScheduleState } from './hooks/useScheduleState';
import {
  Header,
  MonthSelector,
  RoomSelector,
  DateSelector,
  ScheduleTable,
  ErrorMessage
} from './components';
import { RefreshCw } from 'lucide-react';

export default function App() {
  const {
    selectedMonth,
    selectedYear,
    activeRooms,
    generatedDates,
    activeDates,
    schedule,
    error,
    isLoaded,
    handleMonthChange,
    toggleRoom,
    toggleDate,
    toggleAllRooms,
    toggleAllDates,
    generateBalancedSchedule,
    clearData
  } = useScheduleState();

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <Header onReset={clearData} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            <MonthSelector
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
              onChange={handleMonthChange}
            />

            <RoomSelector
              activeRooms={activeRooms}
              onToggle={toggleRoom}
              onToggleAll={toggleAllRooms}
            />

            <DateSelector
              generatedDates={generatedDates}
              activeDates={activeDates}
              onToggle={toggleDate}
              onToggleAll={toggleAllDates}
            />

            <button
              onClick={generateBalancedSchedule}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Generate Schedule
            </button>

            <ErrorMessage message={error} />
          </div>

          {/* Results Column */}
          <div className="lg:col-span-7">
            <ScheduleTable
              schedule={schedule}
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
            />
          </div>
        </div>
      </div>
    </div>
  );
}