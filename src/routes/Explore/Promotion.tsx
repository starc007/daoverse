import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    daoName: "Polygon DAO",
    daoAvatar: "https://avatars.dicebear.com/api/pixel-art/1.svg",
  },
  {
    id: 2,
    daoName: "Polygon DAO",
    daoAvatar: "https://avatars.dicebear.com/api/pixel-art/2.svg",
  },
  {
    id: 3,
    daoName: "Polygon DAO",
    daoAvatar: "https://avatars.dicebear.com/api/pixel-art/3.svg",
  },
  {
    id: 4,
    daoName: "Polygon DAO",
    daoAvatar: "https://avatars.dicebear.com/api/pixel-art/4.svg",
  },
  {
    id: 5,
    daoName: "Polygon DAO",
    daoAvatar: "https://avatars.dicebear.com/api/pixel-art/5.svg",
  },
];

const Promotion = () => {
  return (
    <div className="">
      <p className="border-b text-center txt-dark py-3 font-semibold">
        Promoted DAOs
      </p>
      <div className="flex flex-col items-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between w-full border-b px-4 py-4"
          >
            <div className="flex items-center space-x-2">
              <label className="text-xl txt-dark mx-4">{item.id}</label>
              <img
                className="w-9 h-9 rounded-full border"
                src={item.daoAvatar}
              />
              <Link to="/dao" className="text-sm font-bold text-gray-600">
                {item.daoName}
              </Link>
            </div>
            <button className="bg-dark text-white h-8 text-sm font-medium w-16 rounded-lg">
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotion;
