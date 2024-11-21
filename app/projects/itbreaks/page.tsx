import '../../css/projects.css';
import '../../css/recordings.css';
import Link from 'next/link';
import Discography from '../Discography';
import Gigography from '../Gigography';

export const metadata = {
  title: 'Hey Exit :: Related Projects :: It Breaks',
  description: '',
};

export default function ItBreaksPage() {
  return (
    <>
      <div className="content-projects">
        <div className="header-container">
          <h1>It Breaks</h1>
        </div>
        <p></p>
        <div className="itbreaks-container">
          <Discography band="It Breaks" />
          <Gigography band="It Breaks" />
        </div>
      </div>
    </>
  );
}
