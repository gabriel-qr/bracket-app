import type { LucideIcon } from 'lucide-react';
import styles from './InfoTag.module.css';

interface InfoTagProps {
  icon: LucideIcon;
  text: string;
}

export default function InfoTag({ icon: Icon, text }: InfoTagProps) {
  return (
    <div className={styles.container}>
      <Icon size={15} className={styles.icon} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}
