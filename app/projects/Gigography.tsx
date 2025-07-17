'use client';
import useAxios from 'axios-hooks';
import { Show } from '../types';
import { isRelevantShow, reduceImages } from './Utilities';
import ShowList from './ShowList';
import ShowImages from './ShowImages';

export default function Gigography({
  band,
  displayImages,
  shortList,
}: {
  band: string;
  displayImages: boolean;
  shortList: boolean;
}) {
  const [{ data: shows, loading, error }] = useAxios(
    `https://api.slownames.net/api/shows?pagination[pageSize]=300&populate[0]=documentation&populate[1]=flyers&populate[2]=band&filters[band][name]=${band}`
  );

  if (loading) return <></>;
  if (error) return <p>error {JSON.stringify(error, null, 2)}</p>;

  const relevantShows = shows.data.filter(isRelevantShow(band));
  const images: [string, string, Date, string][] = relevantShows
    .sort(
      (a: Show, b: Show) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .flatMap(reduceImages);

  return (
    <div className="project-shows">
      <h2>shows</h2>
      <div className="show-archive">
        <ShowList shows={relevantShows} shortList={shortList} />
        {displayImages ? <ShowImages images={images} /> : null}
      </div>
    </div>
  );
}
