import styles from './BracketConnectors.module.css';
import { connectionsStore } from '../../../store/connectionsStore';
import clsx from 'clsx';

interface BracketConnectorsProps {
  height: number;
  width: number;
}

export default function BracketConnectors({
  height,
  width,
}: BracketConnectorsProps) {
  const lines = connectionsStore((state) => state.lines);

  const sorted = [...lines].sort((a, b) =>
    a.isWinner === b.isWinner ? 0 : a.isWinner ? 1 : -1,
  );

  if (width <= 0 || height <= 0) return null;

  return (
    <svg
      className={styles.container}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {sorted.map((line) => (
        <path
          key={line.id}
          d={line.pathString}
          fill='none'
          stroke={line.isWinner ? 'var(--accent-path)' : 'var(--stroke-subtle)'}
          strokeWidth={line.isWinner ? 2 : 1.5}
          className={clsx(styles.lineDefault, {
            [styles.lineWinner]: line.isWinner,
          })}
        />
      ))}
    </svg>
  );
}
