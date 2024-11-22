'use client';
import useAxios from 'axios-hooks';
import { Recording } from '../types';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import getNormalizedTitle from '../components/getNormalizedTitle';

function LoadingOrError({ loading, error }: { loading: boolean; error: any }) {
  if (loading) return <p>loading covers...</p>;
  if (error) return <p>error: {error.message}</p>;
  return null;
}

export default function SingleRelease({
  id,
  position,
}: {
  id: string;
  position: string;
}) {
  const [{ data: recording, loading, error }] = useAxios(
    `https://slownames.net/api/recordings/${id}?populate=*`
  );

  const loadingOrError = <LoadingOrError loading={loading} error={error} />;
  if (loading || error) return loadingOrError;

  const normalizedTitle = getNormalizedTitle(recording.data.title);
  return (
    <>
      <div className={`recording ${position}`}>
        <Link href={`/recordings/${normalizedTitle}`} className="cover">
          {recording.data.cover && recording.data.cover[0] && (
            <Image
              src={recording.data.cover[0].url}
              alt={recording.data.title}
              width={750}
              height={750}
            />
          )}
        </Link>
        <Link href={`/recordings/${normalizedTitle}`} className="details">
          <div
            className={classNames('album-title', {
              'long-title':
                recording.data.title.length > 22 ||
                /\b\w{9,}\b/.test(recording.data.title) ||
                recording.data.title.includes('Steve'),
              'really-long-title': recording.data.title.length > 50,
              'long-word': /\b\w{15,}\b/.test(recording.data.title),
            })}
          >
            {recording.data.title}
          </div>
          <div className="album-releasedate">
            {new Date(recording.data.releaseDate).toISOString().slice(0, 4)}
          </div>
        </Link>
      </div>
    </>
  );
}
