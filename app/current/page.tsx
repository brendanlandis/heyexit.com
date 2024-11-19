import '../css/current.css';

export const metadata = {
  title: 'Hey Exit :: Current Projects',
  description: "current projects of Brendan Landis",
};

export default function Current() {
  return (
    <>
      <div className="content-current">
        <div className="header-container">
          <h1>Current Projects</h1>
        </div>
        <ul className='band-list'>
          <li>Glifter</li>
          <li>Receive</li>
          <li>Star Card</li>
        </ul>
      </div>
    </>
  );
}
