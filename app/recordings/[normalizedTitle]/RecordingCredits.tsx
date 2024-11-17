import { Recording } from '@/app/types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function RecordingCredits(recording: Recording) {
  const hasContent =
    Array.isArray(recording.credits) &&
    recording.credits.some((block) => {
      if (!block || !Array.isArray(block.children)) return false;
      return block.children.some((child) => {
        if (!('text' in child) || typeof child.text !== 'string') return false;
        const cleanedText = child.text.replace(/<br\s*\/?>/g, '').trim();
        return cleanedText.length > 0;
      });
    });
  return (
    <>
      {hasContent ? (
        <div className="recording-credits">
          <div className="header-container">
            <h2>credits</h2>
          </div>
          <BlocksRenderer content={recording.credits} />
        </div>
      ) : null}
    </>
  );
}
