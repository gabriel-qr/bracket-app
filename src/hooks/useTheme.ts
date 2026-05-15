import { useEffect } from 'react';
import { themeStore } from '../store/themeStore';

export function useTheme() {
  const theme = themeStore((state) => state.theme);
  const toggleTheme = themeStore((state) => state.toggleTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return { theme, toggleTheme };
}
