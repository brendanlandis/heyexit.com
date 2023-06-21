import Image from 'next/image'
import homePhoto from '../public/img/home.jpg'

export default function Home() {
  return (
    <main>

        <Image
          className="homePhoto"
          src={homePhoto}
          alt="Hey Exit performance c. 2015"
        />

    </main>
  )
}
