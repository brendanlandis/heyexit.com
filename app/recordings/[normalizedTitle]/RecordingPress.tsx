import { Recording, Press } from '@/app/types';
import PressItem from './RecordingPressItem';

function filterAndShufflePress(reviews: Press[], visibility: string): Press[] {
  const filtered = reviews.filter((press) => press.visibility === visibility);
  return filtered.sort(() => Math.random() - 0.5);
}

export default function RecordingPress(recording: Recording) {
  const highlightPress = filterAndShufflePress(recording.reviews, 'highlight');
  const deepCutPress = filterAndShufflePress(recording.reviews, 'deep cut');
  const allPress = [...highlightPress, ...deepCutPress];

  return (
    <ul className={`recording-press articles-${allPress.length}`}>
      {allPress.map((press, index) => (
        <li key={index}>
          <PressItem press={press} />
        </li>
      ))}
    </ul>
  );
}
