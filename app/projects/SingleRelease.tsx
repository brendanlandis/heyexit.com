'use client';
import useAxios from 'axios-hooks';
import { ReactNode } from 'react';
import { Recording } from '../types';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import getNormalizedTitle from '../components/getNormalizedTitle';

function LoadingOrError({ loading, error }: { loading: boolean; error: any }) {
  if (loading) return <></>;
  if (error) return <p>error: {error.message}</p>;
  return null;
}

export default function SingleRelease({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  const [{ data: recording, loading, error }] = useAxios(
    `https://slownames.net/api/recordings/${id}?populate=*`
  );

  const loadingOrError = <LoadingOrError loading={loading} error={error} />;
  if (loading || error) return loadingOrError;

  const normalizedTitle = getNormalizedTitle(recording.data.title);
  return (
    <>
      <div className="project-release">
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
            <Link href={`/recordings/${normalizedTitle}`}>
              {recording.data.title} (
              {new Date(recording.data.releaseDate).toISOString().slice(0, 4)})
            </Link>
          </h3>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
