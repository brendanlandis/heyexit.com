import { Release } from '@/app/types';
import Link from 'next/link';
import { Fragment } from 'react';
import Markdown from 'react-markdown';

interface ReleaseDetailsProps {
    release: Release;
}

export default function ReleaseDetails({ release }: ReleaseDetailsProps) {
    const headerText = release.bands
        .map((band) => (
            <Fragment key={band.id}>
                {band.displayBandname ? (
                    <Fragment key={band.id}>{band.displayBandname} - </Fragment>
                ) : (
                    band.bandname !== 'Hey Exit' && <Fragment key={band.id}>{band.bandname} - </Fragment>
                )}
            </Fragment>
        ))
        .concat(
            <span key="release-title" className="album-title">
                {release.title}
            </span>
        );

    return (
        <div className="release-container">
            <div className="release-header">
                <h1>{headerText}</h1>
                <div className="header-details">
                    <div className="editions">
                        {release.editions.map((edition) => (
                            <div className="release-edition" key={edition.id}>
                                <div className="release-label">
                                    {edition.label}
                                    {edition.catalogNumber && ` #${edition.catalogNumber}`}
                                    {', '}
                                    {edition.releaseDate}
                                </div>
                                <div className="release-formats">
                                    {edition.printedCDs > 0 && <span className="format">CD</span>}
                                    {edition.printedCassettes > 0 && <span className="format">cassette</span>}
                                    {edition.printedRecords > 0 && <span className="format">vinyl</span>}
                                    {edition.printedObjects > 0 && (
                                        <span className="format">
                                            {edition.objectDesc ? `${edition.objectDesc}` : 'object'}
                                        </span>
                                    )}
                                    {edition.link && (
                                        <Link href={edition.link}>
                                            <span className="format">digital</span>
                                        </Link>
                                    )}
                                </div>
                                {edition.soldOut && <div className="release-soldout">physical edition sold out</div>}
                            </div>
                        ))}
                    </div>
                    <div className="release-listen">
                        {release.bandcampURL && (
                            <>
                                listen on <Link href={release.bandcampURL}>bandcamp</Link>
                            </>
                        )}

                        {release.spotifyURL && (
                            <>
                                {' '}
                                or <Link href={release.spotifyURL}>spotify</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div>
                {release.cover.map((cover) => (
                    <Link key={cover.id} href={cover.urlLarge} className="release-cover">
                        <img src={cover.urlSmall} alt={cover.alt} />
                    </Link>
                ))}

                <div className="release-edition-photos">
                    {release.linerNotes?.map((note) => (
                        <Link href={note.urlLarge} key={note.id}>
                            <img key={note.id} src={note.urlSmall} alt={note.alt} />
                        </Link>
                    ))}
                    {release.editions.map((edition) => (
                        <Fragment key={edition.id}>
                            {edition.photos?.map((photo) => (
                                <Link href={photo.urlLarge} key={photo.id}>
                                    <img key={photo.id} src={photo.urlSmall} alt={photo.alt} />
                                </Link>
                            ))}
                        </Fragment>
                    ))}
                </div>

                {release.attachments && release.attachments.length > 0 && (
                    <div className="release-attachments">
                        {release.attachments.map((attachment) => (
                            <div className="attachment" key={attachment.id}>
                                <Link href={attachment.url}>{attachment.linkText}</Link>{' '}
                                <span>(mime type: {attachment.mime})</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div>
                <div className="release-embed">
                    {release.bandcampEmbedID ? (
                        <iframe
                            src={`https://bandcamp.com/EmbeddedPlayer/${release.bandcampAlbumOrTrack}=${release.bandcampEmbedID}/size=large/bgcol=ffffff/linkcol=333333/artwork=none/transparent=true/`}
                            seamless
                            style={{ minHeight: release.bandcampEmbedHeight }}
                        ></iframe>
                    ) : (
                        <ol className="release-tracklist">
                            {release.tracklist.map((track) => (
                                <li key={track.id}>
                                    {track.title} {track.note ? <span>{`(${track.note})`}</span> : ''}
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
                <div className="release-about">
                    <Markdown>{release.about}</Markdown>
                </div>
                <div className="release-credits">
                    <Markdown>{release.credits}</Markdown>
                </div>
                {release.presses && release.presses.length > 0 && (
                    <div className="release-presses">
                        {release.presses.map((press) => (
                            <div className="press" key={press.id}>
                                <div className="press-quote">"{press.quote}"</div>
                                <div>
                                    &mdash;
                                    <Link href={press.URL} className="press-publication">
                                        {press.publication}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
