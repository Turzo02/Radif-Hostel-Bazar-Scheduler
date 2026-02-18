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

import { RefreshCw, Sparkles, Moon, Sun } from 'lucide-react';

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
        <div className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-linear-to-br from-(--accent-start)/10 to-(--accent-end)/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-linear-to-br from-(--accent-end)/10 to-(--accent-start)/10 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] w-[60vw] h-[60vw] bg-linear-to-br from-(--accent-start)/5 to-(--accent-end)/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto md:max-w-5xl px-5 py-8 space-y-8">
        
        <div className="flex items-center justify-center">
          <Header onReset={clearData} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* CONTROLS (Top on mobile, Left on Desktop) */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Control Card */}
            <div className="glass p-6 space-y-8 animate-in slide-in-from-bottom-4 fade-in duration-500">
              <MonthSelector
                selectedMonth={selectedMonth}
                selectedYear={selectedYear}
                onChange={handleMonthChange}
              />
              
              <div className="w-full h-px bg-(--border-color)" />
              
              <RoomSelector
                activeRooms={activeRooms}
                onToggle={toggleRoom}
                onToggleAll={toggleAllRooms}
              />
              
              <div className="w-full h-px bg-(--border-color)" />
              
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
              className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
            >
              <RefreshCw className="w-5 h-5 animate-[spin_8s_linear_infinite]" />
              <span>Generate Schedule</span>
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
