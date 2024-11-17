import { Recording, Press } from '@/app/types';
import Link from 'next/link';

export default function PressTop(recording: Recording) {

  // how many are we talkin here
  const numberOfArticles = recording.reviews.filter((press: Press) => press.visibility === 'highlight').length;
  return (
    <ul
      className={`recording-press articles-${numberOfArticles}`}
    >
      {recording.reviews
        ?.filter((press: Press) => press.visibility === 'highlight')
        .map((press: Press, index: number) => (
          <li key={press.id}>
            <p>"{press.quote}"</p>
            <p>
              &mdash;
              <Link href={press.URL ? press.URL : press.attachments?.[0]?.url}>{press.publication}</Link>
            </p>
          </li>
        ))}
    </ul>
  );
}
