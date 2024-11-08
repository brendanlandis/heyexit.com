import { type BlocksContent } from '@strapi/blocks-react-renderer';

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

export interface Media {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  mime: string;
  size: number;
  url: string;
}