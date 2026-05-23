import { RefreshCcw, Save, Trophy } from 'lucide-react';

import styles from './Landing.module.css';
import { previewData } from '../../utils/landingBracket';
import Topbar from '../../components/ui/Topbar/Topbar';
import CTAButton from '../../components/ui/CTAButton/CTAButton';
import InfoTag from '../../components/ui/InfoTag/InfoTag';
import BracketPreview from '../../components/ui/BracketPreview/BracketPreview';

export default function Landing() {
  return (
    <div>
      <header className={styles.header}>
        <Topbar />
      </header>

      <main className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.subtitle}>
            Gerador de Chaveamento de Torneios
          </h2>

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
          <BracketPreview rounds={previewData} champion='Team Alpha' />
        </div>
      </main>
    </div>
  );
}
