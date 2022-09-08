import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

declare const window: any;

const { ethereum } = window;

const Navbar = () => {
  const navigation = [
    { title: "Explore", path: "/explore" },
    { title: "Create DAO", path: "/dao/create" },
    { title: "All DAOs", path: "/all-daos" },
    // { title: "WITHDRAW", path: "/" },
    // { title: "PAIR", path: "/join-us" },
  ];
  const [visible, setVisible] = useState<Boolean>(false);

  const connectWallet = async () => {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="py-3 z-20 lg:px-20 px-4 w-full glass-bg top-0 fixed mx-0">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <Link to="/" className="text-3xl font-bold text-black">
          Daoverse
        </Link>
        <div className="flex items-center md:space-x-10 space-x-5">
          <div className="pb-3 mt-1 md:block hidden md:pb-0 md:mt-0 ">
            <ul className=" md:flex md:space-x-7 lg:space-x-10">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="">
                    <Link to={item.path} className="txt-dark font-semibold">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <Dropdown /> */}
          <button
            onClick={connectWallet}
            className="flex items-center justify-center px-4 h-10 rounded-lg text-sm bg-dark text-white font-medium md:block hidden"
          >
            Connect Wallet
          </button>
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-800 relative outline-none p-2 focus:outline-none transition duration-500 ease-in-out"
              onClick={() => setVisible(!visible)}
            >
              {visible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
            {visible && (
              <div className="absolute top-14 right-6 z-20 w-40 py-2 bg-white border rounded shadow-xl ">
                <ul className=" flex flex-col">
                  {navigation.map((item, idx) => {
                    return (
                      <li key={idx}>
                        <Link
                          className="block px-4 py-3 font-medium text-sm txt-dark capitalize duration-500 hover:bg-gray-100 "
                          to={item.path}
                          onClick={() => setVisible(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                  <li>
                    <button className="mt-3 flex items-center justify-center px-5 h-11 rounded-lg bg-dark text-white text-sm font-medium mx-2">
                      Connect Wallet
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
