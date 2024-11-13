import { Recording, Attachment } from '@/app/types';
import Link from 'next/link';

export default function RecordingAttachments(recording: Recording) {
  return (
    <>
      <div className="recordingAttachments">
        {recording.attachments?.map((attachment: Attachment, index: number) => {
          const mimeSubType = attachment.file?.mime.split('/')[1] || attachment.file?.mime;

          const sizeInMB = attachment.file?.size ? (attachment.file.size / 1024).toFixed(1) : 'N/A';

          return (
            <div key={attachment.id || index}>
              <Link href={attachment.file?.url}>
                {attachment.linkText} ({sizeInMB}mb {mimeSubType})
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
