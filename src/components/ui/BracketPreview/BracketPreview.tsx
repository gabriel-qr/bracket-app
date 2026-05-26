import { useLayoutEffect, useRef } from 'react';
import type { Round } from '../../../types/bracket';
import RoundCard from '../RoundCard/RoundCard';
import styles from './BracketPreview.module.css';
import { connectionsStore } from '../../../store/connectionsStore';
import BracketConnectors from '../BracketConnectors/BracketConnectors';

interface BracketPreviewProps {
  rounds: Round[];
  champion?: string;
}

export default function BracketPreview({
  rounds,
  champion,
}: BracketPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const calculateConnections = connectionsStore(
    (state) => state.calculateConnections,
  );

  useLayoutEffect(() => {
    const handleCalculate = () => {
      if (containerRef.current) {
        calculateConnections(
          containerRef.current.getBoundingClientRect(),
          rounds,
          champion,
        );
      }
    };

    const timer = setTimeout(handleCalculate, 0);
    window.addEventListener('resize', handleCalculate);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleCalculate);
    };
  }, [rounds, champion, calculateConnections]);

  return (
    <div className={styles.container} ref={containerRef}>
      <BracketConnectors />

      {rounds.map((round, index) => (
        <RoundCard matches={round} key={`r-${index}`} roundIndex={index} />
      ))}
    </div>
  );
}
