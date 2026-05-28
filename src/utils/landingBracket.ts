import type { Round } from '../types/bracket';

export const previewData: Round[] = [
  [
    {
      id: 'r0-m0',
      teamA: { name: 'Team Alpha' },
      teamB: { name: 'Team Beta' },
      winner: 'teamA',
    },
    {
      id: 'r0-m1',
      teamA: { name: 'Team Gamma' },
      teamB: { name: 'Team Delta' },
      winner: 'teamB',
    },
    {
      id: 'r0-m2',
      teamA: { name: 'Team Epsilon' },
      teamB: { name: 'Team Zeta' },
      winner: 'teamB',
    },
    {
      id: 'r0-m3',
      teamA: { name: 'Team Eta' },
      teamB: { name: 'Team Theta' },
      winner: 'teamB',
    },
  ],
  [
    {
      id: 'r1-m0',
      teamA: { name: 'Team Alpha' },
      teamB: { name: 'Team Delta' },
      winner: 'teamA',
    },
    {
      id: 'r1-m1',
      teamA: { name: 'Team Zeta' },
      teamB: { name: 'Team Theta' },
      winner: 'teamA',
    },
  ],
  [
    {
      id: 'r2-m0',
      teamA: { name: 'Team Alpha' },
      teamB: { name: 'Team Zeta' },
      winner: 'teamA',
    },
  ],
];
