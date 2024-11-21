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
          As is standard fare for prolific noise projects, there was a{' '}
          <em>lot</em> of music tangential to Hey Exit. Some of these projects
          are still active to some degree; others spontaneously grow a new limb
          every few years; still others are probably down for the count.
        </p>
        <div className="project-summaries">
          <div className="project-summary-advection">
            <Image
              src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/180601_old_selfies_Brendan_Landis_08_804df03b9c.jpg"
              height={500}
              width={500}
              alt="photo of Advection"
            />
            <p>Advection was blah blah blah.</p>
          </div>
          <div className="project-summary-anura">
            <Image
              src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/210527_just_before_summer_Michelle_Lo_Bianco_51_1276a8fb84.jpg"
              height={500}
              width={500}
              alt="photo of Anura"
            />
            <p>Anura was also blah blah blah.</p>
          </div>
          <div className="project-summary-tethers">
            <Image
              src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/201203_silhouettes_Petra_Magno_01_6d1ce94b54.jpg"
              height={500}
              width={500}
              alt="photo of Tethers"
            />
            <p>You bet Tethers was blah blah blah.</p>
          </div>
          <div className="project-summary-bighiatus">
            <Image
              src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/240727_Big_Hiatus_Skinny_Apartment_unknown_21_f2ab297122.jpg"
              height={500}
              width={500}
              alt="photo of Big Hiatus"
            />
            <p>Big Hiatus was absolutely blah blah blah.</p>
          </div>
          <div className="project-summary-estherchlorine">
            <Image
              src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/130915_Esther_Chlorine_Pyramid_Atlantic_Jeff_Surak_09_551c6a19d9.jpg"
              height={500}
              width={500}
              alt="photo of Esther Chlorine"
            />
            <p>Esther Chlorine was absolutely blah blah blah.</p>
          </div>
          <div className="project-summary-roughweather">
            <Image
              src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/110407_Rough_Weather_La_Paloma_Coffee_House_unknown_02_7a5355e1fd.jpg"
              height={500}
              width={500}
              alt="photo of Rough Weather"
            />
            <p>Rough Weather was absolutely blah blah blah.</p>
          </div>
          <div className="project-summary-roughweather">
            <Image
              src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/120413_It_Breaks_Strange_Matter_Lucio_Menegon_02_986e02116e.jpg"
              height={500}
              width={500}
              alt="photo of It Breaks"
            />
            <p>It Breaks was absolutely blah blah blah.</p>
          </div>
        </div>
        {/* <div className="band-list-container">
          <ul className="band-list">
            <li>
              <Link href="projects/advection">Advection</Link>
            </li>
            <li>
              <Link href="projects/anura">Anura</Link>
            </li>
            <li>
              <Link href="projects/tethers">Tethers</Link>
            </li>
            <li>
              <Link href="projects/bighiatus">Big Hiatus</Link>
            </li>
            <li>
              <Link href="projects/estherchlorine">Esther Chlorine</Link>
            </li>
            <li>
              <Link href="projects/roughweather">Rough Weather</Link>
            </li>
            <li>
              <Link href="projects/itbreaks">It Breaks</Link>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
}
