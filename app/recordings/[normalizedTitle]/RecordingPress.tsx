import { Recording, Press } from '@/app/types';
import PressItem from './RecordingPressItem';
import { RxCaretDown } from 'react-icons/rx';

function filterAndShufflePress(reviews: Press[], visibility: string): Press[] {
  const filtered = reviews.filter((press) => press.visibility === visibility);
  return filtered.sort(() => Math.random() - 0.5);
}

export default function RecordingPress(recording: Recording) {
  const highlightPress = filterAndShufflePress(recording.reviews, 'highlight');
  const deepCutPress = filterAndShufflePress(recording.reviews, 'deep cut');
  const allPress = [...highlightPress, ...deepCutPress];

  const getClassForIndex = (index: number) => (index % 2 === 0 ? 'even' : 'odd');

  return (
    <div className={`recording-press articles-${allPress.length}`}>
      {allPress.length <= 3 ? (
        <ul>
          {allPress.map((press, index) => (
            <li key={index} className={getClassForIndex(index)}>
              <PressItem press={press} />
            </li>
          ))}
        </ul>
      ) : (
        <>
          <ul>
            {allPress.slice(0, 2).map((press, index) => (
              <li key={`first-${index}`} className={getClassForIndex(index)}>
                <PressItem press={press} />
              </li>
            ))}
          </ul>
          <div className="collapse">
            <input type="checkbox" id="moreReviews" />
            <label htmlFor="moreReviews" className="more-reviews collapse-title">
              <div className="more-reviews-button">
                More press for {recording.title}
                <RxCaretDown />
              </div>
            </label>
            <ul className="collapse-content">
              {allPress.slice(2).map((press, index) => (
                <li key={`second-${index}`} className={getClassForIndex(index + 2)}>
                  <PressItem press={press} />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
