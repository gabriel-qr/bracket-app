import { toJpeg, toPng } from 'html-to-image';
import type { ExportFormat } from '../types/bracket';
import { uiStore } from '../store/uiStore';

const downloadImage = (dataUrl: string, fileName: string) => {
  const link = document.createElement('a');

  link.download = fileName;
  link.href = dataUrl;
  link.click();
};

const getBackgroundColor = (): string => {
  const theme = uiStore.getState().theme;
  return theme === 'dark' ? '#0c1017' : '#f0f4f8';
};

export const exportBracket = async (
  format: ExportFormat,
  ref: React.RefObject<HTMLDivElement>,
  fileName: string,
): Promise<void> => {
  if (!ref.current) {
    throw new Error('Bracket reference not found');
  }

  try {
    const backgroundColor = getBackgroundColor();

    const dataUrl =
      format === 'jpeg'
        ? await toJpeg(ref.current, {
            quality: 1,
            backgroundColor,
          })
        : await toPng(ref.current, {
            quality: 1,
            backgroundColor,
          });

    downloadImage(dataUrl, `${fileName}.${format}`);
  } catch (err) {
    console.error('Image export failed:', err);

    throw new Error(
      `Image export failed: ${
        err instanceof Error ? err.message : 'Unknown error'
      }`,
    );
  }
};
