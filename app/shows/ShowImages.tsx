import { Show } from '../types';
import { Masonry } from 'react-plock';
import Link from 'next/link';
import Image from 'next/image';

export default function ShowImages({ images }: { images: [string, string, Date, string][] }) {
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
          return (
            <Link
              href={`https://slownames.net/admin/plugins/upload?sort=createdAt:DESC&page=1&pageSize=50&folder=3&folderPath=/1&_q=${documentId}`}
              key={idx}
              target="_blank"
            >
              <Image alt="asdf" src={url} width={600} height={600} />
            </Link>
          );
        }}
      />
    </div>
  );
}
