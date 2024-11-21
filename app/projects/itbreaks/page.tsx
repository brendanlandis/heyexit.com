import '../../css/projects.css';
import Link from 'next/link';
import Discography from '../Discography';

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
          <Discography band="it breaks" />
        </div>
      </div>
    </>
  );
}
