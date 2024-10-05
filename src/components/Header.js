import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex flex-row justify-between bg-slate-500 h-16">
      <div className="flex flex-row justify-between items-center">
        <div className="w-28 ml-8 mr-8">
          <Logo />
        </div>
        <nav className="flex flex-row text-white">
          <div className="pl-2 pr-2"> Home </div>
          <div className="pl-2 pr-2"> TV Shows </div>
          <div className="pl-2 pr-2"> Movies </div>
          <div className="pl-2 pr-2"> New & Popular </div>
          <div className="pl-2 pr-2"> My List</div>
          <div className="pl-2 pr-2"> Browse by Languages</div>
        </nav>
      </div>

      <div className="mr-10 flex flex-row items-center">
        <img
          className="h-8 w-8 rounded-md"
          src="https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          alt=""
        />
        <span className="pl-2 pr-2 pt-4 pb-1">
          <div
            className="border-solid border-t-[5px]  border-l-[5px] border-r-[5px] border-b-0 border-t-white
          border-l-transparent border-r-transparent border-b-transparent"
          ></div>{" "}
        </span>
      </div>
    </div>
  );
};

export default Header;
