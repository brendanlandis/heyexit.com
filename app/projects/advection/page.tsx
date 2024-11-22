import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
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
          <p>
            Advection was more of a dumping ground for electronic music than an
            intentional project in and of itself.
          </p>
          <SingleRelease id="vymkfdtzdzrbawkmwzt8ws17" position="left" />
          <SingleRelease id="r02cjr0zz5de4tgqbw0biyke" position="left" />
          <SingleRelease id="bwpl69xzd4hd4qlyvrr2755o" position="left" />
          <SingleRelease id="ygzpy9i783j4q4ziy7ctimkb" position="left" />
          <SingleRelease id="gqczm6y6moxvwux1y9qb70ww" position="left" />
          <SingleRelease id="lf6b1e7ke7zze04rhif3ojwl" position="left" />
        </div>
      </div>
    </>
  );
}
