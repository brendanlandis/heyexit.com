'use client';
import useAxios from 'axios-hooks';
import '../../css/recording-detail.css';
import { Press } from '@/app/types';
import classNames from 'classnames';
import RecordingGraphics from './RecordingGraphics';
import RecordingAttachments from './RecordingAttachments';
import RecordingPromoVideos from './RecordingPromoVideos';
import RecordingIcons from './RecordingIcons';
import RecordingEditions from './RecordingEditions';
import RecordingTracks from './RecordingTracks';
import RecordingAbout from './RecordingAbout';
import RecordingCredits from './RecordingCredits';
import RecordingPress from './RecordingPress';

export default function RecordingDetails({ documentId }: { documentId: string }) {
  const baseUrl = `https://slownames.net/api/recordings/${documentId}`;
  const query = [
    `populate[0]=editions`,
    `populate[1]=editions.photos`,
    `populate[2]=tracklist`,
    `populate[3]=cover`,
    `populate[4]=linerNotes`,
    `populate[5]=attachments`,
    `populate[6]=attachments.file`,
    `populate[7]=promoVideos`,
    `populate[8]=promoVideos.file`,
    `populate[9]=reviews`,
    `populate[10]=reviews.attachments`,
  ].join('&');

  const [{ data: recordingData, loading, error }] = useAxios(`${baseUrl}?${query}`);

  if (loading) return <p>Loading release...</p>;
  if (error) return <p>Error: {JSON.stringify(error, null, 2)}</p>;

  const recording = recordingData?.data;

  const title = recording.alias ? `${recording.alias} - ${recording.title}` : recording.title;

  return (
    <div className="content-recording-details">
      <div className="header-container">
        <h1
          className={classNames({
            [`letters-${title.length}`]: true,
            [`words-${title.split(/\s+/).length}`]: true,
          })}
        >
          {title}
        </h1>
      </div>
      <div className="recording-detail">
        <div className="recording-detail-column">
          <RecordingGraphics {...recording} />
          {recording.attachments.length ? <RecordingAttachments {...recording} /> : ''}
          {recording.promoVideos.length ? <RecordingPromoVideos {...recording} /> : ''}
        </div>
        <div className="recording-detail-column">
          <RecordingEditions {...recording} />
          <RecordingIcons {...recording} />
          {recording.reviews?.some((press: Press) => press.visibility != 'hidden') && <RecordingPress {...recording} />}
          <RecordingTracks {...recording} />
          <RecordingAbout {...recording} />
          <RecordingCredits {...recording} />
        </div>
      </div>
    </div>
  );
}
