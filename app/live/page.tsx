import { Metadata } from 'next';
import HeaderText from '../components/HeaderText';

export const metadata: Metadata = {
    title: 'Hey Exit :: live',
};

export default function Live() {
    return (
        <>
            <main id="live">
                <HeaderText text="live" compressor={0.6} />
                gigography goes here
            </main>
        </>
    );
}
