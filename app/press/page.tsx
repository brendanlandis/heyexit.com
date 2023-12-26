import { Metadata } from 'next';
import HeaderText from '../components/HeaderText';

export const metadata: Metadata = {
    title: 'Hey Exit :: press',
};

export default function Press() {
    return (
        <>
            <main id="press">
                <HeaderText text="press" compressor={0.6} />
                press goes here
            </main>
        </>
    );
}
