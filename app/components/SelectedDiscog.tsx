'use client';
import useAxios from 'axios-hooks';
import { format } from 'date-fns/format';
import { Release, RawReleaseData } from '../types';

export default function SelectedDiscog() {
    const [{ data: releases, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/releases?populate=deep,3&filters[bands][band][id]=33&filters[visibility]=selected%20discography'
    );
    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    const getReleaseDetails = (release: RawReleaseData): Release => {
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

        return {
            id: release.id,
            title: release.attributes.title,
            originalReleaseDate,
            shortYear,
            about: release.attributes.about,
            credits: release.attributes.credits,
            bandcampURL: release.attributes.bandcampURL,
            bandcampEmbedID: release.attributes.bandcampEmbedID,
            bandcampAlbumOrTrack: release.attributes.bandcampAlbumOrTrack,
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
            attachments: release.attributes.attachments.data?.map((attachment) => ({
                id: attachment.id,
                url: attachment.attributes.url,
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
                releaseDate: edition.attributes.releaseDate,
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
        };
    };

    const formatReleases = (releases: { data: RawReleaseData[] }): Release[] => {
        return releases.data.map(getReleaseDetails);
    };

    const formattedReleases = releases ? formatReleases(releases) : [];

    const orderedReleases = formattedReleases.sort(
        (b, a) => new Date(a.originalReleaseDate).getTime() - new Date(b.originalReleaseDate).getTime()
    );

    // console.log(orderedReleases);

    return (
        <>
            <div className="releases-grid">
                {orderedReleases.map((release: Release) => (
                    <div className="release" key={release.id}>
                        <div className="cover">
                            {release.cover.map((cover) => (
                                <a href={cover.urlLarge} key={cover.id}>
                                    <img src={cover.urlSmall} alt={cover.alt} />
                                </a>
                            ))}
                        </div>
                        <div className="details">
                            <div className="album-title">{release.title}</div>
                            <div className="album-releasedate">
                                {release.shortYear}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
