import {
  SiInstagram,
  SiBluesky,
  SiThreads,
  SiMastodon,
  SiSpotify,
  SiBandcamp,
  SiPatreon,
} from 'react-icons/si';

export default function SocialNavItems() {
  return (
    <>
      <li>
        <a href="https://slownames.bandcamp.com/" title="Hey Exit (plus other projects) on Bandcamp">
          <SiBandcamp />
        </a>
      </li>
      <li>
        <a href="https://open.spotify.com/artist/59ul4nU3B016dyuv6XYn8e" title="Hey Exit on Spotify">
          <SiSpotify />
        </a>
      </li>
      {/* <li>
        <a href="https://www.patreon.com/user?u=18475116" title="Brendan and Calley on Patreon">
          <SiPatreon />
        </a>
      </li> */}
      <li>
        <a href="https://www.instagram.com/slow.names" title="Brendan on Instagram">
          <SiInstagram />
        </a>
      </li>
      {/* <li>
        <a href="https://bsky.app/profile/slownames.bsky.social" title="Brendan on Bluesky">
          <SiBluesky />
        </a>
      </li> */}
      {/* <li>
        <a href="https://www.threads.net/@slow.names" title="Brendan on Threads">
          <SiThreads />
        </a>
      </li> */}
      <li>
        <a href="https://mstdn.social/@slownames" title="Brendan on Mastodon">
          <SiMastodon />
        </a>
      </li>
    </>
  );
}
