import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hey Exit',
};

export default function Home() {
    return (
        <>
            <main id="home">
                <div className="image">
                    <img src="/img/home.jpg" alt="hey exit live in 2015" />
                    <p>photo by Emy Sena</p>
                </div>
            </main>
        </>
    );
}
