import { connectionsStore } from '../../../store/connectionsStore';
import type { Team, WinnerSlot } from '../../../types/bracket';
import TeamSlot from '../TeamSlot/TeamSlot';
import styles from './MatchCard.module.css';

interface MatchCardProps {
  matchId: string;
  teamA: Team;
  teamB: Team;
  scoreA?: number | null;
  scoreB?: number | null;
  winner?: WinnerSlot | null;
}

export default function MatchCard({
  matchId,
  teamA,
  teamB,
  scoreA,
  scoreB,
  winner,
}: MatchCardProps) {
  const registerNode = connectionsStore((state) => state.registerNode);

  return (
    <div
      className={styles.container}
      ref={(el) => {
        registerNode(`in-${matchId}`, el);
        registerNode(`out-${matchId}`, el);
      }}
    >
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
