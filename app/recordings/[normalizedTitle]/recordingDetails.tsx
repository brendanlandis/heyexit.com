'use client';
import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../css/recordingDetail.css';
import Link from 'next/link';
import { Press } from '@/app/types';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import classNames from 'classnames';
import RecordingGraphics from './RecordingGraphics';
import RecordingAttachments from './RecordingAttachments';
import RecordingPromoVideos from './RecordingPromoVideos';
import RecordingIcons from './RecordingIcons';
import RecordingEditions from './RecordingEditions';
import TopPress from './TopPress';
import Tracks from './Tracks';

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
      <div className="content-recordingDetails">
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
        <div className="recordingDetail">
          <div className="recordingDetail-column">
            <RecordingGraphics {...recording} />
            {recording.attachments.length ? <RecordingAttachments {...recording} /> : ''}
            {recording.promoVideos.length ? <RecordingPromoVideos {...recording} /> : ''}
          </div>
          <div className="recordingDetail-column">
            <RecordingEditions {...recording} />
            <RecordingIcons {...recording} />
            {recording.reviews?.some((press: Press) => press.visibility === 'highlight') && <TopPress {...recording} />}
            <Tracks {...recording} />
            <div className="about">{recording.about ? <BlocksRenderer content={recording.about} /> : <></>}</div>
            <div>
              credits:
              {recording.credits ? <BlocksRenderer content={recording.credits} /> : <></>}
            </div>
            <div className="press">
              {recording.reviews &&
              recording.reviews.some((press: Press) => press.visibility === 'deep cut') &&
              recording.reviews.some((press: Press) => press.visibility === 'highlight') ? (
                <div className="header-container">
                  <h2>additional press for {title}</h2>
                </div>
              ) : (
                recording.reviews?.some((press: Press) => press.visibility === 'deep cut') && (
                  <div className="header-container">
                    <h2>press for {title}</h2>
                  </div>
                )
              )}
              {recording.reviews
                ?.filter((press: Press) => press.visibility === 'deep cut')
                .map((press: Press, index: number) => (
                  <div key={press.id}>
                    <p>"{press.quote}"</p>
                    <p>
                      &mdash;<Link href={press.URL ? press.URL : press.attachments?.[0]?.url}>{press.publication}</Link>
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
