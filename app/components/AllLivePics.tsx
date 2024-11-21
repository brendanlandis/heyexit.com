'use client';
import useAxios from 'axios-hooks';
import { Show, Shoot } from '../types';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

export default function AllLivePics() {
  const [{ data: pics, loading, error }, refetch] = useAxios(
    'https://slownames.net/api/shows?populate=documentation&filters[band][name]=It Breaks'
  );

  if (loading) return <p>loading shows...</p>;
  if (error) return <p>error {JSON.stringify(error, null, 2)}</p>;

  return (
    <div className="images">
      {pics.data.map((shoot: Show) => (
        <div key={shoot.id}>
          {shoot.documentation ? (
            <Fragment>
              {shoot.documentation.map((doc, index) =>
                doc.mime?.includes('image') ? (
                  <Fragment key={doc.id}>
                    <Link
                      href={`https://slownames.net/admin/plugins/upload?sort=createdAt:DESC&page=1&pageSize=50&folder=3&folderPath=/1&_q=${doc.documentId}`}
                      target="blank_"
                    >
                      <Image
                        src={doc.url}
                        alt="photo of Hey Exit"
                        width={500}
                        height={100}
                        className="headerPhoto"
                      />
                      shoot
                    </Link>
                    {/* <pre key={index}>{JSON.stringify(doc, null, 2)}</pre> */}
                  </Fragment>
                ) : (
                  <div>
                    <Link
                      key={doc.id}
                      href={`https://slownames.net/admin/plugins/upload?sort=createdAt:DESC&page=1&pageSize=50&folder=3&folderPath=/1&_q=${doc.documentId}`}
                      target="blank_"
                    >asdf
                      <video controls preload="metadata">
                        <source src={doc.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </Link>
                  </div>
                )
              )}
            </Fragment>
          ) : null}
        </div>
      ))}
    </div>
  );
}
