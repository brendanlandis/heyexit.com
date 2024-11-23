'use client';
import { Press } from '../types';
import useAxios from 'axios-hooks';
import { Fragment } from 'react';
import Link from 'next/link';
import getNormalizedTitle from './getNormalizedTitle';

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function PressList() {
  const [{ data: presses, loading, error }] = useAxios(
    'https://slownames.net/api/presses?populate=bands&populate=recordings&populate=attachments&filters[visibility]=highlight&filters[bands][name]=Hey%20Exit&filters[type][$ne]=interview&pagination[pageSize]=100'
  );
  if (loading) return <p>loading press...</p>;
  if (error) return <p>error</p>;

  const formattedPresses = presses?.data || [];
  const shuffledPresses = shuffleArray(formattedPresses);

  return (
    <ul className="pressList">
      {shuffledPresses.map((press: Press) => (
        <li key={press.id}>
          {press.quote && <div className="press-quote">{`"${press.quote}"`}</div>}
          <div className="press-credit">
            {press.URL ? (
              <>
                &mdash;
                <Link href={press.URL} className="press-publication">
                  {press.publication}
                </Link>{' '}
                on{' '}
                <Link href={`/recordings/${getNormalizedTitle(press.recordings[0].title)}`}>
                  <em>{press.recordings[0].title}</em>
                </Link>
              </>
            ) : press.attachments?.length > 0 ? (
              press.attachments.map((attachment) => (
                <Fragment key={attachment.id}>
                  &mdash;
                  <Link href={attachment.url} className="press-publication">
                    {press.publication}
                  </Link>{' '}
                  on{' '}
                  <Link href={`/recordings/${getNormalizedTitle(press.recordings[0].title)}`}>
                    <em>{press.recordings[0].title}</em>
                  </Link>
                </Fragment>
              ))
            ) : (
              <>
                <span className="press-publication">&mdash;{press.publication}</span> on{' '}
                <Link href={`/recordings/${getNormalizedTitle(press.recordings[0].title)}`}>
                  <em>{press.recordings[0].title}</em>
                </Link>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
