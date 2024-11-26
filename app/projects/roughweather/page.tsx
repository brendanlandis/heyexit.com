import '../../css/projects.css';
import '../../css/recordings.css';
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
          <p className="project-intro">
            An electroacoustic / free improv duo with computer music
            standard-bearer and rad dude Eric Schoster. A bit of a
            Jetsons-Meet-the-Flinstones affair in terms of instruments, the
            project juxtaposed Schoster's live computer music with my
            rocks-and-sticks approach to prepared guitar and amplified objects.
          </p>
          <Gigography
            band="Rough Weather"
            displayImages={false}
            shortList={true}
          />
          <div className="project-releases">
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
      </div>
    </>
  );
}
