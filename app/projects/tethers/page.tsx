import '../../css/projects.css';
import Link from 'next/link';
import Discography from '../Discography';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: Tethers',
  description: '',
};

export default function TethersPage() {
  return (
    <>
      <div className="content-projects">
        <div className="header-container">
          <h1>Tethers</h1>
        </div>
        <p></p>
        <div className="tethers-container">
          <Discography band="tethers" />
        </div>
      </div>
    </>
  );
}
