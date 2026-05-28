import clsx from 'clsx';
import styles from './TeamSlot.module.css';
import type { WinnerSlot } from '../../../types/bracket';
import SlotAction from '../SlotAction/SlotAction';
import { ChevronRight, Undo2 } from 'lucide-react';

interface TeamSlotProps {
  name: string;
  score?: number | null;
  isWinner?: boolean;
  hasWinner: boolean;
  teamId: WinnerSlot;
  isEditable: boolean;
  isPlaying: boolean;
  onNameChange: (name: string) => void;
  onSetWinner: () => void;
  onUndoWinner: (() => void) | null;
}

export default function TeamSlot({
  name,
  score,
  isWinner,
  hasWinner,
  teamId,
  isEditable,
  isPlaying,
  onNameChange,
  onSetWinner,
  onUndoWinner,
}: TeamSlotProps) {
  const isLoser = hasWinner && !isWinner;

  const showConfirm = isPlaying && !hasWinner && name.trim() !== '';
  const showUndo = isPlaying && onUndoWinner !== null;

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

        <div className={styles.slotOverlay}>
          {(showConfirm || showUndo) && <div className={styles.gradient} />}
          {showUndo && (
            <button onClick={onUndoWinner} className={styles.button}>
              <SlotAction icon={Undo2} isSetWinner={false} />
            </button>
          )}

          {showConfirm && (
            <button onClick={onSetWinner} className={styles.button}>
              <SlotAction icon={ChevronRight} isSetWinner={true} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
