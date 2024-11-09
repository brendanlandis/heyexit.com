import type { Metadata } from 'next';
import { DM_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './css/screen.css';
import Image from 'next/image';
import Link from 'next/link';
import NavItems from './components/NavItems';

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
      <body className={`${dm_mono.variable} ${charlottenburgCircles.variable} ${lofiForest.variable}`}>
        <div id="wrapper">
          <header>
            <Image src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/hey_exit_white_on_transparent_88200168d9.png" alt="Hey Exit logo" width={200} height={100} className="logo" />
            <div id="navToggle" className="dropdown">
              <div tabIndex={0} role="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </div>
              <ul tabIndex={0} className="menu dropdown-content">
                <NavItems />
              </ul>
            </div>
            <nav id="mainNav">
              <ul>
                <NavItems />
              </ul>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
