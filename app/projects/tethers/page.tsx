import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
import Image from 'next/image';
import Gigography from '../Gigography';
import SingleRelease from '../SingleRelease';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: Tethers',
  description: '',
};

export default function TethersPage() {
  return (
    <>
      <div className="content-projects tethers-container">
        <div className="header-container">
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/201203_silhouettes_Petra_Magno_01_6d1ce94b54.jpg"
            height={2048}
            width={2048}
            alt="photo of Tethers"
          />
          <h1>Tethers</h1>
        </div>
        <div className="project-content">
          <div className="project-shows">
            <h3>shows</h3>
            <Gigography band="Tethers" displayImages={false} shortList={true} />
          </div>
          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="dsl01ulm53esw6mnyqdsyrx9" position="left" />
            </div>
            <div className="project-release-description">
              <h3>It Bows By Day</h3>
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
              <SingleRelease id="y2e8v4phxa3udlwqok212zzy" position="left" />
            </div>
            <div className="project-release-description">
              <h3>F&uuml;r Alina</h3>
              <p></p>
            </div>
          </div>
          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="j304fh1m8e4tstpf39b9s8vv" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Hey Exit - Reading a Moment's Dust</h3>
              <p></p>
            </div>
          </div>
          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="xcfr9c0qbpc4k63hylvu2vsn" position="left" />
            </div>
            <div className="project-release-description">
              <h3>We Walked There</h3>
              <p></p>
            </div>
          </div>
          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="n5pb9a3o9n0l34tbdq9y6irs" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Yeah We Get Along</h3>
              <p></p>
            </div>
          </div>
          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="wa7m70wnx20ciulexs5elr6b" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Two Remixes</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
