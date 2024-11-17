'use client';
import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../css/recording-detail.css';
import { Press } from '@/app/types';
import classNames from 'classnames';
import RecordingGraphics from './RecordingGraphics';
import RecordingAttachments from './RecordingAttachments';
import RecordingPromoVideos from './RecordingPromoVideos';
import RecordingIcons from './RecordingIcons';
import RecordingEditions from './RecordingEditions';
import PressTop from './PressTop';
import RecordingTracks from './RecordingTracks';
import RecordingAbout from './RecordingAbout';
import RecordingCredits from './RecordingCredits';
import PressBottom from './PressBottom';

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

  const [{ data: recordingData, loading, error }, refetch] = useAxios(`${baseUrl}?${query}`);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    refetch().catch((err) => {
      if (!axios.isCancel(err)) {
        console.error('Refetch error, girl!', err);
      }
    });
  }, []);

  if (!isMounted) return null;

  if (loading) return <p>loading release...</p>;
  if (error) return <p>error {JSON.stringify(error, null, 2)}</p>;

  const recording = recordingData?.data;

  const title = recording.alias ? `${recording.alias} - ${recording.title}` : recording.title;

  return (
    <>
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
            {recording.reviews?.some((press: Press) => press.visibility === 'highlight') && <PressTop {...recording} />}
            <RecordingTracks {...recording} />
            <RecordingAbout {...recording} />
            <RecordingCredits {...recording} />
            {recording.reviews?.some((press: Press) => press.visibility === 'deep cut') && <PressBottom {...recording} />}
          </div>
        </div>
      </div>
    </>
  );
}
