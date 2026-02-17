import React from 'react';
import { useScheduleState } from './hooks/useScheduleState';
import {
  Header,
  MonthSelector,
  RoomSelector,
  DateSelector,
  ScheduleTable,
  ErrorMessage
} from './components';
import { RefreshCw, Sparkles } from 'lucide-react';

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
    <div className="min-h-screen w-full relative overflow-x-hidden pb-12">
      
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] bg-emerald-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[80vw] h-[80vw] bg-teal-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto md:max-w-5xl px-5 py-8 space-y-8">
        
        <Header onReset={clearData} />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* CONTROLS (Top on mobile, Left on Desktop) */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Control Card */}
            <div className="glass-panel rounded-3xl p-6 space-y-8 animate-in slide-in-from-bottom-4 fade-in duration-500">
              <MonthSelector
                selectedMonth={selectedMonth}
                selectedYear={selectedYear}
                onChange={handleMonthChange}
              />
              
              <div className="w-full h-px bg-white/5" />
              
              <RoomSelector
                activeRooms={activeRooms}
                onToggle={toggleRoom}
                onToggleAll={toggleAllRooms}
              />
              
              <div className="w-full h-px bg-white/5" />
              
              <DateSelector
                generatedDates={generatedDates}
                activeDates={activeDates}
                onToggle={toggleDate}
                onToggleAll={toggleAllDates}
              />
            </div>

            {/* Main Action Button */}
            <button
              onClick={generateBalancedSchedule}
              className="w-full relative overflow-hidden group bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 shadow-lg shadow-emerald-900/50 active:scale-[0.98] transition-transform duration-200"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-active:translate-y-0 transition-transform duration-300" />
              <div className="flex items-center justify-center gap-2 relative z-10">
                <RefreshCw className="w-5 h-5 text-white animate-[spin_8s_linear_infinite]" />
                <span className="font-bold text-white text-lg tracking-wide">Generate Schedule</span>
              </div>
            </button>

            <ErrorMessage message={error} />
          </div>

          {/* RESULTS (Bottom on mobile, Right on Desktop) */}
          <div className="md:col-span-7">
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
