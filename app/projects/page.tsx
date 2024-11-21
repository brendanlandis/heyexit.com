import '../css/projects.css';
import Link from 'next/link';

export const metadata = {
  title: 'Hey Exit :: Related Projects',
  description: 'bands and projects related to Hey Exit',
};

export default function Projects() {
  return (
    <>
      <div className="content-projects">
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
            <li><Link href="projects/anura">Anura</Link></li>
            <li><Link href="projects/bighiatus">Big Hiatus</Link></li>
            <li><Link href="projects/estherchlorine">Esther Chlorine</Link></li>
            <li><Link href="projects/itbreaks">It Breaks</Link></li>
            <li><Link href="projects/roughweather">Rough Weather</Link></li>
            <li><Link href="projects/tethers">Tethers</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
