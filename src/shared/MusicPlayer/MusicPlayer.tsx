import React from "react";

export interface MusicPlayerProps {
  music: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ music }) => {
  const audioRef = React.useRef(null);

  React.useEffect(() => {
    music
      ? (audioRef as any).current.play()
      : (audioRef as any).current.pause();
  }, [music]);

  return (
    <audio ref={audioRef}>
      <source
        src={"https://www.bensound.com/bensound-music/bensound-slowmotion.mp3"}
        type="audio/ogg"
      />
      Your browser does not support the audio element.
    </audio>
  );
};

export default MusicPlayer;
