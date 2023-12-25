import { Metadata } from 'next';
import HeaderText from '../components/HeaderText';
import SelectedDiscog from './SelectedDiscog';
import CompleteDiscog from './CompleteDiscog';
import OtherBands from './OtherBands';

export const metadata: Metadata = {
    title: 'Hey Exit :: discography',
};

export default function Discography() {
    return (
        <>
            <main id="discography">
                <div className="discography-selected">
                    <HeaderText text="selected discography" compressor={1} />
                    <SelectedDiscog />
                </div>
                <div className="discography-complete">
                    <HeaderText text="complete discography" compressor={1.5} />
                    <CompleteDiscog />
                </div>
                <div className="discography-bands">
                    <HeaderText text="other projects from around the same time" compressor={1.5} />
                    <OtherBands />
                </div>
            </main>
        </>
    );
}
