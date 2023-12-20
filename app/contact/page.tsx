import { Metadata } from 'next';
import HeaderText from '../components/HeaderText';

export const metadata: Metadata = {
    title: 'Hey Exit :: contact',
};

export default function Contact() {
    return (
        <>
            <main id="contact">
                <HeaderText text="contact" compressor={0.6} />
                contact goes here
            </main>
        </>
    );
}
