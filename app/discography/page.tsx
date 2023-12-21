import { Metadata } from 'next';
import HeaderText from '../components/HeaderText';
import SelectedDiscog from '../components/SelectedDiscog';
import CompleteDiscog from '../components/CompleteDiscog';
import OtherBands from '../components/OtherBands';

export const metadata: Metadata = {
    title: 'Hey Exit :: discography',
};

export default function Discography() {
    return (
        <>
            <main id="discography">
                <HeaderText text="selected discography" compressor={1} />
                <SelectedDiscog />
                <HeaderText text="complete discography" compressor={1} />
                <CompleteDiscog />
                <HeaderText text="other bands" compressor={1} />
                <OtherBands />
            </main>
        </>
    );
}
