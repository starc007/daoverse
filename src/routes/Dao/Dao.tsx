import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Polygon DAO",
    img: "https://avatars.dicebear.com/api/pixel-art/11.svg",
    totalMembers: 100,
  },
  {
    id: 2,
    title: "Polygon DAO",
    img: "https://avatars.dicebear.com/api/pixel-art/12.svg",
    totalMembers: 100,
  },
  {
    id: 3,
    title: "Polygon DAO",
    img: "https://avatars.dicebear.com/api/pixel-art/69.svg",
    totalMembers: 100,
  },
];

const Dao = () => {
  return (
    <div className="flex flex-wrap my-5 md:space-x-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-full md:w-64 px-4 mt-4 flex flex-col items-center border border-gray-300 p-6 rounded-lg hover:shadow-lg transition duration-500 ease-in-out"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-20 h-20 rounded-full border"
          />
          <Link to="/" className="text-lg txt-dark font-semibold pt-3">
            {item.title}
          </Link>
          <p className="text-gray-500">{item.totalMembers} Members</p>
          <button className="text-gray-200 bg-dark text-sm w-16 h-9 rounded-lg mt-4 font-medium">
            Join
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dao;
