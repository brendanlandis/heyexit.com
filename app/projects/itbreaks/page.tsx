import '../../css/projects.css';
import '../../css/recordings.css';
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
          <p className="project-intro">
            A high-speed acoustic harsh noise trio with creative powerhouse
            David Grollman (aka Steve) and unflinching mondo shredder Lucio
            Menegon.
          </p>
          <Gigography band="It Breaks" displayImages={false} shortList={true} />
          <div className="project-releases">
            <SingleRelease id="d001u3hv85kt3p0v9sgtku22" displayArtist={false}>
              <p>
                A one-day recording session birthed this tour EP of miniature
                noise trio workouts. Tight turns and abstract projectiles, a
                collection of loose darts.
              </p>
            </SingleRelease>
            <h2>see also</h2>
            <SingleRelease id="q3w3nyz29tkneiqjfkeqrsf8" displayArtist={true}>
              <p>
                Six years and several lifetimes later, David and I put together
                this noise tape internet-style, trading sounds and assembling
                each other's material into fixed pieces. Classic c20 format,
                featuring David reading works from <em>Straight to Hell</em>{' '}
                #25. Not for the faint of heart.
              </p>
            </SingleRelease>
          </div>
        </div>
      </div>
    </>
  );
}
