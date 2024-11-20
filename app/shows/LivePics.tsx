'use client';
import useAxios from 'axios-hooks';
import { Show } from '../types';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { Masonry } from 'react-plock';

export default function LivePics() {
  const [{ data: shows, loading, error }, refetch] = useAxios(
    'https://slownames.net/api/shows?pagination[pageSize]=300&populate[0]=documentation&populate[1]=flyers&populate[2]=band'
  );

  if (loading) return <p>loading shows...</p>;
  if (error) return <p>error {JSON.stringify(error, null, 2)}</p>;

  const images: string[] = shows.data
    .sort((a: Show, b: Show) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .reduce((urls: [string, string, Date, string][], show: Show) => {
      // temp array to hold flyers and images
      const tempUrls: [string, string, Date, string][] = [];

      // collect flyers
      if (
        show.flyers &&
        show.alias != 'Angel Olsen Cover Band' &&
        (show.band.name === 'Hey Exit' || show.band.name === 'Brendan Landis') &&
        new Date(show.date).getFullYear() <= 2021
      ) {
        // if there are multiple flyers, select one at random
        if (show.flyers.length > 1) {
          const randomFlyer = show.flyers[Math.floor(Math.random() * show.flyers.length)];
          tempUrls.push([randomFlyer.url, randomFlyer.documentId, show.date, 'flyer']);
        } else if (show.flyers.length === 1) {
          // if there's only one flyer, add it
          tempUrls.push([show.flyers[0].url, show.flyers[0].documentId, show.date, 'flyer']);
        }
      }

      // collect pics
      const pics: [string, string, Date, string][] = [];
      if (show.documentation) {
        show.documentation.forEach((doc) => {
          if (doc.mime?.includes('image') && doc.caption?.includes('heyExitShowArchive')) {
            pics.push([doc.url, doc.documentId, show.date, 'pic']);
          }
        });
      }

      // if there's more than 3 pics, cut 'em down
      if (pics.length > 3) {
        const selectedPics = [];
        const selectedIndexes = new Set<number>();

        // Select 3 random pics
        while (selectedPics.length < 3) {
          const randomIndex = Math.floor(Math.random() * pics.length);
          if (!selectedIndexes.has(randomIndex)) {
            selectedPics.push(pics[randomIndex]);
            selectedIndexes.add(randomIndex);
          }
        }

        // add the 3 random pics
        tempUrls.push(...selectedPics);
      } else {
        // if there are 3 or fewer pics, just add them
        tempUrls.push(...pics);
      }

      return urls.concat(tempUrls);
    }, []);

  return (
    <div className="images">
      <Masonry
        items={images}
        config={{
          columns: [1, 2, 3],
          gap: [24, 12, 6],
          media: [640, 768, 1024],
        }}
        render={(item, idx) => {
          const [url, documentId, date, type] = item;
          return (
            <Link
              href={`https://slownames.net/admin/plugins/upload?sort=createdAt:DESC&page=1&pageSize=50&folder=3&folderPath=/1&_q=${documentId}`}
              key={idx}
              target="_blank"
            >
              <Image alt="asdf" src={url} width={500} height={500} />
            </Link>
          );
        }}
      />
    </div>
  );
}
