import { Recording } from '@/app/types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function RecordingAbout(recording: Recording) {
  return (
    <div className="recording-about">{recording.about ? <BlocksRenderer content={recording.about} /> : <></>}</div>
  );
}
