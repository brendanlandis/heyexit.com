import '../css/projects.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Hey Exit :: Related Projects',
  description: 'bands and projects related to Hey Exit',
};

export default function Projects() {
  return (
    <>
      <div className="content-projects generic-container">
        <div className="header-container">
          <h1>Related Projects</h1>
        </div>
        <p className="header-text">
          As is standard fare for active noise projects, there was a lot of
          music tangential to <strong>Hey Exit</strong>, plus a lot of
          collaborative projects with friends. Some of these projects are
          probably down for the count; others spontaneously grow a new limb
          every few years; still others remain active to some degree.
        </p>
        <div className="project-summaries">
          <Link href="/projects/anura" className="project-summary-anura">
            <div className="image-wrapper">
              <span></span>
              <Image
                src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/210527_just_before_summer_Michelle_Lo_Bianco_51_1276a8fb84.jpg"
                height={500}
                width={500}
                alt="photo of Anura"
              />
            </div>
            <div className="text">
              <p>
                <strong>Anura</strong> is a downer pop, loud-but-soft
                songwriting project, and was my path into the traditional
                popular forms that I've been exploring with bands since. Washed
                out vocals over drum machines, guitars, and synths, very
                bedroom'd-out.
              </p>
            </div>
          </Link>
          <Link
            href="/projects/advection"
            className="project-summary-advection"
          >
            <div className="image-wrapper">
              <span></span>
              <Image
                src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/180601_old_selfies_Brendan_Landis_08_804df03b9c.jpg"
                height={500}
                width={500}
                alt="photo of Advection"
              />
            </div>
            <div className="text">
              <p>
                <strong>Advection</strong> is my requisite electronics side
                project, leaning towards ambient and downtempo headphone beats.
                Laptop music was a first love of mine in the late 90s, and even
                though it's not my main focus any more, it remains some of my
                favorite music to make.
              </p>
            </div>
          </Link>
          <Link href="/projects/tethers" className="project-summary-tethers">
            <div className="image-wrapper">
              <span></span>
              <Image
                src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/201203_silhouettes_Petra_Magno_01_6d1ce94b54.jpg"
                height={500}
                width={500}
                alt="photo of Tethers"
              />
            </div>
            <div className="text">
              <p>
                <strong>Tethers</strong> is an instrumental duo with the supreme
                dude Andrew Weathers (<strong>Tamarisk</strong>,{' '}
                <strong>Wind Tide</strong>). What started as a spare, spikey
                instrumental duo turned gradually into something more
                mountainous and expansive, sometimes a glacier, other times a
                distant cloud.
              </p>
            </div>
          </Link>
          <Link
            href="/projects/bighiatus"
            className="project-summary-bighiatus"
          >
            <div className="image-wrapper">
              <span></span>
              <Image
                src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/240727_Big_Hiatus_Skinny_Apartment_unknown_21_f2ab297122.jpg"
                height={500}
                width={500}
                alt="photo of Big Hiatus"
              />
            </div>
            <div className="text">
              <p>
                <strong>Big Hiatus</strong> is a hazy-but-sharp psych journey
                between nothing and nowhere. A duo with spiritual brother and
                absolute hero of underground outsider music David Drucker (
                <strong>Painted Faces</strong>, <strong>Bad Trips</strong>).
              </p>
            </div>
          </Link>
          <Link
            href="/projects/estherchlorine"
            className="project-summary-estherchlorine"
          >
            <div className="image-wrapper">
              <span></span>
              <Image
                src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/130915_Esther_Chlorine_Pyramid_Atlantic_Jeff_Surak_09_551c6a19d9.jpg"
                height={500}
                width={500}
                alt="photo of Esther Chlorine"
              />
            </div>
            <div className="text">
              <p>
                <strong>Esther Chlorine</strong> is an industrial / murky dark
                ambient duo with Bay Area legend and major homie Greg Garbage (
                <strong>Black Thread</strong>,{' '}
                <strong>Vibrating Garbage</strong>,{' '}
                <strong>Birds You Once Knew</strong>,{' '}
                <strong>Turmeric Magnitudes</strong>,{' '}
                <strong>Cascading Fragments</strong>, <strong>Unless</strong>,{' '}
                <strong>Rose Buried in Sand</strong>,<strong>Von Himmel</strong>
                , <strong>Spitting Falcons</strong>,{' '}
                <strong>Wires &amp; Relays</strong>, et. al.).
              </p>
            </div>
          </Link>
          <Link href="/projects/itbreaks" className="project-summary-itbreaks">
            <div className="image-wrapper">
              <span></span>
              <Image
                src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/120413_It_Breaks_Strange_Matter_Lucio_Menegon_02_986e02116e.jpg"
                height={500}
                width={500}
                alt="photo of It Breaks"
              />
            </div>
            <div className="text">
              <p>
                <strong>It Breaks</strong> was a high-speed acoustic harsh noise
                trio with creative powerhouse David Grollman (aka Steve) and
                unflinching mondo shredder Lucio Menegon.
              </p>
            </div>
          </Link>
          <Link
            href="/projects/roughweather"
            className="project-summary-roughweather"
          >
            <div className="image-wrapper">
              <span></span>
              <Image
                src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/110407_Rough_Weather_La_Paloma_Coffee_House_unknown_02_7a5355e1fd.jpg"
                height={500}
                width={500}
                alt="photo of Rough Weather"
              />
            </div>
            <div className="text">
              <p>
                <strong>Rough Weather</strong> was an electroacoustic / free
                improv duo with computer music standard-bearer and rad dude Erik
                Schoster (<strong>He Can Jog</strong>). A bit of a
                Jetsons-Meet-the-Flinstones affair in terms of instruments, the
                project juxtaposed Schoster's live computer music with my
                rocks-and-sticks approach to prepared guitar and amplified
                objects.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
