export default function RecordingPage({ params }: { params: { normalizedTitle: string } }) {
  return <p>{params.normalizedTitle}</p>;
}
