import {
  Download,
  Lock,
  Moon,
  Play,
  RefreshCcw,
  SunDim,
  Trophy,
} from 'lucide-react';
import styles from './Topbar.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { uiStore } from '../../../store/uiStore';
import { bracketStore } from '../../../store/bracketStore';
import { useNavigate } from 'react-router';
import clsx from 'clsx';

interface TopbarProps {
  handleOpenExportModal: () => void;
  handleOpenResetModal: () => void;
}

export default function Topbar({
  handleOpenExportModal,
  handleOpenResetModal,
}: TopbarProps) {
  const theme = uiStore((state) => state.theme);
  const toggleTheme = uiStore((state) => state.toggleTheme);
  const rounds = bracketStore((state) => state.rounds);
  const tournament = bracketStore((state) => state.tournament);
  const status = bracketStore((state) => state.status);
  const setStatus = bracketStore((state) => state.setStatus);

  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <button
        className={styles.left}
        onClick={() => {
          handleOpenResetModal();
          navigate('/');
        }}
      >
        <Trophy className={styles.trophyIcon} size={22} />
        <h1 className={styles.title}>Torneio.app</h1>
      </button>

      <div className={styles.right}>
        {rounds.length > 0 && (
          <>
            <span className={styles.tournamentName}>{tournament.name}</span>

            <button
              className={clsx(styles.button, {
                [styles.locked]: status === 'playing',
              })}
              onClick={() => {
                status === 'active'
                  ? setStatus('playing')
                  : setStatus('active');
              }}
              disabled={status === 'playing'}
            >
              {status === 'active' ? (
                <Play className={styles.icon} size={16} />
              ) : (
                <Lock className={styles.icon} size={16} />
              )}
              <span>
                {status === 'active' ? 'Iniciar Torneio' : 'Torneio iniciado'}
              </span>
            </button>

            <button className={styles.button} onClick={handleOpenExportModal}>
              <Download className={styles.icon} size={16} />
              <span>Exportar</span>
            </button>

            <button className={styles.button} onClick={handleOpenResetModal}>
              <RefreshCcw className={styles.icon} size={16} />
              <span>Reiniciar</span>
            </button>
          </>
        )}

        <ThemeToggle
          icon={theme === 'light' ? Moon : SunDim}
          toggleTheme={toggleTheme}
        />
      </div>
    </header>
  );
}
