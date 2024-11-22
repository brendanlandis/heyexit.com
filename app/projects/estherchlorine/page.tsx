import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
import Discography from '../Discography';
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
          <p>Estherrrrr</p>
          <Gigography
            band="Esther Chlorine"
            displayImages={false}
            shortList={true}
          />
          <SingleRelease id="hk2qknpq4nzztqaygnw3ih2k" position="left" />
          <SingleRelease id="ws9zwt1fzbhaalm9lgeoa6zb" position="left" />
          <SingleRelease id="oeikprflqcfwvevafodywbze" position="left" />
          <SingleRelease id="adow7g00osk3dn00j7xlo2rj" position="left" />
          <SingleRelease id="fvn4a90nryt9inehvguehbo3" position="left" />
        </div>
      </div>
    </>
  );
}
