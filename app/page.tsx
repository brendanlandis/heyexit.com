import { Metadata } from 'next';
import Image from 'next/image';
import RandomLivePic from './RandomLivePic';

export const metadata: Metadata = {
    title: 'Hey Exit',
};

export default function Home() {
    return (
        <>
            <main id="home">
                <div className="image">
                    <RandomLivePic />
                </div>
            </main>
        </>
    );
}
