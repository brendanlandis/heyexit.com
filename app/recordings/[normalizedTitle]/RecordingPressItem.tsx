import Link from 'next/link';
import { Press } from '@/app/types';

export default function PressItem({ press }: { press: Press }) {
  if (press.type === 'review') {
    return (
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
    );
  } else if (press.type === 'interview') {
    return (
      <p>
        <Link href={press.URL ? press.URL : press.attachments?.[0]?.url}>interview with {press.publication}</Link>
      </p>
    );
  }
  return <>somehow there's no 'type' set on this review</>;
}
