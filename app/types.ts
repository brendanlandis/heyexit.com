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

export interface Attachment {
  id: number;
  linkText: string;
  file: Media;
}

export interface Track {
  id: number;
  title: string;
  note: string;
  length: string;
}

export interface Edition {
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
  photos: Array<Media>;
}

export interface VideoEmbed {
  id: number;
  name: string;
  file: Media;
  videoID: string;
  videoHost: string;
  credit: string;
  visibility: string;
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
  attachments: Array<Media>;
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
  cover: Array<Media>;
  linerNotes: Array<Media>;
  bandcampURL: string;
  bandcampEmbedID: string;
  spotifyURL: string;
  bandcampAlbumOrTrack: string;
  about: BlocksContent;
  credits: BlocksContent;
  attachments: Array<Attachment>;
  tracklist: Array<Track>;
  editions: Array<Edition>;
  promoVideos: Array<VideoEmbed>;
  reviews: Array<Press>;
}

export interface Show {
  id: number;
  date: Date;
  band: {
    id: number;
    name: string;
  };
  showName: string;
  alias: string;
  documentId: string;
  documentation: Array<{
    id: number;
    alternativeText: string;
    mime: string;
    url: string;
    documentId: string;
    caption: string;
  }>;
  flyers: Array<{
    id: number;
    alternativeText: string;
    mime: string;
    url: string;
    documentId: string;
    caption: string;
  }>;
  
}
