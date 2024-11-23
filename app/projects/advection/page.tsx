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
          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="vymkfdtzdzrbawkmwzt8ws17" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Stairs EP</h3>
              <p>zzzzz</p>
            </div>
          </div>
          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="gqczm6y6moxvwux1y9qb70ww" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Arterial</h3>
              <p>
                zzzzz asd asd ga g a azzzzz asd asd ga g a azzzzz asd asd ga g a
                azzzzz asd asd ga g a azzzzz asd asd ga g a azzzzz asd asd ga g
                a azzzzz asd asd ga g a azzzzz asd asd ga g a azzzzz asd asd ga
                g a azzzzz asd asd ga g a azzzzz asd asd ga g a a
              </p>
            </div>
          </div>
          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="lf6b1e7ke7zze04rhif3ojwl" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Hey Exit - Advection</h3>
              <p>zzzzz</p>
            </div>
          </div>
          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="ygzpy9i783j4q4ziy7ctimkb" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Teen Trax LP</h3>
              <p>zzzzz</p>
            </div>
          </div>
          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="bwpl69xzd4hd4qlyvrr2755o" position="left" />
              <SingleRelease id="r02cjr0zz5de4tgqbw0biyke" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Teen Trax EPs 1 (lo) &amp; 2 (hi)</h3>
              <p>zzzzz</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
