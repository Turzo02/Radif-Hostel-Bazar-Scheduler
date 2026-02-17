import { useState, useEffect } from 'react';
import { DEFAULT_ROOMS } from '../utils/constants';
import { getDaysInMonth, fisherYatesShuffle } from '../utils/helpers';

export function useScheduleState() {
  // Settings
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Data
  const [activeRooms, setActiveRooms] = useState(DEFAULT_ROOMS);
  const [generatedDates, setGeneratedDates] = useState([]);
  const [activeDates, setActiveDates] = useState([]);
  const [schedule, setSchedule] = useState([]);

  // UI State
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  // Define handleMonthChange before it's used in useEffect
  const handleMonthChange = (month, year) => {
    const newDates = getDaysInMonth(month, year);
    setSelectedMonth(month);
    setSelectedYear(year);
    setGeneratedDates(newDates);
    setActiveDates(newDates); // Select all by default
    setSchedule([]); // Clear invalid schedule
  };

  // Load state on mount
  useEffect(() => {
    const savedState = localStorage.getItem('hostel_rotation_system_state');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        queueMicrotask(() => {
          setSelectedMonth(parsed.selectedMonth ?? new Date().getMonth());
          setSelectedYear(parsed.selectedYear ?? new Date().getFullYear());
          setActiveRooms(parsed.activeRooms ?? DEFAULT_ROOMS);
          setGeneratedDates(parsed.generatedDates ?? []);
          setActiveDates(parsed.activeDates ?? []);
          setSchedule(parsed.schedule ?? []);
        });
      } catch (e) {
        console.error("Failed to load state", e);
      }
    } else {
      queueMicrotask(() => {
        handleMonthChange(new Date().getMonth(), new Date().getFullYear());
      });
    }
    queueMicrotask(() => {
      setIsLoaded(true);
    });
  }, []);

  // Save state on change
  useEffect(() => {
    if (!isLoaded) return;
    const stateToSave = {
      selectedMonth,
      selectedYear,
      activeRooms,
      generatedDates,
      activeDates,
      schedule
    };
    localStorage.setItem('hostel_rotation_system_state', JSON.stringify(stateToSave));
  }, [selectedMonth, selectedYear, activeRooms, generatedDates, activeDates, schedule, isLoaded]);

  const toggleRoom = (room) => {
    setActiveRooms(prev =>
      prev.includes(room) ? prev.filter(r => r !== room) : [...prev, room]
    );
  };

  const toggleDate = (dateStr) => {
    setActiveDates(prev =>
      prev.includes(dateStr) ? prev.filter(d => d !== dateStr) : [...prev, dateStr].sort()
    );
  };

  const toggleAllRooms = () => {
    setActiveRooms(activeRooms.length === DEFAULT_ROOMS.length ? [] : DEFAULT_ROOMS);
  };

  const toggleAllDates = () => {
    setActiveDates(activeDates.length === generatedDates.length ? [] : generatedDates);
  };

  // Core Scheduling Logic (Balanced Round Robin)
  const generateBalancedSchedule = () => {
    setError('');

    // 1. Validation
    if (activeRooms.length < 2) {
      setError('Please select at least 2 rooms to generate a valid schedule.');
      return;
    }
    if (activeDates.length === 0) {
      setError('Please select at least 1 date.');
      return;
    }

    // 2. Setup
    const sortedDates = [...activeDates].sort();
    const totalSlotsNeeded = sortedDates.length * 2; // 2 rooms per date
    let roomQueue = [];

    // 3. Build Queue
    // We need enough rooms in the queue to fill all slots.
    // We add rooms in full "rounds" (all active rooms shuffled) to ensure balance.
    while (roomQueue.length < totalSlotsNeeded) {
      let currentRound = fisherYatesShuffle(activeRooms);

      // Safety Check: Boundary Conflict
      // If the last room of the queue matches the first room of the new round,
      // we swap the first two elements of the new round to avoid a conflict.
      if (roomQueue.length > 0) {
        const lastRoomInQueue = roomQueue[roomQueue.length - 1];
        if (lastRoomInQueue === currentRound[0]) {
          // Swap index 0 and 1 (safe because we validated activeRooms.length >= 2)
          [currentRound[0], currentRound[1]] = [currentRound[1], currentRound[0]];
        }
      }

      roomQueue = [...roomQueue, ...currentRound];
    }

    // 4. Assign to Dates
    // We slice exactly the number of items we need from the queue.
    const finalSchedule = [];
    let queueIndex = 0;

    for (const date of sortedDates) {
      const room1 = roomQueue[queueIndex];
      const room2 = roomQueue[queueIndex + 1];

      // Final Safety Check (Should theoretically not trigger if boundary logic works)
      if (room1 === room2) {
        // This generally shouldn't happen with the boundary check above + unique shuffle,
        // but as a fallback, we can pull from the end of the queue or swap.
        // For now, we trust the boundary logic.
        console.warn(`Conflict detected on ${date}. Logic edge case.`);
      }

      finalSchedule.push({
        id: date,
        date: date,
        room1: room1,
        room2: room2
      });

      queueIndex += 2;
    }

    setSchedule(finalSchedule);
  };

  const clearData = () => {
    if (window.confirm('Are you sure you want to clear all data and reset?')) {
      localStorage.removeItem('hostel_rotation_system_state');
      window.location.reload();
    }
  };

  return {
    // State
    selectedMonth,
    selectedYear,
    activeRooms,
    generatedDates,
    activeDates,
    schedule,
    error,
    isLoaded,
    // Actions
    handleMonthChange,
    toggleRoom,
    toggleDate,
    toggleAllRooms,
    toggleAllDates,
    generateBalancedSchedule,
    clearData,
    setError
  };
}
