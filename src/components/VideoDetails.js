import React from "react";
import PlayButton from "./PlayButton";

const VideoDetails = (props) => {
  const { title, description } = props?.data;
  return (
    <div className="absolute top-40 z-50 h-40 w-1/3">
      <div className="m-8 p-2 rounded-sm">
        <label className="text-5xl font-bold text-white align-middle">{title}</label>
      </div>
      <div className="m-8 p-2">
        <p className="text-xl text-white align-middle">{description}</p>
      </div>
      <div className="m-8 p-2 flex flex-wrap space-x-4">
        <button className="w-32 pt-3 pb-3 bg-white text-center font-bold rounded-sm inline-flex items-center justify-center space-x-2">
            <PlayButton/><span> Play </span> 
        </button>
        <button className="w-32 pt-3 pb-3 bg-slate-400 text-white text-center font-bold rounded-sm">More Info</button>
      </div>
    </div>
  );
};

export default VideoDetails;
