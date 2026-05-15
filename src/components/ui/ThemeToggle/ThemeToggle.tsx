import type { LucideIcon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  icon: LucideIcon;
  toggleTheme: () => void;
}

export default function ThemeToggle({
  icon: Icon,
  toggleTheme,
}: ThemeToggleProps) {
  return (
    <button className={styles.themeToggle} onClick={toggleTheme}>
      <Icon size={20} className={styles.icon} />
    </button>
  );
}
