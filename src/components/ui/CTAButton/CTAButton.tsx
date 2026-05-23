import { uiStore } from '../../../store/uiStore';
import styles from './CTAButton.module.css';

export default function CTAButton() {
  const setIsModalOpen = uiStore((state) => state.setIsModalOpen);
  return (
    <button onClick={() => setIsModalOpen(true)} className={styles.ctaButton}>
      Crie seu chaveamento
    </button>
  );
}
