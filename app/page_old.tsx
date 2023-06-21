"use client"

import Image from 'next/image';
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
  const [error, setError] = useState(null);
  const [works, setWorks] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/works?populate=*&filters[artists][id][$eq]=1")
      .then(({ data }) => setWorks(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error}</div>;
  }

  const path = "http://localhost:1337"

  return (
    <main>
      <ul>
        {works.map(({ id, attributes }) => (
          <li key={id}><img src={path + attributes.cover.data.attributes.formats.thumbnail.url} /></li>
          // <li>{id}</li>
          ))}
      </ul>

      wazzzuuuuppppp

      b53083eb9231c57d4b5e6153929461fad3ea5881b5bd0dfd8463b1b4a2874cf8fa75a12d2905255ac65d809cb34c6d592ba844b914cb522d551c00e343fbe94e830e9a7a20a016a6791ff65e3b3a34ae5cd1d6fc92846c61e11f3de349e78758001e9d279eca34cc32cf49cb9de8ca4579f3867e58b9c8f6275d9975fc5f5946

    </main>
  )
}
