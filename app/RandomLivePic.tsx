'use client';
import useAxios from 'axios-hooks';
import { Show, RawShowData } from '@/app/types';
import { GetShowDetails } from './live/GetShowDetails';

export default function RandomLivePic() {
    const [{ data: shows, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/shows?populate=deep&filters[myBand][band][id]=35&filters[myBand][band][id]=40&filters[myBand][band][id]=36&filters[myBand][band][id]=33&filters[myBand][band][id]=38&filters[myBand][band][id]=39&filters[myBand][band][id]=37&pagination[pageSize]=999'
    );

    if (loading) return <p>loading</p>;
    if (error) return <p>error {JSON.stringify(error, null, 2)}</p>;

    const formatShows = (shows: { data: RawShowData[] }): Show[] => {
        return shows.data.map(GetShowDetails);
    };

    const formattedShows = shows ? formatShows(shows) : [];

    const filteredShows = formattedShows
        .filter((show) => show.documentation && show.documentation.length > 0)
        .filter((show) => show.documentation.some((doc) => doc.usable && doc.mime.includes('image')));

    const randomShow = filteredShows[Math.floor(Math.random() * filteredShows.length)];

    const randomDocument =
        randomShow.documentation.length > 1
            ? randomShow.documentation[Math.floor(Math.random() * randomShow.documentation.length)]
            : randomShow.documentation[0];

    return (
        
        <div className="image">
            <img src={randomDocument.urlLarge} alt={randomDocument.alt} />
            {randomDocument.credit && <p>photo by {randomDocument.credit}</p>}
        </div>
    );
}
