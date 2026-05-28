import type { LucideIcon } from 'lucide-react';
import styles from './SlotAction.module.css';
import clsx from 'clsx';

interface SlotActionProps {
  icon: LucideIcon;
  isSetWinner?: boolean;
}

export default function SlotAction({
  icon: Icon,
  isSetWinner,
}: SlotActionProps) {
  return (
    <div
      className={clsx(
        styles.container,
        { [styles.setWinner]: isSetWinner },
        { [styles.undoWinner]: !isSetWinner },
      )}
    >
      <Icon size={14} className={styles.icon} />
    </div>
  );
}
