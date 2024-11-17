import { Recording, Press } from '@/app/types';
import Link from 'next/link';

export default function PressBottom(recording: Recording) {
  // how many are we talkin here
  const numberOfArticles = recording.reviews.filter((press: Press) => press.visibility === 'deep cut').length;
  return (
    <>
      <div className="header-container">
        <h2>press for {recording.title}</h2>
      </div>
      <ul className={`recording-press articles-${numberOfArticles}`}>
        {recording.reviews
          ?.filter((press: Press) => press.visibility === 'deep cut')
          .map((press: Press, index: number) => (
            <li key={press.id}>
              {press.type === 'review' ? (
                <>
                  {press.URL || press.attachments?.[0]?.url ? (
                    <>
                      <p>"{press.quote}"</p>
                      <p>
                        &mdash;
                        <Link href={press.URL ? press.URL : press.attachments?.[0]?.url}>{press.publication}</Link>
                      </p>
                    </>
                  ) : (
                    <>
                      <p>"{press.quote}"</p>
                      <p>&mdash; {press.publication}</p>
                    </>
                  )}
                </>
              ) : press.type === 'interview' ? (
                <p>
                  <Link href={press.URL ? press.URL : press.attachments?.[0]?.url}>
                    interview with {press.publication}
                  </Link>
                </p>
              ) : (
                <>nope</>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
