import { Moon, SunDim, Trophy } from 'lucide-react';
import styles from './Topbar.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useTheme } from '../../../hooks/useTheme';

export default function Topbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <a href='/'>
        <Trophy className={styles.icon} size={26} />
        <h1>Brackify Arena</h1>
      </a>

      <div className={styles.right}>
        <ThemeToggle
          icon={theme === 'light' ? Moon : SunDim}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
}
