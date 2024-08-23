import localFont from 'next/font/local';

export const font = localFont({
  src: [
    {
      path: './DroidSerif.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './DroidSerif-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './DroidSerif-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './DroidSerif-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-droid-serif',
});