import { Moon, SunDim, Trophy } from 'lucide-react';
import styles from './Topbar.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { uiStore } from '../../../store/uiStore';

export default function Topbar() {
  const theme = uiStore((state) => state.theme);
  const toggleTheme = uiStore((state) => state.toggleTheme);

  return (
    <div className={styles.container}>
      <a href='/' className={styles.left}>
        <Trophy className={styles.icon} size={26} />
        <h1 className={styles.title}>Brackify Arena</h1>
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
