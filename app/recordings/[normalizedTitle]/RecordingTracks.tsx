import { Recording, Press, Track } from '@/app/types';

export default function RecordingTracks(recording: Recording) {
  const bandcampEmbedHeight = 145 + 35 * (recording.tracklist.length || 0);
  return (
    <>
      {recording.bandcampEmbedID ? (
        <iframe
          src={`https://bandcamp.com/EmbeddedPlayer/${recording.bandcampAlbumOrTrack}=${recording.bandcampEmbedID}/size=large/bgcol=ffffff/linkcol=000000/artwork=none/transparent=true/`}
          seamless
          className='recording-embed'
          style={{ minHeight: bandcampEmbedHeight }}
        ></iframe>
      ) : (
        <ol className="recording-tracklist">
          {recording.tracklist.map((track: Track) => (
            <li key={track.id}>
              {track.title} {track.note ? <span>{`(${track.note})`}</span> : ''}
              {track.length}
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
