'use client';
import useAxios from 'axios-hooks';
import { Show, RawShowData } from '@/app/types';
import { Masonry } from 'react-plock';
import { GetShowDetails } from './GetShowDetails';

// TODO if two of our bands are playing, the one that isn't Receive should be added to the otherBands field

// const shuffleArray = (array: any[]) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// };

export default function OldFlyers() {
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
        const hasHeyExit = show.bands.some((band) => band.bandname === 'Hey Exit');
        return showDate <= cutOffDate || hasHeyExit;
    });

    // const shuffledShows = shuffleArray(filteredShows);

    const MasonryImages = filteredShows.reduce(
        (images: { urlSmall: string; urlLarge: string; alt: string }[], show) => {
            const flyersArray = show.flyers ?? [];
            const mappedAndFiltered = flyersArray.filter(Boolean).map((flyer) => ({
                urlSmall: flyer.urlSmall,
                urlLarge: flyer.urlLarge,
                alt: flyer.alt,
            }));

            return images.concat(mappedAndFiltered);
        },
        []
    );

    return (
        <div className="show-list">
            <Masonry
                items={MasonryImages}
                config={{
                    columns: [2, 3, 4],
                    gap: [16, 16, 16],
                    media: [768, 1024, 1280],
                }}
                render={(item, idx) => (
                    <>
                        <a href={item.urlLarge}>
                            <img
                                key={idx}
                                src={item.urlSmall}
                                alt={item.alt}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </a>
                    </>
                )}
            />
        </div>
    );
}
