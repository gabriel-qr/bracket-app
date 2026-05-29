import { useLayoutEffect, useRef, useState } from 'react';
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
  const [connectorSize, setConnectorSize] = useState({ height: 0, width: 0 });
  const calculateConnections = connectionsStore(
    (state) => state.calculateConnections,
  );

  useLayoutEffect(() => {
    const handleCalculate = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();

        setConnectorSize({
          height: Math.ceil(containerRect.height),
          width: Math.ceil(containerRect.width),
        });

        calculateConnections(containerRect, rounds, champion);
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
      <BracketConnectors
        height={connectorSize.height}
        width={connectorSize.width}
      />

      {rounds.map((round, index) => (
        <RoundCard matches={round} key={`r-${index}`} roundIndex={index} />
      ))}
    </div>
  );
}
