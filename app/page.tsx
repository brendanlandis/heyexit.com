import { Metadata } from 'next';
import RandomLivePic from './RandomLivePic';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Hey Exit',
};

export default function Home() {
    return (
        <>
            <main id="home">
                <div className="intro-text">
                    <p>
                        This site is an archive for the now-defunct Hey Exit project, plus some related projects from
                        around the same time. You can <Link href="/about">read about it</Link>,{' '}
                        <Link href="/discography">listen to it</Link>,{' '}
                        <Link href="/live">scroll through the gigography</Link>,{' '}
                        <Link href="/press">read a few reviews</Link>, or <Link href="/contact">get in touch</Link>.
                    </p>
                    <p>
                        These days Brendan plays in <Link href="https://receive.blue/">Receive</Link>,{' '}
                        <Link href="https://www.instagram.com/_starcard">Star Card</Link>, and{' '}
                        <Link href="https://www.instagram.com/__receiver/">Receiver</Link>.
                    </p>
                </div>
                <RandomLivePic />
            </main>
        </>
    );
}
