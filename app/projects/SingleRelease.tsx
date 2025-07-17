'use client';
import useAxios from 'axios-hooks';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import getNormalizedTitle from '../components/getNormalizedTitle';

function LoadingOrError({ loading, error }: { loading: boolean; error: any }) {
  if (loading) return <></>;
  if (error) return <p>error: {error.message}</p>;
  return null;
}

export default function SingleRelease({
  id,
  displayArtist,
  children,
}: {
  id: string;
  displayArtist: boolean;
  children: ReactNode;
}) {
  const [{ data: recording, loading, error }] = useAxios(
    `https://api.slownames.net/api/recordings/${id}?populate=*`
  );

  const loadingOrError = <LoadingOrError loading={loading} error={error} />;
  if (loading || error) return loadingOrError;

  const normalizedTitle = getNormalizedTitle(recording.data.title);
  return (
    <>
      <div className="project-release">
        <Link href={`/recordings/${normalizedTitle}`}>
          <div className="project-release-cover">
            <div className="recording cover">
              {recording.data.cover && recording.data.cover[0] && (
                <Image
                  src={recording.data.cover[0].url}
                  alt={`cover art for ${recording.data.title}`}
                  width={750}
                  height={750}
                />
              )}
            </div>
          </div>
          <div className="project-release-description">
            <h3>
              <span className="title">
                {displayArtist
                  ? recording.data.alias
                    ? `${recording.data.alias} - `
                    : `${recording.data.bands[0].name} - `
                  : null}
                {recording.data.title}
              </span>
              <span>
                {' '}
                (
                {new Date(recording.data.releaseDate).toISOString().slice(0, 4)}
                )
              </span>
            </h3>
            <div>{children}</div>
          </div>
        </Link>
      </div>
    </>
  );
}
