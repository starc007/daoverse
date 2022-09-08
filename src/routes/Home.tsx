import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="overflow-x-hidden ">
      <section className="pt-12  sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-600 font-inter">
              Find best DAOs to join
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              Explore, Create and Join best{" "}
              <span className="relative inline-flex ">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> DAOs </span>
              </span>
            </p>

            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <Link
                to="/dao/create"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-dark border-2 border-transparent sm:w-auto rounded-lg hover:bg-gray-600"
              >
                Create DAO
              </Link>

              <Link
                to="/explore"
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-lg hover:bg-gray-900 hover:text-white  hover:border-gray-900 "
              >
                Explore
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="pb-12 bg-white">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
            <div className="relative mx-auto">
              <div className="lg:max-w-6xl lg:mx-auto">
                <img
                  className="transform scale-110"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Home;
