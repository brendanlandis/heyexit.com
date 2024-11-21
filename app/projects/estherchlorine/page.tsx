import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
import Discography from '../Discography';
import Gigography from '../Gigography';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: Esther Chlorine',
  description: '',
};

export default function EstherChlorinePage() {
  return (
    <>
      <div className="content-projects">
        <div className="header-container">
          <h1>Esther Chlorine</h1>
        </div>
        <div className="estherchlorine-container">
          <Discography band="Esther Chlorine" />
          <Gigography band="Esther Chlorine" />
        </div>
      </div>
    </>
  );
}
