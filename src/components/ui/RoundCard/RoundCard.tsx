import type { Match } from '../../../types/bracket';
import MatchCard from '../MatchCard/MatchCard';
import styles from './RoundCard.module.css';

interface RoundCardProps {
  matches: Match[];
}

export default function RoundCard({ matches }: RoundCardProps) {
  return (
    <div className={styles.container}>
      {matches.map((match) => (
        <div key={match.id}>
          <MatchCard
            teamA={match.teamA}
            teamB={match.teamB}
            scoreA={match.scoreA ?? null}
            scoreB={match.scoreB ?? null}
            winner={match.winner}
          />
        </div>
      ))}
    </div>
  );
}
