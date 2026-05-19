import TeamSlot from '../TeamSlot/TeamSlot';
import styles from './MatchCard.module.css';

interface MatchCardProps {
  teamA: { name: string; score?: number };
  teamB: { name: string; score?: number };
  winner?: 'teamA' | 'teamB';
}

export default function MatchCard({ teamA, teamB, winner }: MatchCardProps) {
  return (
    <div className={styles.container}>
      <TeamSlot
        name={teamA.name}
        score={teamA?.score}
        isWinner={winner === 'teamA'}
        teamId='teamA'
      />

      <div className={styles.divider}></div>

      <TeamSlot
        name={teamB.name}
        score={teamB?.score}
        isWinner={winner === 'teamB'}
        teamId='teamB'
      />
    </div>
  );
}
