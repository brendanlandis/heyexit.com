'use client';
import useAxios from 'axios-hooks';
import { format } from 'date-fns/format';
import { parseISO } from 'date-fns/parseISO';
import { Masonry } from 'react-plock';

export default function SelectedDiscog() {
    const [{ data: releases, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/releases?populate=deep,3&filters[bands][band][id]=33&filters[visibility]=selected%20discography'
    );
    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    return (
        <>
            <pre>{JSON.stringify(releases, null, 2)}</pre>
        </>
    );
}
