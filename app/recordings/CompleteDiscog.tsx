'use client';
import useAxios from 'axios-hooks';
import { RecordingSummary } from '../types';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

function LoadingOrError({ loading, error }: { loading: boolean; error: any }) {
  if (loading) return <p>loading covers...</p>;
  if (error) return <p>error: {error.message}</p>;
  return null;
}

export default function CompleteDiscog() {
  const [{ data: recordings, loading, error }] = useAxios(
    'https://slownames.net/api/recordings?populate=*&filters[bands][name]=Hey%20Exit&filters[visibility][$ne]=hidden&pagination[pageSize]=100'
  );

  const loadingOrError = <LoadingOrError loading={loading} error={error} />;
  if (loading || error) return loadingOrError;

  const orderedRecordings = (recordings?.data || []).sort(
    (b: RecordingSummary, a: RecordingSummary) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
  );

  return (
    <div className="releases-grid complete">
      {orderedRecordings.map((recording: RecordingSummary) => {
        const normalizedTitle = recording.title
          .normalize('NFD') // Normalize accented characters
          .replace(/[\u0300-\u036f]/g, '') // Remove diacritic marks
          .toLowerCase() // Convert to lowercase
          .replace(/[^\w\s]/g, '') // Remove non-alphanumeric characters
          .replace(/\s+/g, '-') // Convert spaces to dashes
          .replace(/-?reknowing.*$/, '') // Remove "reknowing" from some URLs
          .replace(/-?a\-luvsound.*$/, ''); // Shorten long title "Soothing Sounds for Baby"
        return (
          <div className="recording" key={recording.id}>
            <Link href={`/recordings/${normalizedTitle}`} className="cover">
              {recording.cover && recording.cover[0] && (
                <Image src={recording.cover[0].url} alt={recording.title} width={750} height={750} />
              )}
            </Link>
            <Link href={`/recordings/${normalizedTitle}`} className="details">
              <div
                className={classNames('album-title', {
                  'long-title':
                    recording.title.length > 22 ||
                    /\b\w{9,}\b/.test(recording.title) ||
                    recording.title.includes('Steve'),
                  'really-long-title': recording.title.length > 50,
                  'long-word': /\b\w{15,}\b/.test(recording.title),
                })}
              >
                {recording.title}
              </div>
              <div className="album-releasedate">{new Date(recording.releaseDate).toISOString().slice(0, 4)}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
