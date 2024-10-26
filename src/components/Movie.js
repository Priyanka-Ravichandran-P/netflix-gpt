import React from "react";

const Movie = (props) => {
  const { imgURL } =
    props?.data;
  return (
    <div className="cursor-pointer rounded-sm flex-shrink-0 w-72 h-96 bg-contain bg-center" style={{ backgroundImage: `url(${imgURL})` }}></div>
  );
};

export default Movie;
