import '../css/listen.css';
import CompleteDiscog from './CompleteDiscog';
import SelectedDiscog from './SelectedDiscog';

export default function Listen() {
  return (
    <>
      <div className="content-listen">
        <h1>Selected Discography</h1>
        <SelectedDiscog />
        <h2>Complete Discography</h2>
        <CompleteDiscog />
      </div>
    </>
  );
}
