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

          <SingleRelease id="hy78nty4ro38zdbe3fjm8ueh">asdf</SingleRelease>
          <SingleRelease id="ah63jy4x92r3dmyazcux2xdr">
            The LP was released alongside two EPs with some additional b-sides
            on each.
          </SingleRelease>
          <SingleRelease id="dvtopqkkycfgu4gse3mbnl9v">asdf</SingleRelease>
          <SingleRelease id="t6sli9i1oz0ybulh68i1d8jz">
            Shortly thereafter came the Folds EP, more of a post-rock affair.
          </SingleRelease>
          <SingleRelease id="nj88gcsynle0v3l1qxtxa215">
            Contains a cover of He Can Jog's <em>Suite Part 4</em>.
          </SingleRelease>
          <h2>precursors</h2>
          <SingleRelease id="r4pnlwx4i48tyzc2blaho499">
            The EP that represented the first expression of this creative
            impulse.
          </SingleRelease>
          <SingleRelease id="a1hsosqpdf899gchps9xkv3p">asdf</SingleRelease>
          <SingleRelease id="rnt5fctb00stqhfz5y4cszif">asdf</SingleRelease>
          <SingleRelease id="txl896z4eh32xc8yfsowsfu6">asdf</SingleRelease>
        </div>
      </div>
    </>
  );
}
