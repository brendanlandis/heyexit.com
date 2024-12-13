import '../../css/projects.css';
import '../../css/recordings.css';
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
          <p className="project-intro">
            A downer pop, loud-but-soft songwriting project, and my entry point
            into the traditional popular forms that I've been exploring with
            bands since. Washed out vocals over drum machines, guitars, and
            synths, very bedroom'd-out.
          </p>
          <Gigography band="Anura" displayImages={false} shortList={true} />
          <div className="project-releases">
            <h2>recordings</h2>
            <SingleRelease id="hy78nty4ro38zdbe3fjm8ueh" displayArtist={false}>
              <p>
                My first real songwriting album, complete with all the signs of
                struggle that accompany such a thing. Still, some of these songs
                aren't half bad.
              </p>
            </SingleRelease>
            <SingleRelease id="ah63jy4x92r3dmyazcux2xdr" displayArtist={false}>
              <p>The LP was released alongside two EPs...</p>
            </SingleRelease>
            <SingleRelease id="dvtopqkkycfgu4gse3mbnl9v" displayArtist={false}>
              <p>...each with a couple b-sides.</p>
            </SingleRelease>
            <SingleRelease id="t6sli9i1oz0ybulh68i1d8jz" displayArtist={false}>
              <p>
                Shortly after <em>Deluge</em> came the <em>Folds EP</em>, a
                quarantine jammer and more of a post-rock affair. Also my first
                project with the homie Andrew Nault on drums.
              </p>
            </SingleRelease>
            <SingleRelease id="nj88gcsynle0v3l1qxtxa215" displayArtist={false}>
              <p>
                Contains a cover of He Can Jog's <em>Suite Part 4</em>.
              </p>
            </SingleRelease>
            <h2>precursors</h2>
            <SingleRelease id="r4pnlwx4i48tyzc2blaho499" displayArtist={true}>
              <p>
                This EP was the first reaching-out from noise music toward the
                songwriting style of <strong>Anura</strong>. After this EP, it
                would be another few years before I settled on the name as a
                project in and of itself.
              </p>
            </SingleRelease>
            <SingleRelease id="a1hsosqpdf899gchps9xkv3p" displayArtist={true}>
              <p>
                A 7" single of two quiet-but-noisy downer pop tunes. The first
                stayed in the live set for several years thereafter.
              </p>
            </SingleRelease>
            <SingleRelease id="rnt5fctb00stqhfz5y4cszif" displayArtist={true}>
              <p>
                A compilation of tunes from various releases, inching closer to
                the songwriting style of <strong>Anura</strong>.
              </p>
            </SingleRelease>
            <SingleRelease id="txl896z4eh32xc8yfsowsfu6" displayArtist={true}>
              <p>
                A couple tunes written and recorded for David Grollman's{' '}
                <em>5 Minute Tapes</em> series.
              </p>
            </SingleRelease>
          </div>
        </div>
      </div>
    </>
  );
}
