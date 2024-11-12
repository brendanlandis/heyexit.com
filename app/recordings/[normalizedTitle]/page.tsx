import axios from 'axios';
import getNormalizedTitle from '@/app/components/getNormalizedTitle';
import { RecordingSummary } from '@/app/types';
import RecordingDetails from './RecordingDetails';

export default async function RecordingPage({ params }: { params: { normalizedTitle: string } }) {
  try {
    // fetch all recordings
    const response = await axios.get(
      'https://slownames.net/api/recordings?populate=*&filters[bands][name]=Hey%20Exit&filters[visibility][$ne]=hidden&pagination[pageSize]=100'
    );
    const recordings: RecordingSummary[] = response.data.data;

    // find the one that matches
    const matchingRecording = recordings.find((recording) => {
      return getNormalizedTitle(recording.title) === params.normalizedTitle;
    });

    if (!matchingRecording) {
      return <p>recording not found</p>;
    }

    // anyway, display it
    return (
      <>
        <RecordingDetails documentId={matchingRecording.documentId} />
      </>
    );
  } catch (error: any) {
    return <p>error: {error.message}</p>;
  }
}
