import { Recording, Edition } from '@/app/types';
import Link from 'next/link';
import { format } from 'date-fns';

export default function RecordingEditions(recording: Recording) {
  return (
    <div className="editions">
      {recording.editions.map((edition: Edition, index: number) => (
        <div key={index} className="edition header-container">
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
          {edition.printedCassettes ? `${edition.printedCassettes} cassettes` : ''}
          {edition.printedRecords ? `${edition.printedRecords} records` : ''}
          {edition.printedCDs ? `${edition.printedCDs} CDs` : ''}
          {edition.printedObjects ? `${edition.printedObjects} ${edition.objectDescription}` : ''}
        </div>
      ))}
    </div>
  );
}
