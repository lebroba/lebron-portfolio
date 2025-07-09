import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('system');

  // This is a simplified version of the useTheme hook
  // In a real implementation, you would want to sync with localStorage
  // and listen for system theme changes

  useEffect(() => {
    // Check if user has a preference stored
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const setThemeValue = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return {
    theme,
    setTheme: setThemeValue,
  };
}