import clsx from 'clsx';
import Topbar from '../../components/ui/Topbar/Topbar';
import styles from './BracketView.module.css';

interface BracketViewProps {
  // defina suas props aqui
}

export default function BracketView({}: BracketViewProps) {
  return (
    <>
      <header className={styles.header}>
        <Topbar />
      </header>

      <main className={clsx(styles.container, styles.pageEnter)}></main>
    </>
  );
}
