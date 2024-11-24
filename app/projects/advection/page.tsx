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
          <SingleRelease id="vymkfdtzdzrbawkmwzt8ws17">asdf</SingleRelease>
          <SingleRelease id="gqczm6y6moxvwux1y9qb70ww">asdf</SingleRelease>
          <h2>precursors</h2>
          <SingleRelease id="lf6b1e7ke7zze04rhif3ojwl">asdf</SingleRelease>
          <h2>extreme precursors</h2>
          <SingleRelease id="ygzpy9i783j4q4ziy7ctimkb">asdf</SingleRelease>
          <SingleRelease id="bwpl69xzd4hd4qlyvrr2755o">asdf</SingleRelease>
          <SingleRelease id="r02cjr0zz5de4tgqbw0biyke">asdf</SingleRelease>
        </div>
      </div>
    </>
  );
}
