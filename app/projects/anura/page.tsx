import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
import Discography from '../Discography';
import Gigography from '../Gigography';
import Image from 'next/image';
import SingleRelease from '../SingleRelease';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: Anura',
  description: '',
};

export default function AnuraPage() {
  return (
    <>
      <div className="content-projects anura-container">
        <div className="header-container">
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/190310_Anura_Magick_City_unknown_05_0cef530aca.jpg"
            height={2048}
            width={2048}
            alt="photo of Anura"
          />
          <h1>Anura</h1>
        </div>
        <div className="project-content">
          <Gigography band="Anura" displayImages={false} shortList={true} />
          <div className="project-releases">
            <SingleRelease id="hy78nty4ro38zdbe3fjm8ueh" displayArtist={false}>
              <p>
                My first real album of downer pop bedroom songwriting, complete
                with all the signs of struggle that accompany such a thing.
                Still, some of these songs aren't half bad.
              </p>
            </SingleRelease>
            <SingleRelease id="ah63jy4x92r3dmyazcux2xdr" displayArtist={false}>
              The LP was released alongside two EPs...
            </SingleRelease>
            <SingleRelease id="dvtopqkkycfgu4gse3mbnl9v" displayArtist={false}>
              ...each with a couple b-sides.
            </SingleRelease>
            <SingleRelease id="t6sli9i1oz0ybulh68i1d8jz" displayArtist={false}>
              Shortly after <em>Deluge</em> came the Folds EP, a quarantine
              jammer and more of a post-rock affair. Also my first project with
              the homie Andrew Nault on drums.
            </SingleRelease>
            <SingleRelease id="nj88gcsynle0v3l1qxtxa215" displayArtist={false}>
              Contains a cover of He Can Jog's <em>Suite Part 4</em>.
            </SingleRelease>
            <h2>precursors</h2>
            <SingleRelease id="r4pnlwx4i48tyzc2blaho499" displayArtist={true}>
              This EP was the first reaching-out from noise music toward the
              songwriting style of Anura. After this EP, it would be another few
              years before I settled on the name as a project in and of itself.
            </SingleRelease>
            <SingleRelease id="a1hsosqpdf899gchps9xkv3p" displayArtist={true}>
              A 7" single of two quiet-but-noisy downer pop tunes. The first
              stayed in the live set for several years thereafter.
            </SingleRelease>
            <SingleRelease id="rnt5fctb00stqhfz5y4cszif" displayArtist={true}>
              A compilation of tunes from various releases, inching closer to
              the songwriting style of Anura.
            </SingleRelease>
            <SingleRelease id="txl896z4eh32xc8yfsowsfu6" displayArtist={true}>
              A couple tunes written and recorded for David Grollman's{' '}
              <em>5 Minute Tapes</em> series.
            </SingleRelease>
          </div>
        </div>
      </div>
    </>
  );
}
