import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
import Discography from '../Discography';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: Advection',
  description: 'electronic music',
};

export default function AdvectionPage() {
  return (
    <>
      <div className="content-projects">
        <div className="header-container">
          <h1>Advection</h1>
        </div>
        <p>Advection was more of a dumping ground for electronic music than an intentional project in and of itself.</p>
        <div className="advection-container">
          <Discography band="Advection" />
        </div>
      </div>
    </>
  );
}
