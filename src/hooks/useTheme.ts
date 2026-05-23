import { useEffect } from 'react';
import { uiStore } from '../store/uiStore';

export function useTheme() {
  const theme = uiStore((state) => state.theme);
  const toggleTheme = uiStore((state) => state.toggleTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return { theme, toggleTheme };
}
