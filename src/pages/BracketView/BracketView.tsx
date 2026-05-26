import clsx from 'clsx';
import Topbar from '../../components/ui/Topbar/Topbar';
import styles from './BracketView.module.css';
import BracketPreview from '../../components/ui/BracketPreview/BracketPreview';
import { bracketStore } from '../../store/bracketStore';
import { exportBracketStore } from '../../store/exportBracketStore';
import { useEffect, useRef } from 'react';

interface BracketViewProps {
  // defina suas props aqui
}

export default function BracketView({}: BracketViewProps) {
  const rounds = bracketStore((state) => state.rounds);
  const tournament = bracketStore((state) => state.tournament);

  const setBracketRef = exportBracketStore((state) => state.setBracketRef);
  const bracketRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    setBracketRef(bracketRef);
    console.log('setBracketRef called, bracketRef:', bracketRef.current);
  }, [setBracketRef]);

  const lastMatch = rounds[rounds.length - 1][0];
  const champion = lastMatch?.winner
    ? lastMatch[lastMatch.winner].name
    : undefined;

  return (
    <>
      <header className={styles.header}>
        <Topbar />
      </header>

      <main
        className={clsx(styles.container, styles.pageEnter)}
        ref={bracketRef}
      >
        <BracketPreview rounds={rounds} champion={champion} />
      </main>
    </>
  );
}
