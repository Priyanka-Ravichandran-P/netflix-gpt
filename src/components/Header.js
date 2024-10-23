import React, { useState } from "react";
import Logo from "./Logo";
import { PROFILE_PICTURE } from "../services/apiService";
import HeadearUserDropDownMenu from "./HeadearUserDropDownMenu";

const Header = () => {
  const [isHeaderDropDownOn, setHeaderDropDown] = useState(false);
  const handleProfileClick = () => {
    setHeaderDropDown(!isHeaderDropDownOn);
  };

  const bottomTriangle = ` border-t-[5px]  border-l-[5px] border-r-[5px]  border-t-white
                border-l-transparent border-r-transparent `;
  const topTriangle = `border-b-[5px]  border-l-[5px] border-r-[5px]  border-b-white
                border-l-transparent border-r-transparent `;

  return (
    <div className="absolute z-50 flex flex-row justify-between h-16 w-full">
      <div className="flex flex-row justify-between items-center">
        <div className="w-28 ml-8 mr-8">
          <Logo />
        </div>
        <nav className="flex flex-row text-white">
          <div className="pl-2 pr-2 cursor-pointer"> Home </div>
          <div className="pl-2 pr-2 cursor-pointer"> TV Shows </div>
          <div className="pl-2 pr-2 cursor-pointer"> Movies </div>
          <div className="pl-2 pr-2 cursor-pointer"> New & Popular </div>
          <div className="pl-2 pr-2 cursor-pointer"> My List</div>
          <div className="pl-2 pr-2 cursor-pointer"> Browse by Languages</div>
        </nav>
      </div>

      <div className="mr-10 flex flex-row items-center justify-end">
        <img
          className="h-8 w-8 rounded-md"
          src={PROFILE_PICTURE}
          alt=""
        />
        <span className="pl-2 pr-2 pt-4 pb-1">
          <div 
            className={`cursor-pointer border-solid ${isHeaderDropDownOn ? bottomTriangle : topTriangle}`} onClick={handleProfileClick}
          ></div>{" "}
        </span>
      </div>
      {isHeaderDropDownOn ? (
        <div className="absolute z-50 right-4 top-[4.2rem]">
          <HeadearUserDropDownMenu />
        </div>
      ) : null}
    </div>
    
  );
};

export default Header;
