'use client';
import useAxios from 'axios-hooks';
import { format } from 'date-fns/format';
import { parseISO } from 'date-fns/parseISO';
import { Masonry } from 'react-plock';

export default function OtherBands() {
    const [{ data: releases, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/releases?populate=deep,3&filters[bands][band][id]=35&filters[bands][band][id]=36&filters[bands][band][id]=37&filters[bands][band][id]=38&filters[bands][band][id]=39&filters[bands][band][id]=40'
    );
    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    return (
        <>
            <pre>{JSON.stringify(releases, null, 2)}</pre>
        </>
    );
}
