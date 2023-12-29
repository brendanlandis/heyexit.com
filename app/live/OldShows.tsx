'use client';
import useAxios from 'axios-hooks';
import { Show, RawShowData } from '@/app/types';
import { GetShowDetails } from './GetShowDetails';
import { Fragment } from 'react';

export default function OldShows() {
    const [{ data: shows, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/shows?populate=deep,3&filters[myBand][band][id]=35&filters[myBand][band][id]=40&filters[myBand][band][id]=36&filters[myBand][band][id]=33&filters[myBand][band][id]=38&filters[myBand][band][id]=39&filters[myBand][band][id]=37&pagination[pageSize]=999'
    );

    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    const formatShows = (shows: { data: RawShowData[] }): Show[] => {
        return shows.data.map(GetShowDetails);
    };

    const formattedShows = shows ? formatShows(shows) : [];

    formattedShows.sort((b, a) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const cutOffDate = new Date('2022-10-01');
    const filteredShows = formattedShows.filter((show) => {
        const showDate = new Date(show.date);
        const hasHeyExit = show.bands.some((band) => band.bandname === "Hey Exit");
        return (showDate <= cutOffDate) || hasHeyExit;
      });

    return (
        <div className="show-list">
            {filteredShows.map((show: Show) => (
                <div className="show" key={show.id}>
                    {show.date} -{' '}
                    {show.bands.map((band) => (
                        <Fragment key={band.id}>
                            {band.displayBandname ? (
                                <span key={band.id} className="album-bandname">
                                    {band.displayBandname}
                                </span>
                            ) : (
                                <span key={band.id} className="album-bandname">
                                    {band.bandname}
                                </span>
                            )}
                        </Fragment>
                    ))}{' '}
                    at {show.venue}{' '}
                    ({show.city})
                </div>
            ))}
        </div>
    );
}
