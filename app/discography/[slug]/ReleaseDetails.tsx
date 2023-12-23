import HeaderText from '@/app/components/HeaderText';
import { Release } from '@/app/types';
import Link from 'next/link';

interface ReleaseDetailsProps {
    release: Release;
}

export default function ReleaseDetails({ release }: ReleaseDetailsProps) {
    return (
        <>
            <HeaderText text={release.title} compressor={1.5} />
            <div className="release-year">{release.shortYear}</div>
            <div className="release-about">{release.about}</div>
            <div className="release-credits">{release.credits}</div>
            <div className="release-listen">
                <div>
                    listen on <Link href={release.bandcampURL}>bandcamp</Link> or{' '}
                    <Link href={release.spotifyURL}>spewify</Link>
                </div>
                <iframe
                    src={`https://bandcamp.com/EmbeddedPlayer/${release.bandcampAlbumOrTrack}=${release.bandcampEmbedID}/size=large/bgcol=ffffff/linkcol=333333/artwork=none/transparent=true/`}
                    seamless
                ></iframe>
            </div>
            <div className="release-tracklist">
                {release.tracklist.map((track) => (
                    <ol>
                        <li>
                            {track.title} {track.note ? <span>{`(${track.note})`}</span> : ''}
                        </li>
                    </ol>
                ))}
            </div>
            <div className="release-cover">
                {release.cover.map((cover) => (
                    <Link href={cover.urlLarge}>
                        <img key={cover.id} src={cover.urlSmall} alt={cover.alt} />
                    </Link>
                ))}
            </div>
            {release.linerNotes && release.linerNotes.length > 0 && (
                <div className="release-linernotes">
                    {release.linerNotes?.map((note) => (
                        <Link href={note.urlLarge}>
                            <img key={note.id} src={note.urlSmall} alt={note.alt} />
                        </Link>
                    ))}
                </div>
            )}
            {release.attachments && release.attachments.length > 0 && (
                <div className="release-attachments">
                    {release.attachments?.map((attachment) => (
                        <>
                            url: {attachment.url}
                            <br />
                        </>
                    ))}
                </div>
            )}
            <div className="release-editions">
                {release.editions.map((edition) => (
                    <>
                        <Link href={edition.link}>
                            <div className="release-label">
                                {edition.label} {edition.catalogNumber && `#${edition.catalogNumber}`},{' '}
                                {edition.releaseDate}
                            </div>
                            <div className="release-formats">
                                {edition.printedCDs > 0 && <span className="format">CD</span>}
                                {edition.printedCassettes > 0 && <span className="format">cassette</span>}
                                {edition.printedRecords > 0 && <span className="format">vinyl</span>}
                                {edition.printedObjects > 0 && (
                                    <span className="format">
                                        object {edition.objectDesc && <span>({edition.objectDesc})</span>}
                                    </span>
                                )}
                            </div>
                            {edition.soldOut && <span className="soldout">sold out</span>}
                        </Link>

                        {edition.photos && edition.photos.length > 0 && (
                            <div className="edition-photos">
                                {edition.photos?.map((photo) => (
                                    <Link href={photo.urlLarge}>
                                        <img key={photo.id} src={photo.urlSmall} alt={photo.alt} />
                                    </Link>
                                ))}
                            </div>
                        )}
                    </>
                ))}
            </div>
            {release.presses && release.presses.length > 0 && (
                <div className="release-press">
                    {release.presses.map((press) => (
                        <Link href={press.URL}>
                            <div className='press-quote'>"{press.quote}"</div>
                            <div className='press-publication'>–{press.publication}</div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}
