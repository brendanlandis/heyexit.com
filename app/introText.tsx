'use client';
// @ts-ignore
import Obfuscate from 'react-obfuscate';
import Link from 'next/link';

export default function IntroText() {
  return (
    <>
      <p>
        This site is an archive for the now-defunct Hey Exit project, plus some related bands and projects from around
        the same time. Usually there&apos;s a lot of archival material to dig through here, but I&apos;m moving the backend around
        right now, so I expect this site to be down for about a month.
      </p>
      <p>
        In the meantime, you can listen to the archives without any context on{' '}
        <Link href="https://open.spotify.com/artist/59ul4nU3B016dyuv6XYn8e">Spewify</Link>, or with a little bit of
        context on <Link href="https://slownames.bandcamp.com/music">Bandcamp</Link>.
      </p>
      <p>
        These days, I&apos;ve been playing in <Link href="https://receive.blue/">Receive</Link>,{' '}
        <Link href="https://www.instagram.com/_starcard">Star Card</Link>, and{' '}
        <Link href="https://www.instagram.com/__receiver/">Receiver</Link>.
      </p>
      <p>
        ok, thanks for reading. Feel free to get in touch if you like: <Obfuscate email="b@slownames.net" />
      </p>
      <p>-Brendan, August 2024</p>
    </>
  );
}
