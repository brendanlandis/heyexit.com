'use client';
import useAxios from 'axios-hooks';
import { Media } from '../types';
import Image from 'next/image';
import Link from 'next/link';

export default function RandomPic() {
  const [{ data: media, loading, error }, refetch] = useAxios('https://slownames.net/api/upload/files?populate=*&filters[caption][$contains]=heyexitfrontpage');

  if (loading) return <p>loading media...</p>;
  if (error) return <p>error {JSON.stringify(error, null, 2)}</p>;

  const getRandomMedia = (media: Media[]): Media | undefined => {
    const randomMedia = media[Math.floor(Math.random() * media.length)];
    return randomMedia;
  };

  const randomMedia = media ? getRandomMedia(media) : undefined;

  return (
    <div className="images">
      {randomMedia ? (
        <div key={randomMedia.id}>
          <Link href={`https://slownames.net/admin/plugins/upload?sort=createdAt:DESC&page=1&pageSize=50&_q=${randomMedia.documentId}`} target="blank_">
            <Image src={randomMedia.url} alt="photo of Hey Exit" width={1800} height={100} className="headerPhoto" priority />
          </Link>
          {/* <pre>{JSON.stringify(randomMedia, null, 2)}</pre> */}
        </div>
      ) : (
        <p>no media. denied!</p>
      )}
    </div>
  );
}
