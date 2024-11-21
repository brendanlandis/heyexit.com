import '../css/projects.css';
import Link from 'next/link';
import Image from 'next/image';
import AllLivePics from '../components/AllLivePics';

export const metadata = {
  title: 'Hey Exit :: Related Projects',
  description: 'bands and projects related to Hey Exit',
};

export default function Projects() {
  return (
    <>
      <div className="content-projects">
        <div className="header-container">
          <h1>Related Projects</h1>
        </div>
        <p className="header-text">
          As is standard fare for very active noise projects, there was a{' '}
          <em>lot</em> of music tangential to Hey Exit. Some of these projects
          are still active to some degree; others spontaneously grow a new limb
          every few years; still others are probably down for the count.
        </p>
        <div className="project-summaries">
          <Link href="/projects/anura" className="project-summary-anura">
            <Image
              src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/210527_just_before_summer_Michelle_Lo_Bianco_51_1276a8fb84.jpg"
              height={500}
              width={500}
              alt="photo of Anura"
            />
            <div className="text">
              <p>
                <em>Anura</em> is a downer pop, loud-but-soft songwriting
                project. Heartfelt lyrics washed out between drum machines,
                guitars, and synths.
              </p>
            </div>
          </Link>
          <Link
            href="/projects/advection"
            className="project-summary-advection"
          >
            <Image
              src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/180601_old_selfies_Brendan_Landis_08_804df03b9c.jpg"
              height={500}
              width={500}
              alt="photo of Advection"
            />
            <div className="text">
              <p>
                <em>Advection</em> is a solo electronic music affair, leaning
                towards ambient and downtempo headphone beats.
              </p>
            </div>
          </Link>
          <Link href="/projects/tethers" className="project-summary-tethers">
            <Image
              src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/201203_silhouettes_Petra_Magno_01_6d1ce94b54.jpg"
              height={500}
              width={500}
              alt="photo of Tethers"
            />
            <div className="text">
              <p>
                <em>Tethers</em> is an instrumental duo with Andrew Weathers.
              </p>
            </div>
          </Link>
          <Link
            href="/projects/bighiatus"
            className="project-summary-bighiatus"
          >
            <Image
              src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/240727_Big_Hiatus_Skinny_Apartment_unknown_21_f2ab297122.jpg"
              height={500}
              width={500}
              alt="photo of Big Hiatus"
            />
            <div className="text">
              <p>
                <em>Big Hiatus</em> is a sometimes-hazy-sometimes-sharp psych
                journey between nothing and nowhere. A duo with David Drucker
                (Painted Faces, Bad Trips).
              </p>
            </div>
          </Link>
          <Link
            href="/projects/estherchlorine"
            className="project-summary-estherchlorine"
          >
            <Image
              src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/130915_Esther_Chlorine_Pyramid_Atlantic_Jeff_Surak_09_551c6a19d9.jpg"
              height={500}
              width={500}
              alt="photo of Esther Chlorine"
            />
            <div className="text">
              <p>
                <em>Esther Chlorine</em> is an industrial music / murky dark
                ambient project, a duo with Greg Garbage.
              </p>
            </div>
          </Link>
          <Link href="/projects/itbreaks" className="project-summary-itbreaks">
            <Image
              src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/120413_It_Breaks_Strange_Matter_Lucio_Menegon_02_986e02116e.jpg"
              height={500}
              width={500}
              alt="photo of It Breaks"
            />
            <div className="text">
              <p>
                <em>It Breaks</em> was a high-speed acoustic harsh noise trio with
                David Grollman and Lucio Menegon.
              </p>
            </div>
          </Link>
          <Link
            href="/projects/roughweather"
            className="project-summary-roughweather"
          >
            <Image
              src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/110407_Rough_Weather_La_Paloma_Coffee_House_unknown_02_7a5355e1fd.jpg"
              height={500}
              width={500}
              alt="photo of Rough Weather"
            />
            <div className="text">
              <p>
                <em>Rough Weather</em> was an electroacoustic / free improv
                project, a duo between Eric Schoster's live computer music and
                my rocks-and-sticks approach to prepared guitar.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
