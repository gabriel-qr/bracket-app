import { AlertTriangle, RefreshCcw } from 'lucide-react';
import { bracketStore } from '../../../store/bracketStore';
import styles from './ResetModal.module.css';
import clsx from 'clsx';

interface ResetModalProps {
  onClose: () => void;
}

export default function ResetModal({ onClose }: ResetModalProps) {
  const resetBracket = bracketStore((state) => state.resetBracket);

  const handleReset = () => {
    resetBracket();
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.header}>Reiniciar torneio</h2>
        <div className={styles.warning}>
          <AlertTriangle
            className={styles.icon}
            size={16}
            strokeWidth={2.5}
            color='var(--danger)'
          />

          <p className={styles.description}>
            Todo o progresso será perdido permanentemente. Esta ação não pode
            ser desfeita.
          </p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.buttonContainer}>
          <button
            className={clsx(styles.button, styles.cancel)}
            onClick={onClose}
          >
            Cancelar
          </button>

          <button
            className={clsx(styles.button, styles.confirm)}
            onClick={handleReset}
          >
            <RefreshCcw className={styles.icon} size={16} />
            <span>Reiniciar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
