import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
import Discography from '../Discography';
import Gigography from '../Gigography';

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
        <div className="tethers-container">
          <Discography band="Tethers" />
          <Gigography band="Tethers" />
        </div>
      </div>
    </>
  );
}
