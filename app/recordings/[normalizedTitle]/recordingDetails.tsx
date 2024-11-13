'use client';
import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../css/recordingDetail.css';
import Link from 'next/link';
import Image from 'next/image';
import { Recording, Media, Attachment, Track, Edition, VideoEmbed, Press } from '@/app/types';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import { format } from 'date-fns';
import classNames from 'classnames';
import { FaBandcamp, FaSpotify } from 'react-icons/fa';
import RecordingGraphics from './RecordingGraphics';
import { Fragment } from 'react';
import RecordingAttachments from './RecordingAttachments';

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
  const bandcampEmbedHeight = 145 + 35 * (recording.tracklist.length || 0);

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
            <div>
              promo videos:
              {recording.promoVideos?.map((video: VideoEmbed, index: number) => (
                <Fragment key={index}>
                  <p>id: {video.id}</p>
                  <p>name: {video.name}</p>
                  <p>file id: {video.file?.id}</p>
                  <p>file alt text: {video.file?.alternativeText}</p>
                  <p>file caption: {video.file?.caption}</p>
                  <p>file url: {video.file?.url}</p>
                  <p>videoID: {video.videoID}</p>
                  <p>videoHost: {video.videoHost}</p>
                  <p>credit: {video.credit}</p>
                  <p>visibility: {video.visibility}</p>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="recordingDetail-column">
            <div className="recording-stats">
              <div className="icons">
                <Link href={recording.bandcampURL}>
                  <FaBandcamp />
                </Link>
                <Link href={recording.spotifyURL}>
                  <FaSpotify />
                </Link>
              </div>
              <div>
                {recording.editions.map((edition: Edition, index: number) => (
                  <div key={index} className="edition">
                    {edition.link ? (
                      <Link href={edition.link}>{`${edition.label} (${format(edition.releaseDate, 'yyyy')})`}</Link>
                    ) : (
                      `${edition.label} (${format(edition.releaseDate, 'yyyy')})`
                    )}
                    {', '}
                    {edition.onlineOnly ? 'streaming' : ''}
                    {edition.printedCassettes ? `${edition.printedCassettes} cassettes` : ''}
                    {edition.printedRecords ? `${edition.printedRecords} records` : ''}
                    {edition.printedCDs ? `${edition.printedCDs} CDs` : ''}
                    {edition.printedObjects ? `${edition.printedObjects} ${edition.objectDescription}` : ''}
                  </div>
                ))}
              </div>
            </div>
            {recording.reviews?.some((press: Press) => press.visibility === 'highlight') && (
              <>
                <hr />
                <div className="press">
                  {recording.reviews
                    ?.filter((press: Press) => press.visibility === 'highlight')
                    .map((press: Press, index: number) => (
                      <div key={press.id}>
                        <p>"{press.quote}"</p>
                        <p>
                          &mdash;
                          <Link href={press.URL ? press.URL : press.attachments?.[0]?.url}>{press.publication}</Link>
                        </p>
                      </div>
                    ))}
                </div>
                <hr />
              </>
            )}
            {recording.bandcampEmbedID ? (
              <iframe
                src={`https://bandcamp.com/EmbeddedPlayer/${recording.bandcampAlbumOrTrack}=${recording.bandcampEmbedID}/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/`}
                seamless
                style={{ minHeight: bandcampEmbedHeight }}
              ></iframe>
            ) : (
              <ol className="release-tracklist">
                {recording.tracklist.map((track: Track) => (
                  <li key={track.id}>
                    {track.title} {track.note ? <span>{`(${track.note})`}</span> : ''}
                    {track.length}
                  </li>
                ))}
              </ol>
            )}
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
