import React from "react";
import { useSelector } from "react-redux";

const Movie = (props) => {
  const { id, title, imgURL, videoURL, isTopRated, isRecentlyAdded } =  props?.data;
  return (
    // <div className="w-72 aspect-[16/9] m-2 overflow-hidden">
    //   <img src={imgURL} className="w-full h-full object-contain" alt={title}/>
    // </div>
<div className="w-72 h-96 m-2 bg-contain bg-center" style={{ backgroundImage: `url(${imgURL})` }}>
</div>



  );
};

export default Movie;
