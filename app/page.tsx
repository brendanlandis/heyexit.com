'use client';
import './css/home.css';
import Image from 'next/image';
import { Press } from './types';
import { GetPressDetails } from './components/GetPressDetails';
import useAxios from 'axios-hooks';
import { Fragment } from 'react';
import Link from 'next/link';
import Obfuscate from 'react-obfuscate';

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function Home() {
  const [{ data: presses, loading, error }, refetch] = useAxios(
    'https://slownames.net/api/presses?populate=bands&populate=recordings&populate=attachments&filters[visibility]=highlight&filters[bands][name]=Hey%20Exit&filters[type][$ne]=interview&pagination[pageSize]=100'
  );
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  const formatPresses = (presses: { data: Press[] }): Press[] => {
    return presses.data.map(GetPressDetails);
  };

  const formattedPresses = presses ? formatPresses(presses) : [];
  const shuffledPresses = shuffleArray(formattedPresses);

  return (
    <>
      <div className="content-home">
        <div>
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/170116_lot_in_japan_Petra_Magno_01_20be880764.jpg"
            alt="photo of Brendan Landis"
            width={900}
            height={100}
            className="headerPhoto"
            priority
          />
          <div className="about">
            <p>
              Hey Exit was an active musical project from 2009-2021. It covered quite a lot of stylistic ground, working
              in several musical traditions and drawing from many different genres within each:
            </p>
            <ul>
              <li>
                <strong>art music & long-form instrumentals</strong> (new age doom, electroacoustic composition, free
                improvisation, prepared guitar, plunderphonics)
              </li>
              <li>
                <strong>heavy music & non-music</strong> (harsh noise, industrial, grindcore)
              </li>
              <li>
                <strong>songwriting & short-form instrumentals</strong> (downer pop, airs for solo instruments and small
                ensembles)
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
              After forty five releases and one or two hundred shows, Hey Exit is retired for the foreseeable future.
            </p>

            <p>
              Feel free to get in touch at <Obfuscate email="b@slownames.net" />.
            </p>
          </div>
        </div>
        <ul className="pressList">
          {shuffledPresses.map((press: Press) => (
            <li key={press.id}>
              {press.quote && <div className="press-quote">{`"${press.quote}"`}</div>}
              <div className="press-credit">
                {press.URL && (
                  <>
                    &mdash;
                    <Link href={press.URL} className="press-publication">
                      {press.publication}
                    </Link>{' '}
                    on{' '}
                    <Link href="https://heyexit.com/">
                      <em>{press.recordings[0].title}</em>
                    </Link>
                  </>
                )}
                {!press.URL && press.attachments && (
                  <>
                    {press.attachments.map((attachment) => (
                      <Fragment key={attachment.id}>
                        &mdash;
                        <Link key={attachment.id} href={attachment.url} className="press-publication">
                          {press.publication}
                        </Link>{' '}
                        on{' '}
                        <Link href="https://heyexit.com/">
                          <em>{press.recordings[0].title}</em>
                        </Link>
                      </Fragment>
                    ))}
                  </>
                )}
                {!press.URL && !press.attachments && (
                  <>
                    <span className="press-publication">&mdash;{press.publication}</span> on{' '}
                    <Link href="https://heyexit.com/">
                      <em>{press.recordings[0].title}</em>
                    </Link>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
