import type { Team, WinnerSlot } from '../../../types/bracket';
import TeamSlot from '../TeamSlot/TeamSlot';
import styles from './MatchCard.module.css';

interface MatchCardProps {
  teamA: Team;
  teamB: Team;
  scoreA?: number | null;
  scoreB?: number | null;
  winner?: WinnerSlot | null;
}

export default function MatchCard({
  teamA,
  teamB,
  scoreA,
  scoreB,
  winner,
}: MatchCardProps) {
  return (
    <div className={styles.container}>
      <TeamSlot
        name={teamA.name}
        score={scoreA}
        isWinner={winner === 'teamA'}
        teamId='teamA'
      />

      <div className={styles.divider}></div>

      <TeamSlot
        name={teamB.name}
        score={scoreB}
        isWinner={winner === 'teamB'}
        teamId='teamB'
      />
    </div>
  );
}
