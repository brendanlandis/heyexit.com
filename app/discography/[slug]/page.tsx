'use client';
import { usePathname } from 'next/navigation';
import useAxios from 'axios-hooks';
import { GetReleaseDetails } from '../GetReleaseDetails';
import { Release, RawReleaseData } from '../../types';
import ReleaseDetails from './ReleaseDetails';

export default function Page() {
    const slug = usePathname().replace('/discography/', '');
    const [{ data: releases, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/releases?populate=deep,3&filters[bands][band][id]=33&filters[visibility]=selected%20discography'
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
            {thisRelease ? (
                <>
                    <ReleaseDetails release={thisRelease} />
                </>
            ) : (
                <p>Didn't find that release, hm.</p>
            )}
        </main>
    );
}
