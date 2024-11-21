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
          Hey Exit played a lot of shows over the years. I've collected a lot of
          photos and flyers here, and while it definitely feels weird to see my
          face plastered all over this page, on the other hand fuck it &mdash;
          this project was over a decade of my life.
        </p>
        <ShowArchive />
      </div>
    </>
  );
}
