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
              Hey, I'm Brendan. This site is an archive for the music I made
              throughout the 2010s, mostly under the name Hey Exit.
            </p>
            <RandomPic />
            <p>
              Hey Exit was my primary music project for a little over a decade
              ('09-'21). It was mostly a solo endeavor, but I roped in some
              friends here and there. This site collects all the recordings,
              show photos, press, and ephemera from that time.
            </p>
            <p className="disclaimer">
              (It feels a little weird to be make such a thorough archive of my
              old noise music, but on the other hand, I believe very strongly in
              using the web this way &mdash; for documenting underground culture
              and the arts, relatively unmediated by corporations. Plus,
              honestly I still like most of the music.)
            </p>
            <p>
              The project covered quite a lot of stylistic ground, working in
              several musical traditions and drawing from many genres within
              each:
            </p>
            <ul>
              <li>
                <strong>art music and long-form instrumentals:</strong>
                <Link href="/recordings/reading-a-moments-dust">
                  new age doom
                </Link>
                ,{' '}
                <Link href="/recordings/every-recording-of-gymnopedie-1">
                  plunderphonics
                </Link>
                ,{' '}
                <Link href="/recordings/eulogy-for-land">
                  very long solo pieces
                </Link>
                , <Link href="/recordings/arms-reach">free improvisation</Link>,{' '}
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
              <strong>
                music as spiritual practice, contrasting extremes presented as
                necessary opposites, and the dilemma of making space for hope
                and horror in equal measure
              </strong>
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
              music, and my active projects are linked from the{' '}
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
