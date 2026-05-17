import LandingHero from '../../ui/LandingHero/LandingHero';
import Topbar from '../../ui/Topbar/Topbar';
import styles from './Landing.module.css';

export default function Landing() {
  return (
    <>
      <header className={styles.header}>
        <Topbar />
      </header>

      <main className={styles.container}>
        <LandingHero />
      </main>
    </>
  );
}
