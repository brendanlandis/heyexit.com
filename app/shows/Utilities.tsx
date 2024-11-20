import { Show } from '../types';

export const isRelevantShow = (show: Show): boolean =>
  show.alias !== 'Angel Olsen Cover Band' &&
  (show.band.name === 'Hey Exit' || show.band.name === 'Brendan Landis') &&
  new Date(show.date).getFullYear() <= 2021;

export const reduceImages = (show: Show): [string, string, Date, string][] => {
  const tempUrls: [string, string, Date, string][] = [];

  // Collect flyers
  if (show.flyers) {
    const flyer = show.flyers.length > 1 ? show.flyers[Math.floor(Math.random() * show.flyers.length)] : show.flyers[0];
    if (flyer) tempUrls.push([flyer.url, flyer.documentId, show.date, 'flyer']);
  }

  // Collect pics
  const pics =
    show.documentation?.filter((doc) => doc.mime?.includes('image') && doc.caption?.includes('heyExitShowArchive')) ||
    [];

  // Select up to 3 random pics
  const selectedPics = [];
  const selectedIndexes = new Set<number>();

  while (selectedPics.length < 3 && selectedIndexes.size < pics.length) {
    const randomIndex = Math.floor(Math.random() * pics.length);
    if (!selectedIndexes.has(randomIndex)) {
      selectedIndexes.add(randomIndex);
      selectedPics.push(pics[randomIndex]);
    }
  }

  tempUrls.push(
    ...selectedPics.map((doc) => [doc.url, doc.documentId, show.date, 'pic'] as [string, string, Date, string])
  );

  // collect vids
  const vids = show.documentation?.filter((doc) => doc.mime?.includes('video') && doc.caption?.includes('heyExitShowArchive')) ||
  [];

  tempUrls.push(
    ...vids.map((doc) => [doc.url, doc.documentId, show.date, 'vid'] as [string, string, Date, string])
  );

  return tempUrls;
};
