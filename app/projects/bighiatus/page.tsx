import '../../css/projects.css';
import Link from 'next/link';
import Discography from '../Discography';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: Big Hiatus',
  description: '',
};

export default function BigHiatusPage() {
  return (
    <>
      <div className="content-projects">
        <div className="header-container">
          <h1>Big Hiatus</h1>
        </div>
        <p></p>
        <div className="bighiatus-container">
          <Discography band="big hiatus" />
        </div>
      </div>
    </>
  );
}
