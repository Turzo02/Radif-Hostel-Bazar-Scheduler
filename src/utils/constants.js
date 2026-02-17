export const DEFAULT_ROOMS = [
  ...Array.from({ length: 19 }, (_, i) => (201 + i).toString()), // 201-219
  ...Array.from({ length: 18 }, (_, i) => (301 + i).toString())  // 301-318
];

export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
