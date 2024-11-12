'use client';
import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function RecordingDetails({ documentId }: { documentId: string }) {
  const [{ data: recording, loading, error }, refetch] = useAxios(
    `https://slownames.net/api/recordings/${documentId}?populate=*`
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

  return (
    <>
      <p>id: {recording.data.id}</p>
      <p>band: {recording.data.bands[0].name}</p>
    </>
  );
}
