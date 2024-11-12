'use client';
import useAxios from 'axios-hooks';
import getNormalizedTitle from '@/app/components/getNormalizedTitle';
import { Recording } from '@/app/types';
import RecordingDetails from './RecordingDetails';
import { usePathname } from 'next/navigation';

export default function RecordingPage() {
  const normalizedTitle = usePathname().replace('/recordings/', '');
  const [{ data: recordings, loading, error }] = useAxios<{ data: Recording[] }>(
    'https://slownames.net/api/recordings?populate=*&filters[bands][name]=Hey%20Exit&filters[visibility][$ne]=hidden&pagination[pageSize]=100'
  );
  if (loading) return <p>loading...</p>;
  if (error) return <p>error: {error.message || "no one even knows what happened"}</p>;

  const matchingRecording = recordings?.data?.find((recording: Recording) => {
    return getNormalizedTitle(recording.title) === normalizedTitle;
  });

  if (!matchingRecording) return <p>Recording not found</p>;

  return (
    <>
      <RecordingDetails documentId={matchingRecording.documentId} />
    </>
  );
}
