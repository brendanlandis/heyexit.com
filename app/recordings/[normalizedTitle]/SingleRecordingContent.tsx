'use client'
import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SingleRecordingContent({ documentId }: { documentId: string }) {
  const [{ data: recording, loading, error }, refetch] = useAxios(
    `https://slownames.net/api/recordings/${documentId}?populate=*`
  );

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    refetch().catch((err) => {
      if (!axios.isCancel(err)) {
        console.error("Refetch error, girl!", err);
      }
    });
  }, []);

  if (!isMounted) return null;

  if (loading) return <p>loading recording info...</p>;
  if (error) return <p>error {JSON.stringify(error, null, 2)}</p>;

  return <pre>{JSON.stringify(recording, null, 2)}</pre>;
}
