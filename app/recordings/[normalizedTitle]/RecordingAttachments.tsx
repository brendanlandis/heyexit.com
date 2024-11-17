import { Recording, Attachment } from '@/app/types';
import Link from 'next/link';

export default function RecordingAttachments(recording: Recording) {
  return (
    <>
      <div className="recording-attachments">
        {recording.attachments?.map((attachment: Attachment, index: number) => {
          const mimeSubType = attachment.file?.mime.split('/')[1] || attachment.file?.mime;
          let sizeDisplay = 'N/A';
          if (attachment.file?.size) {
            sizeDisplay =
              attachment.file.size < 1024
                ? `${Math.round(attachment.file.size)}kb`
                : `${(attachment.file.size / 1024).toFixed(1)}mb`;
          }

          return (
            <div key={attachment.id || index}>
              <Link href={attachment.file?.url}>
                {attachment.linkText} ({sizeDisplay} {mimeSubType})
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
