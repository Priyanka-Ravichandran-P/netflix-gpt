import React from "react";

const VideoContainer = (props) => {
  const { videoURL } = props?.data;
  return (
    <div className="absolute inset-0">
  <iframe
    className="w-full h-[40vw]" // Set height to 50% of the viewport width
    src={`https://www.youtube.com/embed/${videoURL}?si=RssYsxrsRcMt1iOV`}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

  );
};

export default VideoContainer;
