import { format } from 'date-fns/format';
import { Release, RawReleaseData } from '../types';

export const GetReleaseDetails = (release: RawReleaseData): Release => {
    const originalReleaseDate = release.attributes.editions.data?.reduce(
        (
            earliestDate: Date,
            edition: {
                id: number;
                attributes: {
                    releaseDate: Date;
                };
            }
        ) => {
            const editionReleaseDate = new Date(edition.attributes.releaseDate);
            return earliestDate && editionReleaseDate < earliestDate ? editionReleaseDate : earliestDate;
        },
        new Date()
    );

    const shortYear = originalReleaseDate ? format(originalReleaseDate, 'yyyy') : '';

    const filteredTracklist = release.attributes.tracklist.filter((entry) => entry.note !== 'digital bonus track');
    const bandcampEmbedHeight = 145 + 35 * (filteredTracklist.length || 0);

    const normalizedTitle = release.attributes.title
        .normalize('NFD') // Normalize accented characters
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritic marks
        .toLowerCase() // Convert to lowercase
        .replace(/[^\w\s]/g, '') // Remove non-alphanumeric characters
        .replace(/\s+/g, '-'); // Convert spaces to dashes

    return {
        id: release.id,
        title: release.attributes.title,
        titleSlug: normalizedTitle,
        originalReleaseDate,
        shortYear,
        about: release.attributes.about,
        credits: release.attributes.credits,
        bandcampURL: release.attributes.bandcampURL,
        bandcampEmbedID: release.attributes.bandcampEmbedID,
        bandcampAlbumOrTrack: release.attributes.bandcampAlbumOrTrack,
        bandcampEmbedHeight: bandcampEmbedHeight,
        spotifyURL: release.attributes.spotifyURL,
        visibility: release.attributes.visibility,
        type: release.attributes.type,
        bands: release.attributes.bands.map((band) => ({
            id: band.id,
            displayBandname: band.displayBandname,
            bandname: band.band.data.attributes.bandname,
        })),
        tracklist: release.attributes.tracklist.map((track) => ({
            id: track.id,
            title: track.title,
            note: track.note,
        })),
        cover: release.attributes.cover.data.map((cover) => ({
            id: cover.id,
            alt: cover.attributes.alternativeText,
            urlLarge: `${process.env.NEXT_PUBLIC_STRAPI_URL}${cover.attributes.url}`,
            urlSmall: cover.attributes.formats.medium
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${cover.attributes.formats.medium.url}`
                : `${process.env.NEXT_PUBLIC_STRAPI_URL}${cover.attributes.url}`,
        })),
        linerNotes: release.attributes.linerNotes.data?.map((note) => ({
            id: note.id,
            alt: note.attributes.alternativeText,
            urlLarge: `${process.env.NEXT_PUBLIC_STRAPI_URL}${note.attributes.url}`,
            urlSmall: note.attributes.formats.medium
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${note.attributes.formats.medium.url}`
                : `${process.env.NEXT_PUBLIC_STRAPI_URL}${note.attributes.url}`,
        })),
        attachments: release.attributes.attachments?.map((attachment) => ({
            id: attachment.id,
            url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${attachment.file.data.attributes.url}`,
            linkText: attachment.linkText,
            mime: attachment.file.data.attributes.mime,
        })),
        editions: release.attributes.editions.data?.map((edition) => ({
            id: edition.id,
            printedCDs: edition.attributes.printedCDs,
            printedCassettes: edition.attributes.printedCassettes,
            printedRecords: edition.attributes.printedRecords,
            printedObjects: edition.attributes.printedObjects,
            objectDesc: edition.attributes.objectDesc,
            label: edition.attributes.label,
            catalogNumber: edition.attributes.catalogNumber,
            releaseDate: format(edition.attributes.releaseDate, 'yyyy'),
            link: edition.attributes.link,
            soldOut: edition.attributes.soldOut,
            photos: edition.attributes.photos.data?.map((photo) => ({
                id: photo.id,
                alt: photo.attributes.alternativeText,
                urlLarge: `${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.attributes.url}`,
                urlSmall: photo.attributes.formats.medium
                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.attributes.formats.medium.url}`
                    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.attributes.url}`,
            })),
        })),
        presses: release.attributes.presses.data?.map((press) => ({
            id: press.id,
            type: press.attributes.type,
            date: press.attributes.date,
            URL: press.attributes.URL,
            quote: press.attributes.quote,
            visibility: press.attributes.visibility,
            publication: press.attributes.publication,
            attachments: press.attributes.attachments.data?.map((attachment) => ({
                id: attachment.id,
                alt: attachment.attributes.alternativeText,
                urlLarge: `${process.env.NEXT_PUBLIC_STRAPI_URL}${attachment.attributes.url}`,
                urlSmall: attachment.attributes.formats.medium
                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${attachment.attributes.formats.medium.url}`
                    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${attachment.attributes.url}`,
            })),
        })),
        videos: release.attributes.videos.data?.map((video) => ({
            id: video.id,
            name: video.attributes.name,
            credits: video.attributes.credits,
            visibility: video.attributes.visibility,
            videoHost: video.attributes.videoHost,
            videoID: video.attributes.videoID,
            fileID: video.attributes.file.data?.id,
            fileURL: video.attributes.file.data?.attributes.url,
        })),
    };
};
