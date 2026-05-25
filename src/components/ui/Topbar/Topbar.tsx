import { Download, Moon, RefreshCcw, SunDim, Trophy } from 'lucide-react';
import styles from './Topbar.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { uiStore } from '../../../store/uiStore';
import { bracketStore } from '../../../store/bracketStore';
import { useNavigate } from 'react-router';

export default function Topbar() {
  const theme = uiStore((state) => state.theme);
  const toggleTheme = uiStore((state) => state.toggleTheme);
  const rounds = bracketStore((state) => state.rounds);
  const tournament = bracketStore((state) => state.tournament);
  const resetBracket = bracketStore((state) => state.resetBracket);

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button
        className={styles.left}
        onClick={() => {
          resetBracket();
          navigate('/');
        }}
      >
        <Trophy className={styles.trophyIcon} size={22} />
        <h1 className={styles.title}>Brackify Arena</h1>
      </button>

      <div className={styles.right}>
        {rounds.length > 0 && (
          <>
            <span className={styles.tournamentName}>{tournament.name}</span>

            <button className={styles.button} onClick={() => {}}>
              <Download className={styles.icon} size={14} />
              <span>Exportar</span>
            </button>

            <button className={styles.button} onClick={resetBracket}>
              <RefreshCcw className={styles.icon} size={14} />
              <span>Reiniciar</span>
            </button>
          </>
        )}

        <ThemeToggle
          icon={theme === 'light' ? Moon : SunDim}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
}
