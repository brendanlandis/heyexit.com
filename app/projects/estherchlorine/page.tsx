import '../../css/projects.css';
import '../../css/recordings.css';
import Gigography from '../Gigography';
import Image from 'next/image';
import SingleRelease from '../SingleRelease';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: Esther Chlorine',
  description: '',
};

export default function EstherChlorinePage() {
  return (
    <>
      <div className="content-projects estherchlorine-container">
        <div className="header-container">
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/130915_Esther_Chlorine_Pyramid_Atlantic_Jeff_Surak_11_06a077bd81.jpg"
            height={2048}
            width={2048}
            alt="photo of Esther Chlorine"
          />
          <h1>Esther Chlorine</h1>
        </div>
        <div className="project-content">
          <p className="project-intro">
            An industrial / murky dark ambient duo with Bay Area legend and
            major homie Greg Garbage (<strong>Black Thread</strong>,{' '}
            <strong>Vibrating Garbage</strong>,{' '}
            <strong>Birds You Once Knew</strong>,{' '}
            <strong>Turmeric Magnitudes</strong>,{' '}
            <strong>Cascading Fragments</strong>, <strong>Unless</strong>,{' '}
            <strong>Rose Buried in Sand</strong>,<strong>Von Himmel</strong>,{' '}
            <strong>Spitting Falcons</strong>,{' '}
            <strong>Wires &amp; Relays</strong>, et. al.).
          </p>
          <Gigography
            band="Esther Chlorine"
            displayImages={false}
            shortList={true}
          />
          <div className="project-releases">
            <SingleRelease id="hk2qknpq4nzztqaygnw3ih2k" displayArtist={false}>
              <p>
                A longform, semi-composed piece for guitar and electronics. The
                takes here are each single performances with only one or two
                edits. In them, I'm playing through Greg's 8-channel custom
                broken-cassette-player system.
              </p>
            </SingleRelease>
            <SingleRelease id="ws9zwt1fzbhaalm9lgeoa6zb" displayArtist={false}>
              <p>
                Eight shorter pieces from the same sessions as <em>Retiform</em>
                . The lighter side of Esther Chlorine.
              </p>
            </SingleRelease>
            <SingleRelease id="fvn4a90nryt9inehvguehbo3" displayArtist={false}>
              <p>
                A deeply murky world of old school industrial and dark ambient.
                These sessions set the tone for much of our remaining work.
              </p>
            </SingleRelease>
            <SingleRelease id="adow7g00osk3dn00j7xlo2rj" displayArtist={false}>
              <p>
                A collection of tiny shards of music. The follow-up to{' '}
                <em>World of Prophecy</em>.
              </p>
            </SingleRelease>
            <SingleRelease id="oeikprflqcfwvevafodywbze" displayArtist={false}>
              <p>A live recording from 2013.</p>
            </SingleRelease>
          </div>
        </div>
      </div>
    </>
  );
}
