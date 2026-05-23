import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface UiStore {
  theme: Theme;
  toggleTheme: () => void;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export const uiStore = create<UiStore>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      isModalOpen: false,

      toggleTheme: () => {
        set({
          theme: get().theme === 'dark' ? 'light' : 'dark',
        });
      },

      setIsModalOpen: (value: boolean) => {
        set({ isModalOpen: value });
      },
    }),
    {
      name: 'ui-storage',
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);
