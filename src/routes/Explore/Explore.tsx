import React from "react";
import { GiNewShoot, GiHotSurface } from "react-icons/gi";
import { FaHotjar } from "react-icons/fa";
import Post from "./Post";
import Trending from "./Trending";
import Promotion from "./Promotion";

const Explore = () => {
  const activeClass =
    "flex items-center text-sm font-bold text-gray-800 bg-gray-100 rounded-xl px-3 h-10";

  const inactiveClass =
    "flex items-center text-sm font-bold text-gray-800  rounded-xl px-3 h-10 hover:bg-gray-100 transition duration-200 ease-in-out";

  return (
    <div className="my-8">
      {/* <Trending /> */}

      <p className="text-gray-800 font-bold text-2xl mt-8">
        <span className="relative inline-flex sm:inline">
          <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
          <span className="relative">Look what's happening in DAOs </span>
        </span>
      </p>
      <div className="border mt-6 px-3 h-16 flex items-center space-x-3 rounded">
        <button className={activeClass}>
          <GiNewShoot className="mr-1 text-xl " />
          New
        </button>
        <button className={inactiveClass}>
          <GiHotSurface className="mr-2 text-xl" />
          Hot
        </button>
      </div>
      <div className="mt-4 flex justify-between lg:space-x-12">
        <div className="lg:w-2/3 w-full">
          <Post />
        </div>
        <div className="w-1/3 border rounded lg:block hidden h-[395px]">
          <Promotion />
        </div>
      </div>
    </div>
  );
};

export default Explore;
