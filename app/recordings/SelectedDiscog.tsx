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

export default function SelectedDiscog() {
  const [{ data: recordings, loading, error }] = useAxios(
    'https://slownames.net/api/recordings?populate=*&filters[bands][name]=Hey%20Exit&filters[visibility]=highlight&pagination[pageSize]=100'
  );

  const loadingOrError = <LoadingOrError loading={loading} error={error} />;
  if (loading || error) return loadingOrError;

  const orderedRecordings = (recordings?.data || []).sort(
    (b: Recording, a: Recording) =>
      new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
  );

  return (
    <div className="releases-grid selected">
      {orderedRecordings.map((recording: Recording) => {
        const normalizedTitle = getNormalizedTitle(recording.title);
        return (
          <div className="recording" key={recording.id}>
            <Link href={`/recordings/${normalizedTitle}`} className="cover">
              {recording.cover.map((cover) => (
                <Image
                  key={cover.id}
                  src={cover.url}
                  alt={recording.title}
                  width={1024}
                  height={1024}
                />
              ))}
            </Link>
            <Link href={`/recordings/${normalizedTitle}`} className="details">
              <div
                className={classNames('album-title', {
                  'long-title':
                    recording.title.length > 25 ||
                    /\b\w{9,}\b/.test(recording.title),
                })}
                dangerouslySetInnerHTML={{ __html: recording.title }}
              ></div>
              <div className="album-releasedate">
                {new Date(recording.releaseDate).toISOString().slice(0, 4)}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
