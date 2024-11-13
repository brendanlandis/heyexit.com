import { Recording, Media, Edition } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';

export default function RecordingGraphics(recording: Recording) {

  // concatenate cover art, liner notes, pics of physical editions
  const getGraphics = () => {
    const coverUrls = recording.cover.map((coverItem) => coverItem.url);
    const linerNoteUrls = recording.linerNotes ? recording.linerNotes.map((note) => note.url) : [];
    const editionPhotoUrls =
      recording.editions?.flatMap((edition) => edition.photos?.map((photo) => photo.url) || []) || [];
    return [...coverUrls, ...linerNoteUrls, ...editionPhotoUrls];
  };
  const graphicUrls = getGraphics();

  return (
    <>
      <div className="carousel w-full">
        {graphicUrls.map((url, index) => {
          const prevIndex = index === 0 ? graphicUrls.length - 1 : index - 1;
          const nextIndex = index === graphicUrls.length - 1 ? 0 : index + 1;
          return (
            <div id={`item${index + 1}`} className="carousel-item relative w-full" key={index}>
              <Image src={url} alt={`item number ${index + 1}`} width={750} height={750} className="w-full cover" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <Link href={`#item${prevIndex + 1}`} className="btn btn-circle">
                  ❮
                </Link>
                <Link href={`#item${nextIndex + 1}`} className="btn btn-circle">
                  ❯
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {graphicUrls.map((_, index) => (
          <Link href={`#item${index + 1}`} className="btn btn-xs" key={index}>
            {index + 1}
          </Link>
        ))}
      </div>
    </>
  );
}
