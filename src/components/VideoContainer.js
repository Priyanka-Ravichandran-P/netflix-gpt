import React from "react";

const VideoContainer = (props) => {
  const { videoURL } = props?.data;
  console.log(" videoutl :", videoURL)
  return (
    <div className="absolute inset-0">
  <iframe
    className="w-full h-[50vw]" // Set height to 50% of the viewport width
    src={`https://www.youtube.com/embed/${videoURL}`}
    title="Movie Trailer"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

  );
};

export default VideoContainer;
