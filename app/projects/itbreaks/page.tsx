import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
import Discography from '../Discography';
import Gigography from '../Gigography';
import Image from 'next/image';
import SingleRelease from '../SingleRelease';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: It Breaks',
  description: '',
};

export default function ItBreaksPage() {
  return (
    <>
      <div className="content-projects itbreaks-container">
        <div className="header-container">
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/120413_It_Breaks_Strange_Matter_Lucio_Menegon_02_986e02116e.jpg"
            height={2048}
            width={2048}
            alt="photo of It Breaks"
          />
          <h1>It Breaks</h1>
        </div>
        <div className="project-content">
          <div className="project-shows">
            <h3>shows</h3>
            <Gigography
              band="It Breaks"
              displayImages={false}
              shortList={true}
            />
          </div>
          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="d001u3hv85kt3p0v9sgtku22" position="left" />
            </div>
            <div className="project-release-description">
              <h3>It Breaks</h3>
              <p>
                fneh asdkfasdhf askhg askljfas faskjh as fneh asdkfasdhf askhg
                askljfas faskjh as fneh asdkfasdhf askhg askljfas faskjh as fneh
                asdkfasdhf askhg askljfas faskjh as fneh asdkfasdhf askhg
                askljfas faskjh as fneh asdk
              </p>
            </div>
          </div>
          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="q3w3nyz29tkneiqjfkeqrsf8" position="left" />
            </div>
            <div className="project-release-description">
              <h3>David Grollman + Hey Exit - Steve/Steve</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
