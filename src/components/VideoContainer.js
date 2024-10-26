import React from "react";

const VideoContainer = (props) => {
  const { videoURL } = props?.data;
  return (
    <div className="absolute">
      <iframe
        className="w-screen aspect-video" // Set height to 50% of the viewport width
        src={`https://www.youtube.com/embed/${videoURL}?autoplay=1&mute=1&loop=1&playlist=${videoURL}&controls=0&modestbranding=1&showinfo=0&rel=0`}
        title="Movie Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
