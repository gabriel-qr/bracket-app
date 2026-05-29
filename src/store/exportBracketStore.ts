import { create } from 'zustand';
import type { ExportFormat } from '../types/bracket';
import { exportBracket } from '../utils/exportBracket';

interface ExportBracketStore {
  bracketRef: React.RefObject<HTMLDivElement> | null;

  setBracketRef: (ref: React.RefObject<HTMLDivElement>) => void;

  exportBracket: (
    format: ExportFormat,
    ref: React.RefObject<HTMLDivElement>,
    fileName: string,
  ) => Promise<void>;
}

export const exportBracketStore = create<ExportBracketStore>()((set) => ({
  bracketRef: null,

  setBracketRef: (ref) => set({ bracketRef: ref }),

  exportBracket: async (format, ref, fileName) => {
    await exportBracket(format, ref, fileName);
  },
}));
