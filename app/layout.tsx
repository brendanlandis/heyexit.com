import type { Metadata } from 'next';
import { DM_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './css/screen.css';

// fonts
const dm_mono = DM_Mono({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
});

const charlottenburgCircles = localFont({
  src: './fonts/Charlottenburg_W-Circles.woff2',
  variable: '--font-charlottenburg-circles',
});
const lofiForest = localFont({ src: './fonts/LofiForest_W-Bold.woff2', variable: '--font-lofi-forest' });

export const metadata: Metadata = {
  title: 'Hey Exit',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_mono.variable} ${charlottenburgCircles.variable} ${lofiForest.variable}` }>{children}</body>
    </html>
  );
}
