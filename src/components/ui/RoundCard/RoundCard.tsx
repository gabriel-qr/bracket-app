import type { Match } from '../../../types/bracket';
import MatchCard from '../MatchCard/MatchCard';
import styles from './RoundCard.module.css';

interface RoundCardProps {
  matches: Match[];
  roundIndex: number;
}

export default function RoundCard({ matches, roundIndex }: RoundCardProps) {
  return (
    <div className={styles.container}>
      {matches.map((match, matchIndex) => (
        <MatchCard
          key={match.id}
          matchId={match.id}
          teamA={match.teamA}
          teamB={match.teamB}
          winner={match.winner}
          roundIndex={roundIndex}
          matchIndex={matchIndex}
        />
      ))}
    </div>
  );
}
