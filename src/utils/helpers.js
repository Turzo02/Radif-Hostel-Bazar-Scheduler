// Generate all dates for a given month/year
export const getDaysInMonth = (month, year) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    const d = new Date(date);
    // Format YYYY-MM-DD for consistency
    const dayString = d.toLocaleDateString('en-CA');
    days.push(dayString);
    date.setDate(date.getDate() + 1);
  }
  return days;
};

// Friendly date format for display
export const formatDateDisplay = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
};

// Fisher-Yates Shuffle Algorithm
export const fisherYatesShuffle = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
