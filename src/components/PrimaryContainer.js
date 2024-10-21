import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import VideoDetails from './VideoDetails';
import VideoContainer from './VideoContainer';
import Header from "./Header";
import HeadearUserDropDownMenu from "./HeadearUserDropDownMenu";
const PrimaryContainer = () => {
    const listOfMovies = useSelector((store) => store.moviesReducer);
    const [isHeaderDropDownOn, setHeaderDropDown] = useState(false);
    if(listOfMovies.length === 0) return;
    const Movie = listOfMovies[0];
    console.log(" listOfMoc:: ", Movie);
    const handleProfileClick = () => {
        setHeaderDropDown(!isHeaderDropDownOn);
      };
    
  return (
    <div className="relative h-full w-full">
              <Header onClick={handleProfileClick} />
      {isHeaderDropDownOn ? (
        <div className="absolute right-4 top-[4.2rem]">
          <HeadearUserDropDownMenu />
        </div>
      ) : null}
        <VideoDetails data={Movie}/>
        <VideoContainer data={Movie}/>
    </div>
  )
}

export default PrimaryContainer