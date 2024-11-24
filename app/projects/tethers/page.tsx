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
          <Gigography band="Tethers" displayImages={false} shortList={true} />

          <SingleRelease id="dsl01ulm53esw6mnyqdsyrx9">asdf</SingleRelease>
          <SingleRelease id="y2e8v4phxa3udlwqok212zzy">asdf</SingleRelease>
          <h2>honorable mention</h2>
          <SingleRelease id="j304fh1m8e4tstpf39b9s8vv">asdf</SingleRelease>
          <h2>older stuff</h2>
          <SingleRelease id="xcfr9c0qbpc4k63hylvu2vsn">asdf</SingleRelease>
          <SingleRelease id="n5pb9a3o9n0l34tbdq9y6irs">asdf</SingleRelease>
          <SingleRelease id="wa7m70wnx20ciulexs5elr6b">asdf</SingleRelease>
        </div>
      </div>
    </>
  );
}
