import styles from './LandingHero.module.css';
import { RefreshCcw, Save, Trophy } from 'lucide-react';
import CTAButton from '../CTAButton/CTAButton';
import InfoTag from '../InfoTag/InfoTag';
import BracketPreview from '../BracketPreview/BracketPreview';
import type { Round } from '../../../types/bracket';

export default function LandingHero() {
  const previewData: Round[] = [
    [
      {
        id: 'r0-m0',
        teamA: { name: 'Team Alpha' },
        teamB: { name: 'Team Beta' },
        scoreA: 3,
        scoreB: 1,
        winner: 'teamA',
      },
      {
        id: 'r0-m1',
        teamA: { name: 'Team Gamma' },
        teamB: { name: 'Team Delta' },
        scoreA: 2,
        scoreB: 2,
        winner: 'teamB',
      },
      {
        id: 'r0-m2',
        teamA: { name: 'Team Epsilon' },
        teamB: { name: 'Team Zeta' },
        scoreA: 1,
        scoreB: 4,
        winner: 'teamB',
      },
      {
        id: 'r0-m3',
        teamA: { name: 'Team Eta' },
        teamB: { name: 'Team Theta' },
        scoreA: 0,
        scoreB: 2,
        winner: 'teamB',
      },
    ],
    [
      {
        id: 'r1-m0',
        teamA: { name: 'Team Alpha' },
        teamB: { name: 'Team Delta' },
        scoreA: 2,
        scoreB: 1,
        winner: 'teamA',
      },
      {
        id: 'r1-m1',
        teamA: { name: 'Team Zeta' },
        teamB: { name: 'Team Theta' },
        scoreA: 3,
        scoreB: 2,
        winner: 'teamA',
      },
    ],
    [
      {
        id: 'r2-m0',
        teamA: { name: 'Team Alpha' },
        teamB: { name: 'Team Zeta' },
        scoreA: 0,
        scoreB: 2,
        winner: 'teamB',
      },
    ],
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h2 className={styles.subtitle}>Gerador de Chaveamento de Torneios</h2>

        <div className={styles.descriptionContainer}>
          <p className={styles.headlinePrimary}>Monte sua chave.</p>

          <p className={styles.headlineMuted}>Acompanhe cada partida.</p>
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
        <BracketPreview rounds={previewData} />
      </div>
    </div>
  );
}
