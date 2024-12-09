import '../css/current.css';
import Link from 'next/link';
import Image from 'next/image';
import AllLivePics from '../components/AllLivePics';

export const metadata = {
  title: 'Hey Exit :: Current Projects',
  description: 'current projects of Brendan Landis',
};

export default function Current() {
  return (
    <>
      <div className="content-current">
        <div className="header-container">
          <h1>Current Projects</h1>
        </div>
        {/* <AllLivePics /> */}
        <ul className="band-list">
          <li>
            <Link href="https://receive.blue/">
              <div className="band-pic band-pic-receive">
                <Image
                  src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/240830_Receive_Bar_Freda_Katixa_14_316fc228aa.jpg"
                  alt="photo of Receive playing live"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="band-description">
                <Image
                  src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/receive_white_on_transparent_dd5c3a65ee.png"
                  alt="Receive logo"
                  width={1024}
                  height={1024}
                  className="band-logo band-logo-receive"
                />
                <div className="band-text">
                  <p>
                    <span className="name">Receive</span> is my main project
                    right now &mdash; a heavy art rock four-piece.
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="https://glifter.bandcamp.com/">
              <div className="band-pic band-pic-glifter">
                <Image
                  src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/231112_Glifter_Hart_Bar_unknown_15_6f44e1e3f6.jpg"
                  alt="photo of Glifter playing live"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="band-description">
                <Image
                  src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/glifter_logo_cutup_faded_white_on_transparent_9618051f84.png"
                  alt="Glifter logo"
                  width={1024}
                  height={1024}
                  className="band-logo band-logo-glifter"
                />
                <div className="band-text">
                  <p>
                    <span className="name">Glifter</span> is a songwriting duo
                    with Calley Nelson.
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="https://starcard.bandcamp.com/">
              <div className="band-pic band-pic-star-card">
                <Image
                  src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/240320_Star_Card_Bar_Freda_Katixa_05_079291cb0a.jpg"
                  alt="photo of Glifter playing live"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="band-description">
                <Image
                  src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/star_card_logo_white_on_transparent_7d6c1c6fa1.png"
                  alt="Star Card logo"
                  width={1024}
                  height={1024}
                  className="band-logo band-logo-star-card"
                />
                <div className="band-text">
                  <p>
                    <span className="name">Star Card</span> is Calley's main
                    project, an alt-rock four-piece. I get to play drums again!
                  </p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
