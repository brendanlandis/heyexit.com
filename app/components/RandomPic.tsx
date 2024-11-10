'use client';
import useAxios from 'axios-hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function RandomPic() {
  const [{ data: media, loading, error }, refetch] = useAxios(
    'https://slownames.net/api/upload/files?populate=*&filters[caption][$contains]=heyexitfrontpage'
  );

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    refetch();
  }, []);

  if (!isMounted) return null;

  if (loading) return <p>loading media...</p>;
  if (error) return <p>error {JSON.stringify(error, null, 2)}</p>;

  const randomMedia = media && media[Math.floor(Math.random() * media.length)];

  return (
    <div className="images">
      {randomMedia ? (
        <div>
          <Link
            href={`https://slownames.net/admin/plugins/upload?sort=createdAt:DESC&page=1&pageSize=50&_q=${randomMedia.documentId}`}
            target="blank_"
          >
            <Image
              src={randomMedia.url}
              alt="photo of Hey Exit"
              width={1800}
              height={100}
              className="headerPhoto"
              priority
            />
          </Link>
        </div>
      ) : (
        <p>...</p>
      )}
    </div>
  );
}
