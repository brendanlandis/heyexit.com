'use client';
import useAxios from 'axios-hooks';
import Image from 'next/image';
// import Link from 'next/link';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Obfuscate from 'react-obfuscate';

export default function RandomPic() {
  const [{ data: media, loading, error }, refetch] = useAxios(
    'https://slownames.net/api/upload/files?populate=*&filters[caption][$contains]=heyexitfrontpage'
  );

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    refetch().catch((err) => {
      if (!axios.isCancel(err)) {
        console.error('Refetch error, girl!', err);
      }
    });
  }, []);

  if (!isMounted) return null;

  if (loading) return <p>loading media...</p>;
  if (error) return <p>error {JSON.stringify(error, null, 2)}</p>;

  // get a random photo
  const randomMedia = media && media[Math.floor(Math.random() * media.length)];

  // get some metadata from the photo
  const show = randomMedia.related.find(
    (entry: any) =>
      entry.__type === 'api::show.show' && entry.publishedAt !== null
  );
  const year = format(show.date, 'yyyy');
  const city = show.city.replace(/,/g, '');
  const credit =
    randomMedia.alternativeText === 'unknown' ? (
      <>
        Photo credit unknown -{' '}
        <Obfuscate email="b@slownames.net" aria-label="Email Me">
          lmk?
        </Obfuscate>
      </>
    ) : (
      <>Photo by {randomMedia.alternativeText}.</>
    );

  return (
    <div className="images">
      {randomMedia ? (
        <div>
          {/* <Link
            href={`https://slownames.net/admin/plugins/upload?sort=createdAt:DESC&page=1&pageSize=50&_q=${randomMedia.documentId}`}
            target="blank_"
          > */}
          <Image
            src={randomMedia.url}
            alt="photo of Brendan Landis / Hey Exit"
            width={1800}
            height={100}
            className="headerPhoto"
            priority
          />
          <div className="random-image-caption">
            {city}, {year}. {credit}
          </div>
          {/* </Link> */}
        </div>
      ) : (
        <p>...</p>
      )}
    </div>
  );
}
