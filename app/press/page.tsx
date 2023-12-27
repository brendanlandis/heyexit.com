import { Metadata } from 'next';
import HeaderText from '../components/HeaderText';
import SelectedPress from './SelectedPress';

export const metadata: Metadata = {
    title: 'Hey Exit :: press',
};

export default function Press() {
    return (
        <>
            <main id="press">
                <HeaderText text="press" compressor={0.6} />
                <SelectedPress />
            </main>
        </>
    );
}
