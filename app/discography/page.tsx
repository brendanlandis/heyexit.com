import { Metadata } from 'next';
import HeaderText from '../components/HeaderText';

export const metadata: Metadata = {
    title: 'Hey Exit :: discography',
};

export default function Discography() {
    return (
        <>
            <main id="discography">
                <HeaderText text="selected discography" compressor={1} />
                discog goes here
                <HeaderText text="complete discography" compressor={1} />
            </main>
        </>
    );
}
