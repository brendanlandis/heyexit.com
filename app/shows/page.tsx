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
          <h1>Gigography</h1>
        </div>
        <p className="header-text">
          Hey Exit played a pretty good number of shows over the years,
          especially given how lazy and reluctant I was about booking. I've
          collected some documents here, then distorted them into a kind of
          obscure collage, so it feels less like a questionable shrine to my own
          face, and more like an altar for the work. You can hover over things
          to see them more clearly.
        </p>
        <ShowArchive />
      </div>
    </>
  );
}
