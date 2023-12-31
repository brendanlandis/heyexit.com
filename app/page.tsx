import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Hey Exit',
};

export default function Home() {
    return (
        <>
            <main id="home">
                <div className="image">
                    <Image src="/img/home.jpg" alt="hey exit live in 2015" width={640} height={479} />
                    <p>photo by Emy Sena</p>
                </div>
            </main>
        </>
    );
}
