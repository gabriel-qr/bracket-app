import { bracketStore } from '../../../store/bracketStore';
import { exportBracketStore } from '../../../store/exportBracketStore';
import type { ExportFormat } from '../../../types/bracket';
import styles from './ExportModal.module.css';
import { useState } from 'react';
import CTAButton from '../CTAButton/CTAButton';
import { FileImage, Image } from 'lucide-react';
import FormatCard from '../FormatCard/FormatCard';

interface ExportModalProps {
  onClose?: () => void;
}
type SelectedButton = 'jpeg' | 'png';

const formatOptions = [
  {
    description: 'Maior qualidade',
    format: 'png',
    icon: FileImage,
    title: 'PNG',
  },
  {
    description: 'Menor tamanho',
    format: 'jpeg',
    icon: Image,
    title: 'JPEG',
  },
] as const;

export default function ExportModal({ onClose }: ExportModalProps) {
  const exportBracket = exportBracketStore((state) => state.exportBracket);
  const bracketRef = exportBracketStore((state) => state.bracketRef);
  const tournament = bracketStore((state) => state.tournament);

  const [selected, setSelected] = useState<SelectedButton>('png');

  const handleExport = async (format: ExportFormat) => {
    if (!bracketRef) {
      alert('Não foi possível encontrar a chave para exportar');
      return;
    }

    try {
      await exportBracket(format, bracketRef, tournament.name);
    } catch {
      alert('Não foi possível exportar a chave');
    }
  };
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.header}>Exportar Chave</h3>

        <div className={styles.formatsContainer}>
          {formatOptions.map((option) => (
            <FormatCard
              key={option.format}
              onClick={() => setSelected(option.format)}
              icon={option.icon}
              isSelected={selected === option.format}
              title={option.title}
              description={option.description}
            />
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <CTAButton
            text={`Exportar como ${selected.toUpperCase()}`}
            onClick={() => handleExport(selected)}
            textTransform='none'
          />

          <button className={styles.cancel} type='button' onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
