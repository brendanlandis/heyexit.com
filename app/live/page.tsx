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
                <HeaderText text="live" compressor={0.6} />
                old show flyers:<br />
                <OldFlyers />
                complete gigography:<br />
                <OldShows />
            </main>
        </>
    );
}
