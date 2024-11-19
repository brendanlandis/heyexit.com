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
              <span><Link href={edition.link}>{edition.label}</Link></span> / <span>{format(edition.releaseDate, 'yyyy')}</span>
            </>
          ) : (
            <>
              <span>{edition.label}</span> / <span>{format(edition.releaseDate, 'yyyy')}</span>
            </>
          )}
          {' / '}
          <span className='edition-of'>{edition.onlineOnly ? 'streaming' : ''}
          {edition.printedCassettes ? (<span>{edition.printedCassettes} cassettes</span>) : null}
          {edition.printedRecords ? (<span>{edition.printedRecords} records</span>) : null}
          {edition.printedCDs ? (<span>{edition.printedCDs} CDs</span>) : null}
          {edition.printedObjects ? (<span>{edition.printedObjects} {edition.objectDescription}</span>) : null}</span>
        </div>
      ))}
    </div>
  );
}
