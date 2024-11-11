'use client';
import useAxios from 'axios-hooks';
import { RecordingSummary } from '../types';
import Link from 'next/link';
import Image from 'next/image';

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
    (b: RecordingSummary, a: RecordingSummary) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
  );

  return (
    <div className="releases-grid selected">
      {orderedRecordings.map((recording: RecordingSummary) => (
        <div className="recording" key={recording.id}>
          <Link href={`/discography/${recording.title}`} className="cover">
            {recording.cover.map((cover) => (
              <Image key={cover.id} src={cover.url} alt={recording.title} width={750} height={750} />
            ))}
          </Link>
          <Link href={`/discography/${recording.title}`} className="details">
            <div className="album-title">{recording.title}</div>
            <div className="album-releasedate">{new Date(recording.releaseDate).toISOString().slice(0, 4)}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
