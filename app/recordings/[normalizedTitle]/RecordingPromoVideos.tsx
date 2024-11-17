import { Recording, VideoEmbed } from '@/app/types';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Vimeo from '@u-wave/react-vimeo';

export default function RecordingPromoVideos(recording: Recording) {
  return (
    <>
      <div className="recording-promo-videos">
        {recording.promoVideos?.map((video: VideoEmbed, index: number) => {
          // what type of video is it
          const getVideoType = () => {
            if (video.file?.url) {
              return 'file';
            } else if (video.videoHost === 'youtube' && video.videoID) {
              return 'youtube';
            } else if (video.videoHost === 'vimeo' && video.videoID) {
              return 'vimeo';
            } else {
              return 'unknown';
            }
          };

          const videoType = getVideoType();

          return (
            <div key={index}>
              {videoType === 'youtube' && (
                <>
                  <LiteYouTubeEmbed id={video.videoID} title={video.name} />
                </>
              )}

              {videoType === 'vimeo' && (
                <>
                  <Vimeo video={video.videoID} showByline dnt responsive />
                </>
              )}

              {videoType === 'file' && (
                <>
                  <video controls preload="auto">
                    <source src={video.file?.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </>
              )}
              {videoType != 'unknown' && video.credit && <p>video by {video.credit}</p>}
            </div>
          );
        })}
      </div>
    </>
  );
}
