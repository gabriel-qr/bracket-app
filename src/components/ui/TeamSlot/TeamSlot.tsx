import clsx from 'clsx';
import styles from './TeamSlot.module.css';
import type { WinnerSlot } from '../../../types/bracket';

interface TeamSlotProps {
  name: string;
  score?: number | null;
  isWinner?: boolean;
  teamId: WinnerSlot;
  isEditable: boolean;
  onNameChange: (name: string) => void;
}

export default function TeamSlot({
  name,
  score,
  isWinner,
  teamId,
  isEditable,
  onNameChange,
}: TeamSlotProps) {
  return (
    <div
      className={clsx(
        styles.container,
        { [styles.teamA]: teamId === 'teamA' },
        { [styles.teamB]: teamId === 'teamB' },
      )}
    >
      <div
        className={clsx(
          styles.inner,
          { [styles.winner]: isWinner },
          { [styles.teamA]: teamId === 'teamA' },
          { [styles.teamB]: teamId === 'teamB' },
          { [styles.innerEditable]: isEditable },
        )}
      >
        {isEditable ? (
          <input
            type='text'
            className={styles.input}
            placeholder='Equipe ...'
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
          />
        ) : (
          <span
            className={clsx(styles.text, { [styles.winnerText]: isWinner })}
          >
            {name}
          </span>
        )}
        <span className={clsx(styles.text, { [styles.winnerText]: isWinner })}>
          {score}
        </span>
      </div>
    </div>
  );
}
