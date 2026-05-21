import type { Match, Round } from '../types/bracket';

export const generateBracket = (teamCount: number): Round[] => {
  let matchCount = teamCount;
  let round: Match[] = [];
  let result: Round[] = [];

  for (let i = 0; matchCount > 1; i++) {
    matchCount = teamCount / 2 ** (i + 1);

    for (let j = 0; j < matchCount; j++) {
      round.push({
        id: `r${i}-m${j}`,
        teamA: { name: '' },
        teamB: { name: '' },
        scoreA: null,
        scoreB: null,
        winner: null,
      });
    }

    result.push(round);
    round = [];
  }

  return result;
};
