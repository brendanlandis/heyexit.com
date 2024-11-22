import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
import Discography from '../Discography';
import Gigography from '../Gigography';
import Image from 'next/image';
import SingleRelease from '../SingleRelease';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: It Breaks',
  description: '',
};

export default function ItBreaksPage() {
  return (
    <>
      <div className="content-projects itbreaks-container">
        <div className="header-container">
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/120413_It_Breaks_Strange_Matter_Lucio_Menegon_02_986e02116e.jpg"
            height={2048}
            width={2048}
            alt="photo of It Breaks"
          />
          <h1>It Breaks</h1>
        </div>
        <div className="project-content">
          <p>
            It Breakszzzzzzzzz. It Breakszzzzzzzzz. It Breakszzzzzzzzz. It
            Breakszzzzzzzzz. It Breakszzzzzzzzz. It Breakszzzzzzzzz. It
            Breakszzzzzzzzz. It Breakszzzzzzzzz. It Breakszzzzzzzzz. It
            Breakszzzzzzzzz.{' '}
          </p>
          <Gigography band="It Breaks" displayImages={false} shortList={true} />
          <SingleRelease id="d001u3hv85kt3p0v9sgtku22" position="left" />
        </div>
      </div>
    </>
  );
}
