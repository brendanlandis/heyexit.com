import { Recording } from '@/app/types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function RecordingAbout(recording: Recording) {
  const hasContent =
    Array.isArray(recording.about) &&
    recording.about.some((block) => {
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
        <div className="recording-about">
          <BlocksRenderer content={recording.about} />
        </div>
      ) : null}
    </>
  );
}
