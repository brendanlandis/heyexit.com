import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
import Discography from '../Discography';
import Gigography from '../Gigography';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: Anura',
  description: '',
};

export default function AnuraPage() {
  return (
    <>
      <div className="content-projects">
        <div className="header-container">
          <h1>Anura</h1>
        </div>
        <div className="anura-container">
          <Discography band="Anura" />
          <Gigography band="Anura" />
        </div>
      </div>
    </>
  );
}
