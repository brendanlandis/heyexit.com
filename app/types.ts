export interface RawShowData {
    id: number;
    attributes: {
        date: string;
        myBand: Array<{
            id: number;
            displayBandname: string;
            band: {
                data: {
                    id: number;
                    attributes: {
                        bandname: string;
                    };
                };
            };
        }>;
        doors: string;
        sound: string;
        venue: string;
        city: string;
        notes: string;
        otherBands: string;
        eventLinks: Array<{
            id: number;
            url: string;
            text: string;
        }>;
        flyers: {
            data: Array<{
                id: number;
                attributes: {
                    alternativeText: string;
                    url: string;
                    formats: {
                        medium: {
                            url: string;
                        };
                    };
                };
            }>;
        };
        documentation: {
            data: Array<{
                id: number;
                attributes: {
                    alternativeText: string;
                    url: string;
                    formats: {
                        medium: {
                            url: string;
                        };
                    };
                };
            }>;
        };
    };
}

export interface Show {
    id: number;
    bands: Array<{
        id: number;
        bandname: string;
        displayBandname: string;
    }>;
    date: string;
    shortMonth: string;
    shortDay: string;
    shortDate: string;
    doors: string;
    sound: string;
    venue: string;
    city: string;
    notes: string;
    otherBands: string;
    eventLinks: Array<{
        id: number;
        url: string;
        text: string;
    }>;
    flyers: Array<{
        id: number;
        alt: string;
        urlLarge: string;
        urlSmall: string;
    }>;
    documentation: Array<{
        id: number;
        alt: string;
        urlLarge: string;
        urlSmall: string;
    }>;
}

export interface RawPostData {
    id: number;
    attributes: {
        date: string;
        headline: string;
        text: string;
        bands: {
            data: Array<{
                id: number;
                attributes: {
                    bandname: string;
                };
            }>;
        };
        attachments: Array<{
            id: number;
            linkText: string;
            file: {
                data: {
                    attributes: {
                        url: string;
                    };
                };
            };
        }>;
    };
}

export interface Post {
    id: number;
    date: string;
    realDate: string;
    headline: string;
    text: string;
    attachments: Array<{
        id: number;
        text: string;
        url: string;
    }>;
}

export interface RawTabData {
    id: number;
    attributes: {
        createdAt: string;
        url: string;
        linkText: string;
        description: string;
        bands: {
            data: Array<{
                id: number;
                attributes: {
                    bandname: string;
                };
            }>;
        };
    };
}

export interface Tab {
    id: number;
    date: string;
    url: string;
    linkText: string;
    description: string;
}

export interface RawReleaseData {
    id: number;
    attributes: {
        title: string;
        about: string;
        credits: string;
        bandcampURL: string;
        bandcampEmbedID: string;
        bandcampAlbumOrTrack: string;
        spotifyURL: string;
        visibility: string;
        type: string;
        bands: Array<{
            id: number;
            displayBandname: string;
            band: {
                data: {
                    id: number;
                    attributes: {
                        bandname: string;
                    };
                };
            };
        }>;
        tracklist: Array<{
            id: number;
            title: string;
            note: string;
        }>;
        cover: {
            data: Array<{
                id: number;
                attributes: {
                    alternativeText: string;
                    url: string;
                    formats: {
                        medium: {
                            url: string;
                        };
                    };
                };
            }>;
        };
        linerNotes: {
            data: Array<{
                id: number;
                attributes: {
                    alternativeText: string;
                    url: string;
                    formats: {
                        medium: {
                            url: string;
                        };
                    };
                };
            }>;
        };
        attachments: Array<{
            id: number;
            linkText: string;
            file: {
                data: {
                    id: number;
                    attributes: {
                        url: string;
                        mime: string;
                    };
                };
            };
        }>;
        editions: {
            data: Array<{
                id: number;
                attributes: {
                    printedCDs: number;
                    printedCassettes: number;
                    printedRecords: number;
                    printedObjects: number;
                    objectDesc: string;
                    label: string;
                    catalogNumber: string;
                    releaseDate: Date;
                    link: string;
                    soldOut: boolean;
                    photos: {
                        data: Array<{
                            id: number;
                            attributes: {
                                alternativeText: string;
                                url: string;
                                formats: {
                                    medium: {
                                        url: string;
                                    };
                                };
                            };
                        }>;
                    };
                };
            }>;
        };
        presses: {
            data: Array<{
                id: number;
                attributes: {
                    type: string;
                    date: Date;
                    URL: string;
                    quote: string;
                    visibility: string;
                    publication: string;

                    label: string;
                    catalogNumber: string;
                    releaseDate: Date;
                    link: string;
                    soldOut: boolean;
                    attachments: {
                        data: Array<{
                            id: number;
                            attributes: {
                                alternativeText: string;
                                url: string;
                                formats: {
                                    medium: {
                                        url: string;
                                    };
                                };
                            };
                        }>;
                    };
                };
            }>;
        };
    };
}

export interface Release {
    id: number;
    title: string;
    titleSlug: string;
    originalReleaseDate: Date;
    shortYear: string;
    about: string;
    credits: string;
    bandcampURL: string;
    bandcampEmbedID: string;
    bandcampAlbumOrTrack: string;
    bandcampEmbedHeight: number;
    spotifyURL: string;
    visibility: string;
    type: string;
    bands: Array<{
        id: number;
        bandname: string;
        displayBandname: string;
    }>;
    tracklist: Array<{
        id: number;
        title: string;
        note: string;
    }>;
    cover: Array<{
        id: number;
        alt: string;
        urlLarge: string;
        urlSmall: string;
    }>;
    linerNotes: Array<{
        id: number;
        alt: string;
        urlLarge: string;
        urlSmall: string;
    }>;
    attachments: Array<{
        id: number;
        linkText: string;
        url: string;
        mime: string;
    }>;
    editions: Array<{
        id: number;
        printedCDs: number;
        printedCassettes: number;
        printedRecords: number;
        printedObjects: number;
        objectDesc: string;
        label: string;
        catalogNumber: string;
        releaseDate: string;
        link: string;
        soldOut: boolean;
        photos: Array<{
            id: number;
            alt: string;
            urlLarge: string;
            urlSmall: string;
        }>;
    }>;
    presses: Array<{
        id: number;
        type: string;
        date: Date;
        URL: string;
        quote: string;
        visibility: string;
        publication: string;
        attachments: Array<{
            id: number;
            alt: string;
            urlLarge: string;
            urlSmall: string;
        }>;
    }>;
}
