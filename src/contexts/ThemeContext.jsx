import { createContext, useContext, useState, useEffect } from 'react';

// Create theme context
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

// Custom hook to use theme
export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  if (!theme && !toggleTheme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return { theme, toggleTheme };
}

// Theme provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check system preference first
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    // Check localStorage for saved preference
    const stored = localStorage.getItem('theme');
    
    // Use system preference if no stored preference
    const initialTheme = stored || systemPreference || 'light';
    
    return initialTheme;
  });

  useEffect(() => {
    // Apply theme to HTML element
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
