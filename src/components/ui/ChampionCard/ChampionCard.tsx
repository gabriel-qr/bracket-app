import { Trophy } from 'lucide-react';
import styles from './ChampionCard.module.css';

interface ChampionCardProps {
  championName: string;
}

export default function ChampionCard({ championName }: ChampionCardProps) {
  return (
    <div className={styles.container}>
      <Trophy size={28} strokeWidth={1.5} className={styles.icon} />
      <span className={styles.label}>Campeão</span>
      <span className={styles.champion}>{championName}</span>
    </div>
  );
}
