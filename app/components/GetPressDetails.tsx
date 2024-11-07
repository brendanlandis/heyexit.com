import { Press } from '../types';

export const GetPressDetails = (press: Press): Press => {
  return {
    id: press.id,
    type: press.type,
    date: press.date,
    URL: press.URL,
    attachments: press.attachments,
    quote: press.quote,
    visibility: press.visibility,
    publication: press.publication,
    bands: press.bands,
    fullText: press.fullText,
    recordings: press.recordings,
  };
};
