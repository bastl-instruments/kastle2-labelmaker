import { useRef } from 'react';
import { snapdom } from '@zumer/snapdom';

export default function useDownloadAsPng(filename = 'download.png') {
  const ref = useRef();

  const download = async () => {
    const img = await snapdom.toPng(ref.current, {
        embedFonts: true
    });
    const link = document.createElement('a');
    link.href = img.src;
    link.download = filename;
    link.click();
  };

  return [ref, download];
}
