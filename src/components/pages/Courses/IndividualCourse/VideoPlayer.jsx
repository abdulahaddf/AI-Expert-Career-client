import "video-react/dist/video-react.css"; // import css
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton,
  // BigPlayButton
} from "video-react";
import { useContext, useEffect, useRef, useState } from "react";

const VideoPlayer = () => {
    const [videoSource, setVideoSource] = useState(
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      );
      const [selected, setSelected] = useState(
        "Introduction to Web designing preview topic1"
      );
      const playerRef = useRef(null);
    
      const handleList = (video, title) => {
        setSelected(title);
        setVideoSource(video);
      };
    
      useEffect(() => {
        if (playerRef.current) {
          const videoElement = playerRef.current.video.video;
          videoElement.src = videoSource;
          videoElement.load();
        }
      }, [videoSource]);
    return (
        <div>
            
        </div>
    );
};

export default VideoPlayer;