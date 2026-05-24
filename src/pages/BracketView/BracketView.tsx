import Topbar from '../../components/ui/Topbar/Topbar';
import styles from './BracketView.module.css';

interface BracketViewProps {
  // defina suas props aqui
}

export default function BracketView({}: BracketViewProps) {
  return (
    <div className={styles.container}>
      <Topbar />
    </div>
  );
}
