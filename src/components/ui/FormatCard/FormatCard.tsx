import clsx from 'clsx';
import type { LucideIcon } from 'lucide-react';

import styles from './FormatCard.module.css';

interface FormatCardProps {
  description: string;
  icon: LucideIcon;
  isSelected: boolean;
  onClick: () => void;
  title: string;
}

export default function FormatCard({
  description,
  icon: Icon,
  isSelected,
  onClick,
  title,
}: FormatCardProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-pressed={isSelected}
      className={clsx(styles.formatCard, {
        [styles.isSelected]: isSelected,
      })}
    >
      <div className={styles.iconContainer}>
        <Icon size={20} className={styles.icon} />
      </div>

      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </button>
  );
}
