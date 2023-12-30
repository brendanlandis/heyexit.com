'use client';
import useAxios from 'axios-hooks';
import { Press, RawPressData } from '../types';
import Link from 'next/link';
import { GetPressDetails } from './GetPressDetails';
import { Fragment } from 'react';

const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export default function SelectedPress() {
    const [{ data: presses, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/presses?populate=deep,5&filters[visibility]=selected%20press&pagination[pageSize]=100'
    );
    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    const formatPresses = (presses: { data: RawPressData[] }): Press[] => {
        return presses.data.map(GetPressDetails);
    };

    const formattedPresses = presses ? formatPresses(presses) : [];

    const filteredPresses = formattedPresses.filter((press) =>
        press.bands.some((band) => band.bandname === 'Hey Exit')
    );

    const shuffledPresses = shuffleArray(filteredPresses);

    return (
        <div className="presses-grid">
            {shuffledPresses.map((press: Press) => (
                <Fragment key={press.id}>
                    {press.visibility != 'hidden' && (
                        <div className="press">
                            {press.type === 'interview' ? (
                                <>
                                    {press.URL && (
                                        <div>
                                            <Link href={press.URL} className="press-publication">
                                                interview at {press.publication}
                                            </Link>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                    {press.quote && <div className="press-quote">{`"${press.quote}"`}</div>}
                                    <div>
                                        &mdash;
                                        {press.URL && (
                                            <Link href={press.URL} className="press-publication">
                                                {press.publication}
                                            </Link>
                                        )}
                                        {!press.URL && press.attachments && (
                                            <>
                                                {press.attachments.map((attachment) => (
                                                    <Link key={attachment.id} href={attachment.urlLarge} className="press-publication">
                                                        {press.publication}
                                                    </Link>
                                                ))}
                                            </>
                                        )}
                                        {!press.URL && !press.attachments && (
                                            <span className="press-publication">{press.publication}</span>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </Fragment>
            ))}
        </div>
    );
}
