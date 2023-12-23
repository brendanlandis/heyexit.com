'use client';
import useAxios from 'axios-hooks';
import { Release, RawReleaseData } from '../types';
import Link from 'next/link';
import { GetReleaseDetails } from './GetReleaseDetails';

export default function OtherBands() {
    const [{ data: releases, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/releases?populate=deep,3&filters[bands][band][id]=35&filters[bands][band][id]=36&filters[bands][band][id]=37&filters[bands][band][id]=38&filters[bands][band][id]=39&filters[bands][band][id]=40'
    );
    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    const formatReleases = (releases: { data: RawReleaseData[] }): Release[] => {
        return releases.data.map(GetReleaseDetails);
    };

    const formattedReleases = releases ? formatReleases(releases) : [];

    const orderedReleases = formattedReleases.sort(
        (b, a) => new Date(a.originalReleaseDate).getTime() - new Date(b.originalReleaseDate).getTime()
    );

    return (
        <div className="releases-grid bands">
            {orderedReleases.map((release: Release) => (
                <div className="release" key={release.id}>
                    <div className="cover">
                        {release.cover.map((cover) => (
                            <img key={cover.id} src={cover.urlSmall} alt={cover.alt} />
                        ))}
                    </div>
                    <Link href={'/discography/' + release.titleSlug} className="details">
                        <div className="album-title">{release.title}</div>
                        <div className="album-releasedate">{release.shortYear}</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}