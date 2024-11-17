import { Recording } from '@/app/types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function RecordingCredits(recording: Recording) {
  return (
    <div className="recording-credits">
      <div className="header-container">
        <h2>credits</h2>
      </div>
      {recording.credits ? <BlocksRenderer content={recording.credits} /> : <></>}
    </div>
  );
}
