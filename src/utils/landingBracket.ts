import type { Round } from '../types/bracket';

export const previewData: Round[] = [
  [
    {
      id: 'r0-m0',
      teamA: { name: 'Team Alpha' },
      teamB: { name: 'Team Beta' },
      scoreA: 3,
      scoreB: 1,
      winner: 'teamA',
    },
    {
      id: 'r0-m1',
      teamA: { name: 'Team Gamma' },
      teamB: { name: 'Team Delta' },
      scoreA: 2,
      scoreB: 2,
      winner: 'teamB',
    },
    {
      id: 'r0-m2',
      teamA: { name: 'Team Epsilon' },
      teamB: { name: 'Team Zeta' },
      scoreA: 1,
      scoreB: 4,
      winner: 'teamB',
    },
    {
      id: 'r0-m3',
      teamA: { name: 'Team Eta' },
      teamB: { name: 'Team Theta' },
      scoreA: 0,
      scoreB: 2,
      winner: 'teamB',
    },
  ],
  [
    {
      id: 'r1-m0',
      teamA: { name: 'Team Alpha' },
      teamB: { name: 'Team Delta' },
      scoreA: 2,
      scoreB: 1,
      winner: 'teamA',
    },
    {
      id: 'r1-m1',
      teamA: { name: 'Team Zeta' },
      teamB: { name: 'Team Theta' },
      scoreA: 3,
      scoreB: 2,
      winner: 'teamA',
    },
  ],
  [
    {
      id: 'r2-m0',
      teamA: { name: 'Team Alpha' },
      teamB: { name: 'Team Zeta' },
      scoreA: 4,
      scoreB: 2,
      winner: 'teamA',
    },
  ],
];
