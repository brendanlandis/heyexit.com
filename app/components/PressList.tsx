'use client';
import { Press } from '../types';
import useAxios from 'axios-hooks';
import { Fragment } from 'react';
import Link from 'next/link';

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function PressList() {
  const [{ data: presses, loading, error }, refetch] = useAxios(
    'https://slownames.net/api/presses?populate=bands&populate=recordings&populate=attachments&filters[visibility]=highlight&filters[bands][name]=Hey%20Exit&filters[type][$ne]=interview&pagination[pageSize]=100'
  );
  if (loading) return <p>loading press...</p>;
  if (error) return <p>error</p>;

  const GetPressDetails = (press: Press): Press => {
    return {
      id: press.id,
      type: press.type,
      date: press.date,
      URL: press.URL,
      attachments: press.attachments,
      quote: press.quote,
      visibility: press.visibility,
      publication: press.publication,
      bands: press.bands,
      fullText: press.fullText,
      recordings: press.recordings,
    };
  };
  const formatPresses = (presses: { data: Press[] }): Press[] => {
    return presses.data.map(GetPressDetails);
  };

  const formattedPresses = presses ? formatPresses(presses) : [];
  const shuffledPresses = shuffleArray(formattedPresses);

  return (
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
  );
}
