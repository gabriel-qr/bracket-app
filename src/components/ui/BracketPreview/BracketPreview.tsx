import type { Round } from '../../../types/bracket';
import RoundCard from '../RoundCard/RoundCard';
import styles from './BracketPreview.module.css';

interface BracketPreviewProps {
  rounds: Round[];
}

export default function BracketPreview({ rounds }: BracketPreviewProps) {
  return (
    <div className={styles.container}>
      {rounds.map((round, index) => (
        <RoundCard matches={round} key={index} />
      ))}
    </div>
  );
}
