'use client';
import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { Media, Attachment, Track, Edition, VideoEmbed, Press } from '@/app/types';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

export default function RecordingDetails({ documentId }: { documentId: string }) {
  const [{ data: recordingData, loading, error }, refetch] = useAxios(
    `https://slownames.net/api/recordings/${documentId}?pLevel`
  );

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

  if (loading) return <p>loading media...</p>;
  if (error) return <p>error {JSON.stringify(error, null, 2)}</p>;

  const recording = recordingData?.data;

  return (
    <>
      <p>id: {recording.id}</p>
      <p>documentId: {recording.documentId}</p>
      <p>band: {recording.bands[0].name}</p>
      <p>alias: {recording.alias}</p>
      <p>title: {recording.title}</p>
      <p>release date: {recording.releaseDate}</p>
      <p>type: {recording.type}</p>
      <p>visibility: {recording.visibility}</p>
      <div>
        cover:
        {recording.cover?.map((cover: Media, index: number) => (
          <div key={cover.id || index}>
            <Link href={cover.url}>
              <Image src={cover.url} alt={`cover art for ${recording.title}`} width={750} height={750} />
            </Link>
            <p>alt: {cover.alternativeText}</p>
            <p>caption: {cover.caption}</p>
          </div>
        ))}
      </div>
      <div>
        liner notes:
        {recording.linerNotes?.map((note: Media, index: number) => (
          <div key={note.id || index}>
            <Link href={note.url}>
              <Image src={note.url} alt={recording.title} width={750} height={750} />
            </Link>
            <p>alt: {note.alternativeText}</p>
            <p>caption: {note.caption}</p>
          </div>
        ))}
      </div>
      <p>bandcamp URL: {recording.bandcampURL}</p>
      <p>bandcamp embed ID: {recording.bandcampEmbedID}</p>
      <p>bandcamp album or track: {recording.bandcampAlbumOrTrack}</p>
      <p>spotify URL: {recording.spotifyURL}</p>
      <div>
        about:
        <BlocksRenderer content={recording.about} />
      </div>
      <div>
        credits:
        <BlocksRenderer content={recording.credits} />
      </div>
      <div>
        attachments:
        {recording.attachments?.map((attachment: Attachment, index: number) => (
          <div key={attachment.id || index}>
            <p>id: {attachment.id}</p>
            <p>file id: {attachment.file.id}</p>
            <p>file name: {attachment.file.name}</p>
            <p>file document Id: {attachment.file.documentId}</p>
            <p>file alt text: {attachment.file.alternativeText}</p>
            <p>file caption: {attachment.file.caption}</p>
            <p>file mime: {attachment.file.mime}</p>
            <p>file url: {attachment.file.url}</p>
            <p>file size: {attachment.file.size}</p>
            <p>file width: {attachment.file.width}</p>
            <p>file height: {attachment.file.height}</p>
          </div>
        ))}
      </div>
      <div>
        tracklist:
        <ul>
          {recording.tracklist.map((track: Track, index: number) => (
            <li key={index}>
              {track.id} / {track.title} / {track.note} / {track.length}
            </li>
          ))}
        </ul>
      </div>
      <div>
        editions:
        {recording.editions.map((edition: Edition, index: number) => (
          <div key={index}>
            <p>id: {edition.id}</p>
            <p>label: {edition.label}</p>
            <p>catalog number: {edition.catalogNumber}</p>
            {/* <p>release date: {edition.releaseDate}</p> */}
            <p>online only: {edition.onlineOnly}</p>
            <p>sold out: {edition.soldOut}</p>
            <p>link: {edition.link}</p>
            <p>printed cassettes: {edition.printedCassettes}</p>
            <p>printed records: {edition.printedRecords}</p>
            <p>printed CDs: {edition.printedCDs}</p>
            <p>printed objects: {edition.printedObjects}</p>
            <p>object description: {edition.objectDescription}</p>
            <div>
              photos:
              {edition.photos?.map((photo: Media, index: number) => (
                <div key={photo.id || index}>
                  <Link href={photo.url}>
                    <Image src={photo.url} alt={recording.title} width={750} height={750} />
                  </Link>
                  <p>alt: {photo.alternativeText}</p>
                  <p>caption: {photo.caption}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        promo videos:
        {recording.promoVideos?.map((video: VideoEmbed, index: number) => (
          <>
            <p>id: {video.id}</p>
            <p>name: {video.name}</p>
            <p>file id: {video.file.id}</p>
            <p>file alt text: {video.file.alternativeText}</p>
            <p>file caption: {video.file.caption}</p>
            <p>file url: {video.file.url}</p>
            <p>videoID: {video.videoID}</p>
            <p>videoHost: {video.videoHost}</p>
            <p>credit: {video.credit}</p>
            <p>visibility: {video.visibility}</p>
          </>
        ))}
      </div>
      <div>
        press:
        {recording.reviews?.map((press: Press, index: number) => (
          <div key={press.id}>
            <p>id: {press.id}</p>
            {/* <p>date: {press.date}</p> */}
            <p>publication: {press.publication}</p>
            <p>type: {press.type}</p>
            <p>visibility: {press.visibility}</p>
            <p>URL: {press.URL}</p>
            <p>quote: {press.quote}</p>
            <div>
              fullText:
              <BlocksRenderer content={press.fullText} />
            </div>
            <div>
              review attachments:
              {press.attachments?.map((attachment: Media, index: number) => (
                <div key={attachment.id || index}>
                  <Link href={attachment.url}>
                    <Image src={attachment.url} alt={`cover art for ${recording.title}`} width={750} height={750} />
                  </Link>
                  <p>alt: {attachment.alternativeText}</p>
                  <p>caption: {attachment.caption}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
