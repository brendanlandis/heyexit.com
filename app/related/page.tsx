import '../css/related.css';

export const metadata = {
  title: 'Hey Exit :: Related Projects',
  description: "bands and projects related to Hey Exit",
};

export default function Related() {
  return (
    <>
      <div className="content-related">
        <div className="header-container">
          <h1>Related Projects</h1>
        </div>
        <ul className='band-list'>
          <li>Advection</li>
          <li>Anura</li>
          <li>Big Hiatus</li>
          <li>Esther Chlorine</li>
          <li>It Breaks</li>
          <li>Rough Weather</li>
          <li>Tethers</li>
        </ul>
      </div>
    </>
  );
}
