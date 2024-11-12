import { type BlocksContent } from '@strapi/blocks-react-renderer';

export interface Media {
  id: number;
  name: string;
  documentId: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  mime: string;
  size: number;
  url: string;
}

export interface Press {
  id: number;
  bands: Array<{
    id: number;
    name: string;
  }>;
  recordings: Array<{
    id: number;
    title: string;
  }>;
  date: Date;
  publication: string;
  type: string;
  visibility: string;
  URL: string;
  attachments: Array<{
    id: number;
    alternativeText: string;
    url: string;
  }>;
  quote: string;
  fullText: BlocksContent;
}

export interface Recording {
  id: number;
  documentId: string;
  bands: Array<{
    id: number;
    name: string;
  }>;
  alias: string;
  title: string;
  releaseDate: Date;
  type: string;
  visibility: string;
  cover: Array<{
    id: number;
    alternativeText: string;
    caption: string;
    url: string;
  }>;
  linerNotes: Array<{
    id: number;
    alternativeText: string;
    caption: string;
    url: string;
  }>;
  bandcampURL: string;
  bandcampEmbedID: string;
  spotifyURL: string;
  bandcampAlbumOrTrack: string;
  about: BlocksContent;
  credits: BlocksContent;
  attachments: Array<{
    id: number;
    alternativeText: string;
    caption: string;
    url: string;
  }>;
  tracklist: Array<{
    id: number;
    title: string;
    note: string;
    length: string;
  }>;
  editions: Array<{
    id: number;
    label: string;
    catalogNumber: string;
    releaseDate: Date;
    onlineOnly: boolean;
    soldOut: boolean;
    link: string;
    printedCassettes: number;
    printedRecords: number;
    printedCDs: number;
    printedObjects: number;
    objectDescription: string;
    photos: Array<{
      id: number;
      alternativeText: string;
      caption: string;
      url: string;
    }>;
  }>;
  promoVideos: Array<{
    id: number;
    name: string;
    file: Array<{
      id: number;
      alternativeText: string;
      caption: string;
      url: string;
    }>;
    videoID: string;
    videoHost: string;
    credit: string;
    visibility: string;
  }>;
  presses: Array<Press>;
}

export interface Show {
  id: number;
  date: Date;
  documentId: string;
  documentation: Array<{
    id: number;
    alternativeText: string;
    mime: string;
    url: string;
    documentId: string;
  }>;
}
