import '../../css/projects.css';
import Link from 'next/link';
import Discography from '../Discography';

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
        <p></p>
        <div className="anura-container">
          <Discography band="anura" />
        </div>
      </div>
    </>
  );
}
