import '../../css/projects.css';
import Link from 'next/link';
import Discography from '../Discography';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: Rough Weather',
  description: '',
};

export default function RoughWeatherPage() {
  return (
    <>
      <div className="content-projects">
        <div className="header-container">
          <h1>Rough Weather</h1>
        </div>
        <p></p>
        <div className="roughweather-container">
          <Discography band="rough weather" />
        </div>
      </div>
    </>
  );
}
