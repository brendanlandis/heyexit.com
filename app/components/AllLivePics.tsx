'use client';
import useAxios from 'axios-hooks';
import { Show } from '../types';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

export default function AllLivePics() {
  const [{ data: shows, loading, error }, refetch] = useAxios(
    'https://slownames.net/api/shows?pagination[pageSize]=300&populate=documentation&filters[documentation][$ne]=null'
  );

  if (loading) return <p>loading shows...</p>;
  if (error) return <p>error {JSON.stringify(error, null, 2)}</p>;

  return (
    <div className="images">
      {shows.data.map((show: Show) => (
        <div key={show.id}>
          {show.documentation ? (
            <>
              {show.documentation.map((doc, index) =>
                doc.mime?.includes('image') ? (
                  <Fragment key={doc.id}>
                    <Link
                      href={`https://slownames.net/admin/plugins/upload?sort=createdAt:DESC&page=1&pageSize=50&folder=3&folderPath=/1&_q=${doc.documentId}`}
                      target="blank_"
                    >
                      <Image src={doc.url} alt="photo of Hey Exit" width={500} height={100} className="headerPhoto" />
                    </Link>
                    {/* <pre key={index}>{JSON.stringify(doc, null, 2)}</pre> */}
                  </Fragment>
                ) : null
              )}
            </>
          ) : (
            <p>nope</p>
          )}
        </div>
      ))}
    </div>
  );
}
