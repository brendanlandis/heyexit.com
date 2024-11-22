import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
import Image from 'next/image';
import Discography from '../Discography';

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

          <Discography band="Advection" />
        </div>
      </div>
    </>
  );
}
