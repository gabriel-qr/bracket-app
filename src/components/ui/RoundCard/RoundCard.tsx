import type { Match } from '../../../types/bracket';
import MatchCard from '../MatchCard/MatchCard';
import styles from './RoundCard.module.css';
import { forwardRef, type CSSProperties } from 'react';

interface RoundCardProps {
  matches: Match[];
  roundIndex: number;
  height?: number;
}

const RoundCard = forwardRef<HTMLDivElement, RoundCardProps>(
  ({ matches, roundIndex, height }, ref) => {
    const style: CSSProperties | undefined = height ? { height } : undefined;

    return (
      <div className={styles.container} ref={ref} style={style}>
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
  },
);

RoundCard.displayName = 'RoundCard';

export default RoundCard;
