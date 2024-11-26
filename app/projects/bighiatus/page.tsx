import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
import Image from 'next/image';
import Gigography from '../Gigography';
import Discography from '../Discography';
import SingleRelease from '../SingleRelease';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: Big Hiatus',
  description: '',
};

export default function BigHiatusPage() {
  return (
    <>
      <div className="content-projects bighiatus-container">
        <div className="header-container">
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/240727_Big_Hiatus_Skinny_Apartment_unknown_21_f2ab297122.jpg"
            height={2048}
            width={2048}
            alt="photo of Big Hiatus"
          />
          <h1>Big Hiatus</h1>
        </div>
        <div className="project-content">
          <p className="project-intro">
            A hazy-but-sharp psych journey between nothing and nowhere. A duo
            with spiritual brother and absolute hero of underground outsider
            music David Drucker (Painted Faces, Bad Trips).
          </p>
          <Gigography
            band="Big Hiatus"
            displayImages={false}
            shortList={true}
          />
          <div className="project-releases">
            <SingleRelease id="mukz8w9810tle26oc0kwld3h" displayArtist={false}>
              <p>
                Towering, deep fried psych noise, heavily influenced by the east
                coast experimental underground.
              </p>
            </SingleRelease>
          </div>
        </div>
      </div>
    </>
  );
}
