import type { CSSProperties } from 'react';

import styles from './CTAButton.module.css';

type CTAButtonProps = {
  onClick: () => void;
  text: string;
  backgroundColor?: string;
  maxWidth?: CSSProperties['maxWidth'];
  textTransform?: CSSProperties['textTransform'];
  fontSize?: string;
};

type CTAButtonStyle = CSSProperties & {
  '--cta-button-background'?: string;
  '--cta-button-max-width'?: CSSProperties['maxWidth'];
  '--cta-button-text-transform'?: CSSProperties['textTransform'];
  '--cta-button-font-size'?: CSSProperties['fontSize'];
};

export default function CTAButton({
  onClick,
  text,
  backgroundColor,
  maxWidth,
  textTransform,
  fontSize,
}: CTAButtonProps) {
  const buttonStyle: CTAButtonStyle = {
    '--cta-button-background': backgroundColor,
    '--cta-button-max-width': maxWidth,
    '--cta-button-text-transform': textTransform,
    '--cta-button-font-size': fontSize,
  };

  return (
    <button onClick={onClick} className={styles.ctaButton} style={buttonStyle}>
      {text}
    </button>
  );
}
