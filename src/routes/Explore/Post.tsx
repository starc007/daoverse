import React from "react";
import { Link } from "react-router-dom";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { FaRegCommentAlt } from "react-icons/fa";

const PostData = [
  {
    id: 1,
    daoName: "Polygon DAO",
    daoAvatar: "https://avatars.dicebear.com/api/pixel-art/1.svg",
    postTitle: "How to create a DAO",
    postDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ld aldj adisoad aid iad i daid idpaudoiudoidoisdoiadsoidoi d ousaidoi Lorem ipsum dolor sit amet, consectetur adipiscing elit. ld aldj adisoad aid iad i daid idpaudoiudoidoisdoiadsoidoi d ousaidoi",
    createdAt: "2h ago",
    postedBy: "0x123456789ajdgjahsgdsas",
  },
  {
    id: 2,
    daoName: "Uniswap DAO",
    daoAvatar: "https://avatars.dicebear.com/api/pixel-art/2.svg",
    postTitle: "best practices for DAOs",
    postDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ld aldj adisoad aid iad i daid idpaudoiudoidoisdoiadsoidoi d ousaidoi Lorem ipsum dolor sit amet, consectetur adipiscing elit. ld aldj adisoad aid iad i daid idpaudoiudoidoisdoiadsoidoi d ousaidoi",
    createdAt: "2h ago",
    postedBy: "0x123456789ajdgjahsgdsas",
  },
];

const Post = () => {
  return (
    <div className="flex flex-col space-y-5">
      {PostData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col space-y-2 border rounded md:p-5 p-3"
        >
          <div className="flex justify-between w-full items-center">
            <div className="flex space-x-3">
              <img
                className="w-10 h-10 rounded-full border"
                src={item.daoAvatar}
              />

              <div className="flex flex-col">
                <p className="text-sm font-bold">{item.daoName}</p>
                <div className="flex space-x-1 md:space-x-2 items-center">
                  <p className="text-xs font-semibold text-gray-500">
                    {item.createdAt}
                  </p>
                  <span>|</span>
                  <div className="flex items-center text-xs space-x-1 font-semibold text-gray-500">
                    <span>Posted by </span>
                    <Link
                      to="/"
                      className="hover:underline md:w-28 w-16 truncate txt-dark"
                    >
                      {item.postedBy}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-dark text-white h-8 text-sm font-medium w-16 rounded-lg">
              Join
            </button>
          </div>
          <Link
            to={`/${item.id}/${item.postTitle.replace(/\s+/g, "-")}`}
            className="text-xl font-semibold txt-dark pt-4 px-1"
          >
            {item.postTitle}
          </Link>
          <p className="text-sm text-gray-500 font-medium truncate px-1">
            {item.postDescription}
          </p>
          <div className="flex pt-3 items-center space-x-10">
            <div className="flex items-center space-x-2">
              <button className="text-gray-500  hover:bg-gray-100 transition duration-500 flex justify-center items-center">
                <TiArrowSortedUp size={35} />
              </button>
              <p className="text-gray-500 font-sans font-semibold">34</p>
              <button className="text-gray-500  hover:bg-gray-100 transition duration-500 flex justify-center items-center">
                <TiArrowSortedDown size={35} />
              </button>
            </div>
            <div className="flex items-center space-x-2 ">
              <button className="text-gray-500 flex justify-center items-center">
                <FaRegCommentAlt size={18} />
              </button>
              <p className="text-gray-500 text-sm font-semibold font-sans">
                69 comments
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
