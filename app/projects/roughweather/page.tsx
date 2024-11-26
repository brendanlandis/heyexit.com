import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
import Discography from '../Discography';
import Gigography from '../Gigography';
import Image from 'next/image';
import SingleRelease from '../SingleRelease';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: Rough Weather',
  description: '',
};

export default function RoughWeatherPage() {
  return (
    <>
      <div className="content-projects roughweather-container">
        <div className="header-container">
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/110406_Rough_Weather_house_show_unknown_03_489e784c9f.jpg"
            height={2048}
            width={2048}
            alt="photo of Rough Weather"
          />
          <h1>Rough Weather</h1>
        </div>
        <div className="project-content">
          <Gigography
            band="Rough Weather"
            displayImages={false}
            shortList={true}
          />
          <SingleRelease id="spc4uk5ka4pwm37kizm9c1lc" displayArtist={false}>
            <p>
              Graphic scores, amplified objects, electroacoustics. Listening
              back over a decade later, it's interesting how the materials of
              this music feel harsh or heavy to me, but the form is somehow so
              gentle. Ecstatic abstraction.
            </p>
          </SingleRelease>
        </div>
      </div>
    </>
  );
}
