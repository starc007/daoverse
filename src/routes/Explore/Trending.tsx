import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Polygon DAO doing Something Awesome",
    img: "https://external-preview.redd.it/JoZT8lYRj9v9_lSsJer3W4Z_6sNSv0g8JKiwm5t2zs8.jpg?auto=webp&s=94b4c0168073e70e916b0d3b8e39b58f874b3afe",
    daoName: "Polygon DAO",
    daoAvatar: "https://avatars.dicebear.com/api/pixel-art/1.svg",
  },
  {
    id: 2,
    title: "Polygon DAO doing Something Awesome",
    img: "https://external-preview.redd.it/JoZT8lYRj9v9_lSsJer3W4Z_6sNSv0g8JKiwm5t2zs8.jpg?auto=webp&s=94b4c0168073e70e916b0d3b8e39b58f874b3afe",
    daoName: "Polygon DAO",
    daoAvatar: "https://avatars.dicebear.com/api/pixel-art/2.svg",
  },
  {
    id: 3,
    title: "Polygon DAO doing Something Awesome",
    img: "https://external-preview.redd.it/JoZT8lYRj9v9_lSsJer3W4Z_6sNSv0g8JKiwm5t2zs8.jpg?auto=webp&s=94b4c0168073e70e916b0d3b8e39b58f874b3afe",
    daoName: "Polygon DAO",
    daoAvatar: "https://avatars.dicebear.com/api/pixel-art/3.svg",
  },
  {
    id: 4,
    title: "Polygon DAO doing Something Awesome",
    img: "https://external-preview.redd.it/JoZT8lYRj9v9_lSsJer3W4Z_6sNSv0g8JKiwm5t2zs8.jpg?auto=webp&s=94b4c0168073e70e916b0d3b8e39b58f874b3afe",
    daoName: "Polygon DAO",
    daoAvatar: "https://avatars.dicebear.com/api/pixel-art/4.svg",
  },
];

const Trending = () => {
  return (
    <div className="mt-2">
      <p className="text-sm font-medium txt-dark">Trending Today in DAOs</p>
      <div className="flex flex-wrap my-4 space-x-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full md:w-72 h-48 rounded-xl relative border "
          >
            <img
              className="w-full h-full object-cover object-center img-bright rounded-xl"
              src={item.img}
            />
            <div className="absolute w-full bottom-3 px-4 ">
              <p className="font-semibold text-lg text-white">{item.title}</p>
              <div className="mt-2">
                <Link to="/" className="flex items-center space-x-2">
                  <img className="w-5 h-5 rounded-full" src={item.daoAvatar} />
                  <span className="text-xs font-semibold text-white">
                    {item.daoName}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
