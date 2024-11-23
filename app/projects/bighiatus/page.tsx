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
          <div className="project-shows">
            <h3>shows</h3>
            <Gigography band="Big Hiatus" displayImages={false} shortList={true} />
          </div>
          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="mukz8w9810tle26oc0kwld3h" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Towards It</h3>
              <p>
                fneh asdkfasdhf askhg askljfas faskjh as fneh asdkfasdhf askhg
                askljfas faskjh as fneh asdkfasdhf askhg askljfas faskjh as fneh
                asdkfasdhf askhg askljfas faskjh as fneh asdkfasdhf askhg
                askljfas faskjh as fneh asdk
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
