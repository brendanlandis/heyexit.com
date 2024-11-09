'use client';
import useAxios from 'axios-hooks';
import { RecordingSummary } from '../types';
import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';

export default function SelectedDiscog() {
  const [{ data: recordings, loading, error }, refetch] = useAxios('https://slownames.net/api/recordings?populate=*&filters[bands][name]=Hey%20Exit&filters[visibility]=highlight&pagination[pageSize]=100');
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  const orderedRecordings = recordings.data.sort((b, a) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());

  return (
    <div className="releases-grid selected">
      {orderedRecordings.map((recording: RecordingSummary) => (
        <div className="recording" key={recording.id}>
          <Link href={'/discography/' + recording.title} className="cover">
            {recording.cover.map((cover) => (
              <Image key={cover.id} src={cover.url} alt={recording.title} width={750} height={750} />
            ))}
          </Link>
          <Link href={'/discography/' + recording.title} className="details">
            <div className="album-title">{recording.title}</div>
            <div className="album-releasedate">{recording.releaseDate.slice(0, 4)}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
