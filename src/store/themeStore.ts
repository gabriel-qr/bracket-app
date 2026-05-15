import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

export const themeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'dark',

      toggleTheme: () => {
        set({
          theme: get().theme === 'dark' ? 'light' : 'dark',
        });
      },
    }),
    {
      name: 'theme-storage',
    },
  ),
);
