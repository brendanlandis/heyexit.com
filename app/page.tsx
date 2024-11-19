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
              Hey Exit was an active musical project from 2009-2021. It featured a number of collaborators at different
              points, but mainly belonged to Brendan Landis.
            </p>
            <RandomPic />
            <p>
              The project covered quite a lot of stylistic ground, working in several musical traditions and drawing
              from many different genres within each:
            </p>
            <ul>
              <li>
                <strong>art music and long-form instrumentals</strong> (new age doom, electroacoustic composition, free
                improvisation, prepared guitar, plunderphonics)
              </li>
              <li>
                <strong>songwriting and short-form instrumentals</strong> (slowcore, downer pop, airs for solo
                instruments and small ensembles)
              </li>
              <li>
                <strong>heavy music and non-music</strong> (harsh noise, industrial, grindcore)
              </li>
            </ul>
            <p>
              Despite this restless approach to style and tradition, there are several throughlines in the work:{' '}
              <em>
                music as spiritual practice, contrasting extremes presented as necessary opposites, and the dilemma of
                making space for hope and horror in equal measure
              </em>
              .
            </p>
            <p>
              Many of the creative threads explored throughout the Hey Exit catalog went on to become their own
              projects. These, as well as several noise bands Brendan played in aroud the same time, are detailed on the{' '}
              <Link href="https://heyexit.com/">related</Link> page.
            </p>
            <p>
              After forty five releases and one or two hundred shows, Hey Exit is retired for the foreseeable future.
              Active projects are linked from the <Link href="https://heyexit.com/">current</Link> page.
            </p>

            <p>
              Feel free to get in touch at <EmailLink email="b@slownames.net" />.
            </p>
          </div>
        </div>
        <PressList />
      </div>
    </>
  );
}
