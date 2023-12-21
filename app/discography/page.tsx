import { Metadata } from 'next';
import HeaderText from '../components/HeaderText';
import CompleteDiscog from '../components/CompleteDiscog';

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
                <CompleteDiscog />
            </main>
        </>
    );
}
