import '../css/current.css';
import Link from 'next/link';
import Image from 'next/image';

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
        <ul className="band-list">
          <li>
            <Link href="https://glifter.bandcamp.com/">
              <Image
                src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/glifter_logo_cutup_faded_white_on_transparent_9618051f84.png"
                alt="Glifter logo"
                width={1024}
                height={1024}
              />
            </Link>
          </li>
          <li>
            <Link href="https://receive.blue/">
              <Image
                src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/receive_white_on_transparent_dd5c3a65ee.png"
                alt="Receive logo"
                width={1024}
                height={1024}
              />
            </Link>
          </li>
          <li>
            <Link href="https://starcard.bandcamp.com/">
              <Image
                src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/star_card_logo_white_on_transparent_7d6c1c6fa1.png"
                alt="Star Card logo"
                width={1024}
                height={1024}
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
