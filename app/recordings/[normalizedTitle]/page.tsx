import axios from 'axios';
import { RecordingSummary } from '@/app/types';

export default async function RecordingPage({ params }: { params: { normalizedTitle: string } }) {
  // Fetch all recordings ugh
  const response = await axios.get('https://slownames.net/api/recordings?filters[bands][name]=Hey%20Exit&pagination[pageSize]=100');
  const recordings = response.data.data;

  // Find the recording that matches `normalizedTitle`
  const recording = recordings.find((rec: RecordingSummary) => {
    const currentTitle = rec.title
    .normalize('NFD') // Normalize accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritic marks
    .toLowerCase() // Convert to lowercase
    .replace(/[^\w\s]/g, '') // Remove non-alphanumeric characters
    .replace(/\s+/g, '-') // Convert spaces to dashes
    .replace(/-?reknowing.*$/, '') // Remove "reknowing" from some URLs
    .replace(/-?a\-luvsound.*$/, ''); // Shorten long title "Soothing Sounds for Baby"

    return currentTitle === params.normalizedTitle;
  });

  if (!recording) {
    return <p>Recording not found.</p>;
  }

  return (
    <pre>
      {JSON.stringify(recording, null, 2)}
    </pre>
  );
}
