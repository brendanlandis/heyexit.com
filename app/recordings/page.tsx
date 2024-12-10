import '../css/recordings.css';
import CompleteDiscog from './CompleteDiscog';
import SelectedDiscog from './SelectedDiscog';

export const metadata = {
  title: 'Hey Exit :: Recordings',
  description: "Hey Exit's discography",
};

export default function Recordings() {
  return (
    <>
      <div className="content-listen">
        <div className="header-container">
          <h1>Selected Discography</h1>
        </div>
        <p className="header-text">
          Hey Exit made a <em>lot</em> of music over the years. These albums are
          a few good starting points.
        </p>
        <p className="header-text">
          (Many of these recordings work best when heard as a complete album
          from start to finish. Listening on random or in a playlist will mostly
          sound frustrating and unpleasant, or will simply pass you by like
          nothing at all &mdash; which is fine I guess, but then why bother?)
        </p>
        <SelectedDiscog />
        <div className="header-container">
          <h2>Complete Discography</h2>
        </div>
        <p className="header-text">
          For a more extensive listen, here's the entire catalog of forty-plus
          releases, from 2010-2021. Deep listening yields deep results.
        </p>
        <CompleteDiscog />
      </div>
    </>
  );
}
