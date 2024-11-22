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
          <p>
            Anura was active from about 2018 - 2021.
          </p>
          <Gigography band="Anura" displayImages={false} shortList={true} />
          <SingleRelease id="nj88gcsynle0v3l1qxtxa215" position="left" />
          <SingleRelease id="ah63jy4x92r3dmyazcux2xdr" position="left" />
          <SingleRelease id="t6sli9i1oz0ybulh68i1d8jz" position="left" />
          <SingleRelease id="hy78nty4ro38zdbe3fjm8ueh" position="left" />
          <SingleRelease id="dvtopqkkycfgu4gse3mbnl9v" position="left" />
          <SingleRelease id="r4pnlwx4i48tyzc2blaho499" position="left" />
          <SingleRelease id="a1hsosqpdf899gchps9xkv3p" position="left" />
          <SingleRelease id="rnt5fctb00stqhfz5y4cszif" position="left" />
          <SingleRelease id="txl896z4eh32xc8yfsowsfu6" position="left" />
        </div>
      </div>
    </>
  );
}
