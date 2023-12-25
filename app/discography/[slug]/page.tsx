'use client';
import { usePathname } from 'next/navigation';
import useAxios from 'axios-hooks';
import { GetReleaseDetails } from '../GetReleaseDetails';
import { Release, RawReleaseData } from '../../types';
import ReleaseDetails from './ReleaseDetails';
import Head from 'next/head';

export default function Page() {
    const slug = usePathname().replace('/discography/', '');
    const [{ data: releases, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/releases?populate=deep,3&filters[bands][band][id]=33&filters[bands][band][id]=35&filters[bands][band][id]=36&filters[bands][band][id]=37&filters[bands][band][id]=38&filters[bands][band][id]=39&filters[bands][band][id]=40&pagination[pageSize]=100'
    );
    if (loading) return <main id="discography">loading</main>;
    if (error) return <main id="discography">error</main>;

    const formatReleases = (releases: { data: RawReleaseData[] }): Release[] => {
        return releases.data.map(GetReleaseDetails);
    };

    const formattedReleases = releases ? formatReleases(releases) : [];

    const thisRelease = formattedReleases.find((release) => release.titleSlug === slug);

    return (
        <main id="discography">
            <head>
                <title key="title">{thisRelease ? `Hey Exit :: ${thisRelease.title}` : 'Hey Exit'}</title>
            </head>
            {thisRelease ? (
                <>
                    <ReleaseDetails key={thisRelease.id} release={thisRelease} />
                </>
            ) : (
                <p>Didn't find that release, hm.</p>
            )}
        </main>
    );
}
