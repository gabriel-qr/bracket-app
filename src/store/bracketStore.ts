import { create } from 'zustand';
import type { Round, Status, Tournament, WinnerSlot } from '../types/bracket';
import { persist } from 'zustand/middleware';
import { generateBracket } from '../utils/generateBracket';

interface BracketStore {
  tournament: Tournament;
  rounds: Round[];
  status: Status;

  setTournament: (data: Tournament) => void;
  setStatus: (status: Status) => void;
  resetBracket: () => void;
  generateBracket: (teamCount: number) => void;
  renameTeam: (
    roundIndex: number,
    matchIndex: number,
    teamId: WinnerSlot,
    name: string,
  ) => void;
  setWinner: (
    roundIndex: number,
    matchIndex: number,
    winner: WinnerSlot,
  ) => void;
  undoWinner: (
    roundIndex: number,
    matchIndex: number,
    teamId: WinnerSlot,
  ) => void;
}

export const bracketStore = create<BracketStore>()(
  persist(
    (set, get) => ({
      tournament: { name: '' },
      rounds: [],
      status: 'setup',

      setTournament: (data) => set({ tournament: data }),

      setStatus: (status) => set({ status }),

      resetBracket: () =>
        set({ tournament: { name: '' }, rounds: [], status: 'setup' }),

      generateBracket: (teamCount) =>
        set({ rounds: generateBracket(teamCount), status: 'active' }),

      renameTeam: (roundIndex, matchIndex, teamId, name) => {
        const rounds = structuredClone(get().rounds);

        rounds[roundIndex][matchIndex][teamId].name = name;

        set({ rounds });
      },

      setWinner: (roundIndex, matchIndex, winner) => {
        const rounds = structuredClone(get().rounds);
        const winnerObj = rounds[roundIndex][matchIndex][winner];

        rounds[roundIndex][matchIndex].winner = winner;

        const nextMatchIndex = Math.floor(matchIndex / 2);
        const slot = matchIndex % 2 === 0 ? 'teamA' : 'teamB';

        if (rounds[roundIndex + 1]) {
          rounds[roundIndex + 1][nextMatchIndex][slot] = winnerObj;
        }

        set({ rounds });
      },

      undoWinner: (roundIndex, matchIndex, teamId) => {
        const rounds = structuredClone(get().rounds);

        if (roundIndex === 0) return;

        const previousRoundIndex = roundIndex - 1;

        const previousMatchIndex =
          teamId === 'teamA' ? matchIndex * 2 : matchIndex * 2 + 1;

        rounds[previousRoundIndex][previousMatchIndex].winner = null;

        rounds[roundIndex][matchIndex][teamId] = {
          name: '',
        };

        set({ rounds });
      },
    }),
    { name: 'bracket-storage' },
  ),
);
