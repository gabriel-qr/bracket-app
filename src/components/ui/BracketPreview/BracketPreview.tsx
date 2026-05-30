import { useLayoutEffect, useRef, useState } from 'react';
import type { Round } from '../../../types/bracket';
import RoundCard from '../RoundCard/RoundCard';
import styles from './BracketPreview.module.css';
import { connectionsStore } from '../../../store/connectionsStore';
import BracketConnectors from '../BracketConnectors/BracketConnectors';
import ChampionCard from '../ChampionCard/ChampionCard';

interface BracketPreviewProps {
  rounds: Round[];
  champion?: string;
}

export default function BracketPreview({
  rounds,
  champion,
}: BracketPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstRoundRef = useRef<HTMLDivElement>(null);

  const [connectorSize, setConnectorSize] = useState({ height: 0, width: 0 });
  const [roundHeight, setRoundHeight] = useState<number>();

  const calculateConnections = connectionsStore(
    (state) => state.calculateConnections,
  );

  useLayoutEffect(() => {
    const firstRound = firstRoundRef.current;
    if (!firstRound) return;

    const updateRoundHeight = () => {
      const nextHeight = Math.ceil(firstRound.getBoundingClientRect().height);
      setRoundHeight((currentHeight) =>
        currentHeight === nextHeight ? currentHeight : nextHeight,
      );
    };

    updateRoundHeight();

    const resizeObserver = new ResizeObserver(updateRoundHeight);
    resizeObserver.observe(firstRound);

    return () => {
      resizeObserver.disconnect();
    };
  }, [rounds]);

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
  }, [rounds, champion, calculateConnections, roundHeight]);

  return (
    <div className={styles.container} ref={containerRef}>
      <BracketConnectors
        height={connectorSize.height}
        width={connectorSize.width}
      />

      {rounds.map((round, index) => (
        <RoundCard
          height={index === 0 ? undefined : roundHeight}
          key={`r-${index}`}
          matches={round}
          ref={index === 0 ? firstRoundRef : undefined}
          roundIndex={index}
        />
      ))}

      {champion && <ChampionCard championName={champion} />}
    </div>
  );
}
