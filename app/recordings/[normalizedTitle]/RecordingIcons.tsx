import { Recording } from '@/app/types';
import Link from 'next/link';
import { FaBandcamp, FaSpotify } from 'react-icons/fa';

export default function RecordingIcons(recording: Recording) {
  return (
    <div className="recording-icons">
      {recording.bandcampURL ? (
        <Link href={recording.bandcampURL}>
          <FaBandcamp />
        </Link>
      ) : (
        ''
      )}
      {recording.spotifyURL ? (
        <Link href={recording.spotifyURL}>
          <FaSpotify />
        </Link>
      ) : (
        ''
      )}
    </div>
  );
}
