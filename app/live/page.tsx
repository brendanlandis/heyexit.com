import { Metadata } from 'next';
import HeaderText from '../components/HeaderText';
import OldFlyers from './OldFlyers';
import OldShows from './OldShows';

export const metadata: Metadata = {
    title: 'Hey Exit :: live',
};

export default function Live() {
    return (
        <>
            <main id="live">
                <HeaderText text="old flyers" compressor={1.5} />
                <OldFlyers />
                <HeaderText text="gigography" compressor={1.5} />
                <OldShows />
            </main>
        </>
    );
}
