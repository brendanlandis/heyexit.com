import '../../css/projects.css';
import Link from 'next/link';
import Discography from '../Discography';

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
        <p></p>
        <div className="estherchlorine-container">
          <Discography band="esther chlorine" />
        </div>
      </div>
    </>
  );
}
