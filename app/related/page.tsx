import '../css/related.css';
import Link from 'next/link';

export const metadata = {
  title: 'Hey Exit :: Related Projects',
  description: 'bands and projects related to Hey Exit',
};

export default function Related() {
  return (
    <>
      <div className="content-related">
        <div className="header-container">
          <h1>Related Projects</h1>
        </div>
        <p>
          kasdgf asdhlfas fahlsf asdkjf asghdfhaj kasdgf asdhlfas fahlsf asdkjf asghdfhaj kasdgf asdhlfas fahlsf asdkjf
          asghdfhaj kasdgf asdhlfas fahlsf asdkjf asghdfhaj kasdgf asdhlfas fahlsf asdkjf asghdfhaj kasdgf asdhlfas
          fahlsf asdkjf asghdfhaj kasdgf asdhlfas fahlsf asdkjf asghdfhaj kasdgf asdhlfas fahlsf asdkjf asghdfhaj kasdgf
          asdhlfas fahlsf asdkjf asghdfhaj{' '}
        </p>
        <div className="band-list-container">
          <ul className="band-list">
            <li><Link href="projects/advection">Advection</Link></li>
            <li>Anura</li>
            <li>Big Hiatus</li>
            <li>Esther Chlorine</li>
            <li>It Breaks</li>
            <li>Rough Weather</li>
            <li>Tethers</li>
          </ul>
        </div>
      </div>
    </>
  );
}
