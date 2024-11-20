'use client';
import useAxios from 'axios-hooks';
import { Show } from '../types';
import { isRelevantShow, reduceImages } from './Utilities';
import ShowList from './ShowList';
import ShowImages from './ShowImages';

export default function ShowArchive() {
  const [{ data: shows, loading, error }, refetch] = useAxios(
    'https://slownames.net/api/shows?pagination[pageSize]=300&populate[0]=documentation&populate[1]=flyers&populate[2]=band'
  );

  if (loading) return <p>loading shows...</p>;
  if (error) return <p>error {JSON.stringify(error, null, 2)}</p>;

  const relevantShows = shows.data.filter(isRelevantShow);
  const images: [string, string, Date, string][] = relevantShows
    .sort((a: Show, b: Show) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .flatMap(reduceImages);

  return (
    <div className="show-archive">
      <ShowList shows={relevantShows} />
      <ShowImages images={images} />
    </div>
  );
}
