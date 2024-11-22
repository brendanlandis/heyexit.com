import { Masonry } from 'react-plock';
// import Link from 'next/link';
import Image from 'next/image';

export default function ShowImages({
  images,
}: {
  images: [string, string, Date, string][];
}) {
  return (
    <div className="shows-images">
      <Masonry
        items={images}
        config={{
          columns: [1, 2, 3],
          gap: [24, 12, 6],
          media: [640, 768, 1024],
        }}
        render={(item, idx) => {
          const [url, documentId, date, type] = item;
          if (type === 'pic' || type === 'flyer') {
            return (
              // <Link
              //   href={`https://slownames.net/admin/plugins/upload?sort=createdAt:DESC&page=1&pageSize=50&folder=3&folderPath=/1&_q=${documentId}`}
              //   key={idx}
              //   target="_blank"
              // >
              <Image
                alt="photo of Hey Exit"
                src={url}
                width={600}
                height={600}
                key={idx}
              />
              // </Link>
            );
          } else if (type === 'vid') {
            return (
              <video key={idx} controls preload="metadata">
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              // <Image alt="photo of Hey Exit" src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/Psst_Come_see_me_play_a_solo_noise_set_this_Thursd_890b6f6847.jpg" width={600} height={600} key={idx} />
            );
          }
        }}
      />
    </div>
  );
}
