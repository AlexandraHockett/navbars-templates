import React from "react";

const VideoBackground = ({ src }: { src: string }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full overflow-hidden -z-10">
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src={src}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoBackground;
