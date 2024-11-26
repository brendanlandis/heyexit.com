import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
import Image from 'next/image';
import Gigography from '../Gigography';
import SingleRelease from '../SingleRelease';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: Tethers',
  description: '',
};

export default function TethersPage() {
  return (
    <>
      <div className="content-projects tethers-container">
        <div className="header-container">
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/140509_Tethers_Silent_Barn_unknown_02_5c5e103ff1.jpg"
            height={2048}
            width={2048}
            alt="photo of Tethers"
          />
          <h1>Tethers</h1>
        </div>
        <div className="project-content">
          <p className="project-intro">
            An instrumental duo with the supreme dude Andrew Weathers (Tamarisk,
            Wind Tide). What started as a spare, spikey instrumental duo turned
            gradually into something more mountainous and expansive, sometimes a
            glacier, other times a distant cloud.
          </p>
          <Gigography band="Tethers" displayImages={false} shortList={true} />
          <div className="project-releases">
            <SingleRelease id="dsl01ulm53esw6mnyqdsyrx9" displayArtist={false}>
              <p>
                A pair of scorched earth instrumentals. Side A was improvised
                simultaneously in Brooklyn / Oakland on the full moon of July
                19th, 2016, with no monitoring between the two sessions, and no
                temporal edits to the final mix. Side B was written in 2016 and
                recorded in a single room in Brooklyn in 2017.
              </p>
            </SingleRelease>
            <SingleRelease id="y2e8v4phxa3udlwqok212zzy" displayArtist={false}>
              <p>
                Arvo P&auml;rt's classic short-form piece, played on two
                guitars.
              </p>
            </SingleRelease>
            <h2>honorable mention</h2>
            <SingleRelease id="j304fh1m8e4tstpf39b9s8vv" displayArtist={true}>
              <p>
                Recorded at Andrew's place in 2018, the initial plan for these
                sessions was to record a bunch of tracks for a new tape in the{' '}
                <em>Else</em> series, plus a bunch of tracks for a new Tethers
                album. I went home and edited these tracks into place, but
                circumstances prevented the Tethers tracks from materializing.
              </p>
              <p>
                In retrospect this should probably have been a Tethers release.
                Then again, I took more compositional liberties with it than I
                usually do. A curious entry in the discography, but honestly one
                of my favs.
              </p>
            </SingleRelease>
            <h2>older stuff</h2>
            <SingleRelease id="xcfr9c0qbpc4k63hylvu2vsn" displayArtist={false}>
              <p>
                Several lifetimes ago, we played straight duo tracks with banjo
                and koto. I remember for these sessions we drove all around the
                Bay, recording in bunkers, libraries, bedrooms, parks; then
                manipulated those recordings in some complex procedural fashion;
                and finally played those manipulated recordings out of tiny
                speakers in the same spaces. A moderate hassle in retrospect,
                but then again the tunes turned out pretty nice.
              </p>
              <p>
                The "before" and "after" tracks both have this
                no-begining-no-end quality to them that I find now to be deeply
                unmusical in a charmingly naive way. Some work better than
                others.
              </p>
            </SingleRelease>
            <SingleRelease id="n5pb9a3o9n0l34tbdq9y6irs" displayArtist={false}>
              Our first recordings in the banjo / koto configuration, now lost
              to the sands of time...
            </SingleRelease>
            <SingleRelease id="wa7m70wnx20ciulexs5elr6b" displayArtist={false}>
              ...save for these two reinterpretations.
            </SingleRelease>
          </div>
        </div>
      </div>
    </>
  );
}
