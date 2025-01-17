interface VideoBackgroundProps {
  src: string;
  className?: string; // This line is already included
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  className,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full overflow-hidden -z-10 ${className || ""}`}
    >
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
