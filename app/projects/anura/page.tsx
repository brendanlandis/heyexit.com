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
          <div className="project-shows">
            <h3>shows</h3>
            <Gigography band="Anura" displayImages={false} shortList={true} />
          </div>

          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="hy78nty4ro38zdbe3fjm8ueh" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Deluge</h3>
              <p>This was really the main release for this project.</p>
            </div>
          </div>

          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="ah63jy4x92r3dmyazcux2xdr" position="left" />
              <SingleRelease id="dvtopqkkycfgu4gse3mbnl9v" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Deluge EP &amp; A Clearing EP</h3>
              <p>
                The LP was released alongside two EPs with some additional
                b-sides on each.
              </p>
            </div>
          </div>

          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="t6sli9i1oz0ybulh68i1d8jz" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Folds EP</h3>
              <p>
                Shortly thereafter came the Folds EP, more of a post-rock
                affair.
              </p>
            </div>
          </div>

          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="nj88gcsynle0v3l1qxtxa215" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Audiobulb Plays He Can Jog</h3>
              <p>
                Contains a cover of He Can Jog's <em>Suite Part 4</em>.
              </p>
            </div>
          </div>

          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="r4pnlwx4i48tyzc2blaho499" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Hey Exit - Anura EP</h3>
              <p>
                The EP that represented the first expression of this creative
                impulse.
              </p>
            </div>
          </div>

          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="a1hsosqpdf899gchps9xkv3p" position="left" />
              <SingleRelease id="rnt5fctb00stqhfz5y4cszif" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Hey Exit - Holding Collapse &amp; Inhale EP</h3>
              <p>zzzzzzzzzzz</p>
            </div>
          </div>

          <div className="project-release">
            <div className="project-release-cover">
              <SingleRelease id="txl896z4eh32xc8yfsowsfu6" position="left" />
            </div>
            <div className="project-release-description">
              <h3>Hey Exit - It's All Wrong / Overstated</h3>
              <p>zzzzzzzzzzz</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
