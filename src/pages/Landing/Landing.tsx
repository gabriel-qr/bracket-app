import { RefreshCcw, Save, Trophy } from 'lucide-react';

import styles from './Landing.module.css';
import { previewData } from '../../utils/landingBracket';
import Topbar from '../../components/ui/Topbar/Topbar';
import CTAButton from '../../components/ui/CTAButton/CTAButton';
import InfoTag from '../../components/ui/InfoTag/InfoTag';
import BracketPreview from '../../components/ui/BracketPreview/BracketPreview';
import clsx from 'clsx';
import { bracketStore } from '../../store/bracketStore';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function Landing() {
  const rounds = bracketStore((state) => state.rounds);
  const navigate = useNavigate();

  useEffect(() => {
    if (rounds.length > 0) navigate('/bracket');
  }, [rounds]);

  return (
    <>
      <header className={styles.header}>
        <Topbar />
      </header>

      <main className={clsx(styles.container, styles.pageEnter)}>
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
    </>
  );
}
