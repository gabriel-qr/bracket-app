export interface Team {
  name: string;
}

export type WinnerSlot = 'teamA' | 'teamB';

export interface Match {
  id: string;
  teamA: Team;
  teamB: Team;
  scoreA: number | null;
  scoreB: number | null;
  winner: WinnerSlot | null;
}
export type Round = Match[];

export type Status = 'setup' | 'active' | 'playing';

export interface Tournament {
  name: string;
  startDate?: string;
  endDate?: string;
}
