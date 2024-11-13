import { Recording } from '@/app/types';
import Link from 'next/link';
import { FaBandcamp, FaSpotify } from 'react-icons/fa';

export default function RecordingIcons(recording: Recording) {
  return (
    <div className="icons">
      <Link href={recording.bandcampURL}>
        <FaBandcamp />
      </Link>
      <Link href={recording.spotifyURL}>
        <FaSpotify />
      </Link>
    </div>
  );
}
