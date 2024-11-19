import { Recording } from '@/app/types';
import Image from 'next/image';
import { useRef } from 'react';

export default function RecordingGraphics(recording: Recording) {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollCarousel(targetImageNumber: number) {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      let carouselWidth = carouselElement.clientWidth;
      let targetImage = targetImageNumber - 1;
      let targetXPixel = carouselWidth * targetImage + 1;
      carouselElement.scrollTo(targetXPixel, 0);
    }
  }

  // concatenate cover art, liner notes, pics of physical editions
  const getGraphics = () => {
    const coverUrls = recording.cover.map((coverItem) => coverItem.url);
    const linerNoteUrls = recording.linerNotes ? recording.linerNotes.map((note) => note.url) : [];
    const editionPhotoUrls =
      recording.editions?.flatMap((edition) => edition.photos?.map((photo) => photo.url) || []) || [];
    return [...coverUrls, ...linerNoteUrls, ...editionPhotoUrls];
  };
  const graphicUrls = getGraphics();

  let carouselElement = document.getElementById('carouselWrapper');

  return (
    <>
      {graphicUrls.length === 1 ? (
        <Image
          src={graphicUrls[0]}
          alt={`cover of ${recording.title}`}
          width={750}
          height={750}
          className="w-full detail-cover"
        />
      ) : (
        <>
          <div ref={carouselRef} className="carousel w-full">
            {graphicUrls.map((url, index) => {
              const prevIndex = index === 0 ? graphicUrls.length - 1 : index - 1;
              const nextIndex = index === graphicUrls.length - 1 ? 0 : index + 1;
              return (
                <div id={`item${index + 1}`} className="carousel-item relative w-full" key={index}>
                  <Image
                    src={url}
                    alt={`item number ${index + 1}`}
                    width={2048}
                    height={2048}
                    className="w-full detail-cover"
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <button onClick={() => scrollCarousel(prevIndex + 1)} className="btn btn-circle">
                      ❮
                    </button>
                    <button onClick={() => scrollCarousel(nextIndex + 1)} className="btn btn-circle">
                      ❯
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            {graphicUrls.map((_, index) => (
              <button onClick={() => scrollCarousel(index + 1)} className="btn btn-xs" key={index}>
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
}
