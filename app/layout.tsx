import { DM_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './css/screen.css';
import Image from 'next/image';
import NavItems from './components/NavItems';
import MobileMenuClose from './components/MobileMenuClose';

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
const charlottenburgClassic = localFont({
  src: './fonts/Charlottenburg_W-Classic.woff2',
  variable: '--font-charlottenburg-classic',
});
const lofiForest = localFont({
  src: './fonts/LofiForest_W-Bold.woff2',
  variable: '--font-lofi-forest',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${dm_mono.variable} ${charlottenburgCircles.variable} ${charlottenburgClassic.variable} ${lofiForest.variable}`}
      >
        <div className="drawer drawer-end">
          <input
            id="mobile-menu-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div id="wrapper" className="drawer-content">
            <header>
              <Image
                src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/hey_exit_white_on_transparent_88200168d9.png"
                alt="Hey Exit logo"
                width={200}
                height={100}
                className="logo"
              />
              <label
                id="navToggle"
                htmlFor="mobile-menu-drawer"
                className="drawer-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <nav id="mainNav">
                <ul>
                  <NavItems />
                </ul>
              </nav>
            </header>
            <main>{children}</main>
            <footer>
              <p>Hey Exit is Brendan Landis, plus a few friends.</p>
              <nav id="footer-nav">
                <ul>
                  <NavItems />
                </ul>
              </nav>
            </footer>
          </div>
          <div className="drawer-side lg:hidden">
            <label
              htmlFor="mobile-menu-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <MobileMenuClose />
              <NavItems />
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
