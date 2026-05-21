import styles from './BracketConnectors.module.css';
import { connectionsStore } from '../../../store/connectionsStore';
import clsx from 'clsx';

export default function BracketConnectors() {
  const lines = connectionsStore((state) => state.lines);

  const sorted = [...lines].sort((a, b) =>
    a.isWinner === b.isWinner ? 0 : a.isWinner ? 1 : -1,
  );

  return (
    <svg className={styles.container} width='100%' height='100%'>
      {sorted.map((line) => (
        <path
          key={line.id}
          d={line.pathString}
          fill='none'
          className={clsx(styles.lineDefault, {
            [styles.lineWinner]: line.isWinner,
          })}
        />
      ))}
    </svg>
  );
}
