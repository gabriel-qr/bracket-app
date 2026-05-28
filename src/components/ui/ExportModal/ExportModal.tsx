import clsx from 'clsx';
import { bracketStore } from '../../../store/bracketStore';
import { exportBracketStore } from '../../../store/exportBracketStore';
import type { ExportFormat } from '../../../types/bracket';
import styles from './ExportModal.module.css';
import { useState } from 'react';

interface ExportModalProps {
  onClose?: () => void;
}
type SelectedButton = 'jpeg' | 'png';

export default function ExportModal({ onClose }: ExportModalProps) {
  const exportBracket = exportBracketStore((state) => state.exportBracket);
  const bracketRef = exportBracketStore((state) => state.bracketRef);
  const tournament = bracketStore((state) => state.tournament);

  const [selected, setSelected] = useState<SelectedButton>('png');

  const handleExport = async (format: ExportFormat) => {
    try {
      await exportBracket(format, bracketRef!, tournament.name);
    } catch (err) {
      alert('Não foi possível exportar a chave');
    }
  };
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.header}>Exportar Chave</h3>
        <div className={styles.formatsContainer}>
          <button
            onClick={() => setSelected('png')}
            className={clsx(styles.formatCard, {
              [styles.isSelected]: selected === 'png',
            })}
          >
            PNG
          </button>

          <button
            onClick={() => setSelected('jpeg')}
            className={clsx(styles.formatCard, {
              [styles.isSelected]: selected === 'jpeg',
            })}
          >
            JPEG
          </button>
        </div>

        <button
          className={styles.exportButton}
          onClick={() => handleExport(selected)}
        >
          Exportar como <span className={styles.formatText}>{selected}</span>
        </button>

        <button className={styles.cancel} type='button' onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
