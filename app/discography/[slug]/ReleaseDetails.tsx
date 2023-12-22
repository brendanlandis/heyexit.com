import HeaderText from "@/app/components/HeaderText";
import { Release } from "@/app/types";

interface ReleaseDetailsProps {
    release: Release;
}

export default function ReleaseDetails({ release }: ReleaseDetailsProps) {
    return <>
        <HeaderText text={release.title} compressor={1.5} />
        id: {release.id}<br />
        originalReleaseDate: {JSON.stringify(release.originalReleaseDate, null, 2)}<br />
        shortYear: {release.shortYear}<br />
        about: {release.about}<br />
        credits: {release.credits}<br />
        bandcampURL: {release.bandcampURL}<br />
        bandcampEmbedID: {release.bandcampEmbedID}<br />
        bandcampAlbumOrTrack: {release.bandcampAlbumOrTrack}<br />
        spotifyURL: {release.spotifyURL}<br />

        bands:
        {release.bands.map((band) => (
            <>
                {band.bandname} (as {band.displayBandname})
            </>
        ))}<br />

        tracklist:<br />
        {release.tracklist.map((track) => (
            <>
                {track.title} ({track.note})<br />
            </>
        ))}<br />

        cover: <br />
        {release.cover.map((cover) => (
            <>
                alt: {cover.alt}<br />
                urlLarge: {cover.urlLarge}<br />
                urlSmall: {cover.urlSmall}<br />
            </>
        ))}<br />

        linerNotes: <br />
        {release.linerNotes?.map((note) => (
            <>
                alt: {note.alt}<br />
                urlLarge: {note.urlLarge}<br />
                urlSmall: {note.urlSmall}<br />
            </>
        ))}<br />

        attachments: <br />
        {release.attachments?.map((attachment) => (
            <>
                url: {attachment.url}<br />
            </>
        ))}<br />

        editions: <br />
        {release.editions.map((edition) => (
            <>
                printedCDs: {edition.printedCDs}<br />
                printedCassettes: {edition.printedCassettes}<br />
                printedRecords: {edition.printedRecords}<br />
                printedObjects: {edition.printedObjects}<br />
                objectDesc:  {edition.objectDesc}<br />
                label: {edition.label}<br />
                catalogNumber: {edition.catalogNumber}<br />
                releaseDate: {JSON.stringify(edition.releaseDate, null, 2)}<br />
                link: {edition.link}<br />
                soldOut: {JSON.stringify(edition.soldOut, null, 2)}<br />

                photos<br />
                {edition.photos.map((photo) => (
                    <>
                        alt: {photo.alt}<br />
                        urlLarge: {photo.urlLarge}<br />
                        urlSmall: {photo.urlSmall}<br />
                    </>
                ))}
            </>
        ))}
    </>;
}
