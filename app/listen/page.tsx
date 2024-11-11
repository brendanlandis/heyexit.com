import '../css/listen.css';
import CompleteDiscog from './CompleteDiscog';
import SelectedDiscog from './SelectedDiscog';

export default function Listen() {
  return (
    <>
      <div className="content-listen">
        <div className="header-container">
          <h1>Selected Discography</h1>
        </div>
        <SelectedDiscog />
        <div className="header-container">
          <h2>Complete Discography</h2>
        </div>
        <CompleteDiscog />
      </div>
    </>
  );
}
