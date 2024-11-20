import ShowArchive from './ShowArchive';
import '../css/shows.css';

export const metadata = {
  title: 'Hey Exit :: Shows',
  description: "Hey Exit's gigography",
};

export default function Shows() {
  return (
    <>
      <div className="content-shows">
        <div className="header-container">
          <h1>Show Archive</h1>
        </div>
        <p>Here are some old show flyers and photos. It definitely feels a little weird to be plastering my face here, but on the other hand fuck it, this was a decade of my life.</p>
        <ShowArchive />
      </div>
    </>
  );
}
