import './css/home.css';
import PressList from './components/PressList';
import Link from 'next/link';
import RandomPic from './components/RandomPic';
import EmailLink from './components/EmailLink';

export const metadata = {
  title: 'Hey Exit :: Archival Storage',
  description: 'Weird music from 2009-2021',
};

export default function Home() {
  return (
    <>
      <div className="header-container">
        <h1>Archival Storage</h1>
      </div>
      <div className="content-home">
        <div>
          <div className="about">
            <p>
              Hey Exit was my solo music project from 2009-2021. It was mostly
              me (Brendan), but also involved a number of my friends at
              different points. This site is an archive for Hey Exit's
              recordings, shows, press, and related projects.
            </p>
            <p className="disclaimer">
              (It feels a little weird to be make such an involved and thorough
              archive of my old noise music, but on the other hand, it{' '}
              <em>was</em> over ten years of my life, and I believe very
              strongly in using the web this way &mdash; for documenting
              underground culture and the arts, relatively unmediated by
              corporations. Plus, I still like most of the music.)
            </p>
            <RandomPic />
            <p>
              The project covered quite a lot of stylistic ground, working in
              several musical traditions and drawing from many different genres
              within each:
            </p>
            <ul>
              <li>
                <strong>art music and long-form instrumentals:</strong>
                <Link href="/recordings/reading-a-moments-dust">
                  new age doom
                </Link>
                ,{' '}
                <Link href="/recordings/eulogy-for-land">
                  very long solo pieces
                </Link>
                , <Link href="/recordings/arms-reach">free improvisation</Link>,{' '}
                <Link href="/recordings/every-recording-of-gymnopedie-1">
                  plunderphonics
                </Link>
                ,{' '}
                <Link href="/recordings/pushing-waves">
                  electroacoustic composition
                </Link>
              </li>
              <li>
                <strong>songwriting and short-form instrumentals:</strong>
                <Link href="/recordings/inhale-ep">
                  slowcore and downer pop
                </Link>
                ,{' '}
                <Link href="/recordings/the-bitter-scent-of-light">
                  airs for solo instruments and small ensembles
                </Link>
              </li>
              <li>
                <strong>heavy music and non-music:</strong>
                <Link href="/recordings/caudata">harsh noise</Link>,{' '}
                <Link href="/recordings/then-i-might-could-too">
                  industrial
                </Link>
                ,{' '}
                <Link href="/recordings/nothing-is-what-you-deserve">
                  grindcore
                </Link>
                ,{' '}
                <Link href="/recordings/slow-names-2">
                  works for prepared guitar
                </Link>
              </li>
            </ul>
            <p>
              Despite this restless approach to style and tradition, there are
              several throughlines in the work:{' '}
              <em>
                music as spiritual practice, contrasting extremes presented as
                necessary opposites, and the dilemma of making space for hope
                and horror in equal measure
              </em>
              .
            </p>
            <p>
              Some of the creative threads explored throughout the Hey Exit
              catalog went on to become their own projects. These, as well as
              several collaborative projects from aroud the same time, are
              detailed on the <Link href="/projects">related projects</Link>{' '}
              page.
            </p>
            <p>
              After forty-plus releases and one or two hundred shows, Hey Exit
              is retired for the foreseeable future. I still play a lot of
              music; active projects are linked from the{' '}
              <Link href="/current">current projects</Link> page.
            </p>

            <p>
              Feel free to get in touch at <EmailLink email="b@slownames.net" />
              .
            </p>
          </div>
        </div>
        <PressList />
      </div>
    </>
  );
}
