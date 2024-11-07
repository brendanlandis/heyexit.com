import './css/home.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1>across wide streams</h1>
      <div className="selectedPress">
        <Image
          src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/160116_empty_lot_Katya_Ekimoto_01_2c504069e7.jpg"
          alt="photo of Brendan Landis"
          width={700}
          height={100}
          className="headerPhoto"
          priority
        />
        <ul className='pressList'>
          <li>
            
          </li>
        </ul>
      </div>
    </>
  );
}
