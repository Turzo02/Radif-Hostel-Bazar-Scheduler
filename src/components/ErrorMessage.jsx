import { AlertCircle } from 'lucide-react';

export function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg border border-red-200 dark:border-red-800 text-sm font-medium flex items-center gap-2 animate-pulse">
      <AlertCircle className="w-4 h-4" /> {message}
    </div>
  );
}
