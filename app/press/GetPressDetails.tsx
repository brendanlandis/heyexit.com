import { Press, RawPressData } from '../types';

export const GetPressDetails = (press: RawPressData): Press => {

    // console.log(press.attributes.releases.data[0].attributes.bands[0].band.data.attributes.bandname);
    const releasesBands = press.attributes.releases.data.flatMap((release) =>
        release.attributes.bands.map((band) => band.band.data.attributes.bandname)
    );

    // console.log(press.attributes.editions.data[0].attributes.releases.data[0].attributes.bands[0].band.data.attributes.bandname);
    const editionsBands = press.attributes.editions.data.flatMap((edition) =>
        edition.attributes.releases.data.flatMap((bandlist) =>
            bandlist.attributes.bands.map((band) => band.band.data.attributes.bandname)
        )
    );

    // console.log(press.attributes.videos.data[0].attributes.bands[0].band.data.attributes.bandname);
    const videosBands = press.attributes.videos.data.flatMap((video) =>
        video.attributes.bands.map((band) => band.band.data.attributes.bandname)
    );

    // console.log(press.attributes.shows.data[0].attributes.myBand[0].band.data.attributes.bandname);
    const showsBands = press.attributes.shows.data.flatMap((show) =>
        show.attributes.myBand.map((band) => band.band.data.attributes.bandname)
    );

    // console.log(press.attributes.tours.data[0].attributes.shows.data[0].attributes.myBand[0].band.data.attributes.bandname);
    const toursBands = press.attributes.tours.data.flatMap((tour) =>
        tour.attributes.shows.data.flatMap((show) => 
            show.attributes.myBand.map((band) => band.band.data.attributes.bandname)
        )
    );

    // console.log(press.attributes.bands[0].band.data.attributes.bandname);
    const bandsBands = press.attributes.bands.map((band) => band.band.data.attributes.bandname);

    const allBands = Array.from(new Set([...editionsBands, ...releasesBands, ...videosBands, ...showsBands, ...toursBands, ...bandsBands]));
    const bandsArray = allBands.map((bandName) => ({ bandname: bandName }));


    return {
        id: press.id,
        type: press.attributes.type,
        date: press.attributes.date,
        URL: press.attributes.URL,
        quote: press.attributes.quote,
        visibility: press.attributes.visibility,
        publication: press.attributes.publication,
        bands: bandsArray,
        attachments: press.attributes.attachments.data?.map((attachment) => ({
            id: attachment.id,
            alt: attachment.attributes.alternativeText,
            urlLarge: `${process.env.NEXT_PUBLIC_STRAPI_URL}${attachment.attributes.url}`,
            urlSmall: attachment.attributes.formats.medium
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${attachment.attributes.formats.medium.url}`
                : `${process.env.NEXT_PUBLIC_STRAPI_URL}${attachment.attributes.url}`,
        })),
    };
};
