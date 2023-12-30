import { Metadata } from 'next';
import HeaderText from '../components/HeaderText';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Hey Exit :: shows',
};

export default function About() {
    return (
        <>
            <main id="about">
                <HeaderText text="about" compressor={0.6} />
                <p>
                    Hey Exit was Brendan Landis' primary musical project from 2009 - 2021. Over this time the project
                    covered quite a lot of ground, working in several musical traditions and drawing from many different
                    styles within each:
                </p>
                <ul>
                    <li>
                        <strong>art music & long-form instrumentals</strong> (new age doom, electroacoustic composition, free improvisation,
                        prepared guitar, plunderphonics)
                    </li>
                    <li>
                        <strong>heavy music & non-music</strong> (harsh noise, industrial, grindcore)
                    </li>
                    <li>
                        <strong>songwriting & short-form instrumentals</strong> (downer pop, airs for solo instruments
                        or small ensembles)
                    </li>
                </ul>
                <p>
                    Despite this restless approach to style and tradition, there are several throughlines in the work:
                    music as spiritual practice, contrasting extremes presented as necessary opposites, and the dilemma
                    of making space for hope and horror in equal measure.
                </p>
                <p>
                    After forty five releases, the Hey Exit project is retired for the foreseeable future. However,
                    Brendan remains active in a number of other bands and projects:
                </p>
                <ul>
                    <li>
                        <Link href="https://receive.blue/">Receive</Link> is his current primary creative output &mdash; a heavy art rock quartet
                        in which he sings and plays baritone guitar.
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/_starcard">Star Card</Link> is an alt rock band in which all members of Receive play different
                        instruments. Brendan plays drums (hell yeah).
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/__receiver/">Receiver</Link> is a downer-pop-slash-noise-table duo involving Brendan and Calley
                        Nelson (who sings in Star Card and plays lead guitar in Receive).
                    </li>
                    <li>
                        <Link href="https://slownames.bandcamp.com/album/stairs-ep">Advection</Link> is Brendan's solo project for electronic music and short-form
                        instrumentals.
                    </li>
                    <li>
                        <Link href="https://slownames.bandcamp.com/album/deluge">Anura</Link> is a bedroom songwriting project that preceded Receive by a year or two.
                        It sometimes threatens to resurface in one form or another.
                    </li>
                </ul>
            </main>
        </>
    );
}
