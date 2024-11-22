import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
import Discography from '../Discography';
import Gigography from '../Gigography';
import Image from 'next/image';
import SingleRelease from '../SingleRelease';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: Rough Weather',
  description: '',
};

export default function RoughWeatherPage() {
  return (
    <>
      <div className="content-projects roughweather-container">
        <div className="header-container">
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/110407_Rough_Weather_La_Paloma_Coffee_House_unknown_03_985188befd.jpg"
            height={2048}
            width={2048}
            alt="photo of Big Hiatus"
          />
          <h1>Rough Weather</h1>
        </div>
        <div className="project-content">
          <p>
            Some pretty rough weather wouldn't you say Some pretty rough weather
            wouldn't you say Some pretty rough weather wouldn't you say Some
            pretty rough weather wouldn't you say Some pretty rough weather
            wouldn't you say Some pretty rough weather wouldn't you say Some
            pretty rough weather wouldn't you say Some pretty rough weather
            wouldn't you say
          </p>
          <Gigography
            band="Rough Weather"
            displayImages={false}
            shortList={true}
          />
          <SingleRelease id="spc4uk5ka4pwm37kizm9c1lc" position="left" />
        </div>
      </div>
    </>
  );
}
