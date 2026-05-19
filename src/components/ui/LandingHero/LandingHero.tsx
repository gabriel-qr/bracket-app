import styles from './LandingHero.module.css';
import { RefreshCcw, Save, Trophy } from 'lucide-react';
import CTAButton from '../CTAButton/CTAButton';
import InfoTag from '../InfoTag/InfoTag';
import MatchCard from '../MatchCard/MatchCard';

export default function LandingHero() {
  return (
    <>
      <div className={styles.left}>
        <h2 className={styles.subtitle}>Gerador de Chaveamento de Torneios</h2>

        <div className={styles.descriptionContainer}>
          <p
            className={styles.largeText}
            style={{ color: 'var(--ink-primary)' }}
          >
            Monte sua chave.
          </p>

          <p className={styles.largeText} style={{ color: 'var(--ink-muted)' }}>
            Acompanhe cada partida.
          </p>
        </div>

        <p className={styles.subDescription}>
          Crie, compartilhe e acompanhe qualquer torneio — qualquer esporte.
        </p>

        <CTAButton />

        <div className={styles.tagContainer}>
          <InfoTag icon={Trophy} text='Qualquer esporte' />
          <InfoTag icon={RefreshCcw} text='Edite a qualquer momento' />
          <InfoTag icon={Save} text='Salvo automaticamente' />
        </div>
      </div>
      <div className={styles.right}>
        <MatchCard
          teamA={{ name: 'Team Alpha', score: 3 }}
          teamB={{ name: 'Team Beta', score: 1 }}
          winner='teamA'
        />
      </div>
    </>
  );
}
