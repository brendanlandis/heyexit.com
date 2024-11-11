'use client';
import { usePathname } from 'next/navigation';

export default function RecordingPage() {
  const slug = usePathname().replace('/recordings/', '');

  return (
    <>
      {slug}
    </>
  );
}
