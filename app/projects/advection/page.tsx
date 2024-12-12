import '../../css/projects.css';
import '../../css/recordings.css';
import Image from 'next/image';
import SingleRelease from '../SingleRelease';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: Advection',
  description: 'electronic music',
};

export default function AdvectionPage() {
  return (
    <>
      <div className="content-projects advection-container">
        <div className="header-container">
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/180601_old_selfies_Brendan_Landis_08_804df03b9c.jpg"
            height={2048}
            width={2048}
            alt="photo of Advection"
          />
          <h1>Advection</h1>
        </div>
        <div className="project-content">
          <p className="project-intro">
            The requisite electronics side project, leaning towards ambient and
            downtempo headphone beats. Laptop music was a first love of mine in
            the late 90s, and even though it's not my main focus any more, it
            remains some of my favorite music to make.
          </p>
          <div className="project-releases">
            <SingleRelease id="vymkfdtzdzrbawkmwzt8ws17" displayArtist={false}>
              <p>
                A half-hour set of hazy, mid-tempo electronic tunes. Some of
                these were rescued from ancient folders full of unfinished
                session files and subsequently repurpsed, others were put
                together during the quarantine era of 2020. A bit of a
                transitional document.
              </p>
            </SingleRelease>
            <SingleRelease id="gqczm6y6moxvwux1y9qb70ww" displayArtist={false}>
              <p>
                An ode to one of my favorite instrumental release formats: the
                2CD ambient album.
              </p>
            </SingleRelease>
            <h2>a precursor</h2>
            <SingleRelease id="lf6b1e7ke7zze04rhif3ojwl" displayArtist={true}>
              <p>
                A trio of modular synth pieces, each a different take on the
                grammar of windchime music.
              </p>
              <p>
                I hadn't yet thought about starting an electronic project when I
                made these, and in retrospect these tunes really belong to this
                project. (Hence the name.)
              </p>
            </SingleRelease>
            <h2>extreme precursors</h2>
            <SingleRelease id="ygzpy9i783j4q4ziy7ctimkb" displayArtist={false}>
              <p>
                A hefty chunk of tracks from the dialup days of the internet.
                Demoscene explorations, chiptune end-credits themes, "idm"
                scuttles &mdash; all plucked from CD-Rs, mp3s in LiveJournal
                posts, and of course a wealth of rotting old hard drives. A few
                hundred tracks have been distilled down to what you see here.
              </p>
              <p>
                It's always a little funny to post stuff like this &mdash; early
                tunes that, while charming, aren't very skillful. But, in the
                context of an achival space on the web, there's space for
                beginnings.
              </p>
              <p>The LP contains the most completed, presentable tracks...</p>
            </SingleRelease>
            <SingleRelease id="bwpl69xzd4hd4qlyvrr2755o" displayArtist={false}>
              <p>
                ...while the EPs contain b-sides, miscellany, segues, sketches,
                ephemera. The <em>Lo</em> EP has a more downtempo feel...
              </p>
            </SingleRelease>
            <SingleRelease id="r02cjr0zz5de4tgqbw0biyke" displayArtist={false}>
              <p>
                ...while the <em>Hi</em> EP is more aggressive and brightly
                colored.
              </p>
            </SingleRelease>
          </div>
        </div>
      </div>
    </>
  );
}
