import getNormalizedTitle from '@/app/components/getNormalizedTitle';
import RecordingDetails from './RecordingDetails';
import { format } from 'date-fns';

async function fetchRecordings() {
  const response = await fetch(
    'https://slownames.net/api/recordings?populate=bands&filters[visibility][$ne]=hidden&pagination[pageSize]=100',
    { cache: 'no-store' }
  );
  if (!response.ok) throw new Error('Failed to fetch recordings');
  const data = await response.json();
  if (!data || !data.data || data.data.length === 0) {
    throw new Error('API response is missing expected data');
  }
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ normalizedTitle: string }>;
}) {
  const resolvedParams = await params;
  const recordings = await fetchRecordings();

  const matchingRecording = recordings.data.find(
    (recording: any) =>
      getNormalizedTitle(recording.title) === resolvedParams.normalizedTitle
  );

  if (matchingRecording) {
    const bandname = matchingRecording.alias
      ? `${matchingRecording.alias}`
      : matchingRecording.bands[0].name;

    return {
      title: `Hey Exit :: Recordings :: ${matchingRecording.title}`,
      description: `${bandname}'s ${format(
        matchingRecording.releaseDate,
        'yyyy'
      )} release, ${matchingRecording.title}`,
    };
  }
  return null;
}

export default async function RecordingPage({
  params,
}: {
  params: Promise<{ normalizedTitle: string }>;
}) {
  const resolvedParams = await params;
  const recordings = await fetchRecordings();

  if (!recordings || !recordings.data) {
    return <>oh no, no recordings</>;
  }

  const matchingRecording = recordings.data.find(
    (recording: any) =>
      getNormalizedTitle(recording.title) === resolvedParams.normalizedTitle
  );

  if (!matchingRecording) {
    return <p>Recording not found</p>;
  }

  return (
    <>
      <RecordingDetails documentId={matchingRecording.documentId} />
    </>
  );
}
