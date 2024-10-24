import React from "react";
import PlayButton from "./PlayButton";

const VideoDetails = (props) => {
  const { title, description } = props?.data;
  return (
    // 
    <div className="w-screen aspect-video absolute z-50 top-40 text-white">
      <div className="m-8 p-2 rounded-sm w-[50ch]">
        <label className="text-5xl font-bold  align-middle">{title}</label>
      </div>
      <div className="m-8 p-2 w-[50ch]">
        <p className="text-xl align-middle">{description}</p>
      </div>
      <div className="m-8 p-2 flex flex-wrap space-x-4">
        <button className="w-32 pt-3 pb-3 bg-white text-black text-center font-bold rounded-sm inline-flex items-center justify-center space-x-2 hover:opacity-50">
            <PlayButton/><span> Play </span> 
        </button>
        <button className="w-32 pt-3 pb-3 bg-slate-400 text-center font-bold rounded-sm">More Info</button>
      </div>
    </div>
  );
};

export default VideoDetails;
