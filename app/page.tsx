"use client"

import Image from 'next/image'
import axios from "axios";
import { useEffect, useState } from "react";
// import homePhoto from '../public/img/home.jpg'

export default function Home() {
  const [error, setError] = useState(null);
  const [works, setWorks] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://api.slownames.net/api/photos?populate=*&filters%5Busability%5D%5B$eq%5D=bio")
      .then(({ data }) => setWorks(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error}</div>;
  }
  const path = "https://api.slownames.net"

  return (
    <main>
      {works.map(({ id, attributes }) => (
        <Image
          key={id}
          className="homePhoto"
          src={path + attributes.photograph.data.attributes.url}
          alt=""
          width={attributes.photograph.data.attributes.width}
          height={attributes.photograph.data.attributes.height}
        />
        // {path + attributes.cover.data.attributes.formats.thumbnail.url}
      ))}

    </main>
  )
}
