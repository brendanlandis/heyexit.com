import { Recording, Edition } from '@/app/types';
import Link from 'next/link';
import { format } from 'date-fns';

export default function RecordingEditions(recording: Recording) {
  return (
    <div className="recording-editions">
      {recording.editions.map((edition: Edition, index: number) => (
        <div key={index} className="edition">
          {edition.link ? (
            <>
              <Link href={edition.link}>{edition.label}</Link> / {format(edition.releaseDate, 'yyyy')}
            </>
          ) : (
            <>
              {edition.label} / {format(edition.releaseDate, 'yyyy')}
            </>
          )}
          {' / '}
          {edition.onlineOnly ? 'streaming' : ''}
          {edition.printedCassettes ? (<span>{edition.printedCassettes} cassettes</span>) : null}
          {edition.printedRecords ? (<span>{edition.printedRecords} records</span>) : null}
          {edition.printedCDs ? (<span>{edition.printedCDs} CDs</span>) : null}
          {edition.printedObjects ? (<span>{edition.printedObjects} {edition.objectDescription}</span>) : null}
        </div>
      ))}
    </div>
  );
}
