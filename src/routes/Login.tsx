import React from "react";

const Login = () => {
  return (
    <section className="flex justify-center mt-20">
      <div className="w-full max-w-xl mx-auto ">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
            <span className="relative inline-flex sm:inline">
              <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
              <span className="relative"> Sign in </span>
            </span>
          </h2>
        </div>

        <div className="mt-8">
          <div className="mt-6">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-600">
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-neutral-600">
                  {" "}
                  Password{" "}
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    required
                    placeholder="Your Password"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  />
                </div>
              </div>

              <div>
                <div className="relative inline-flex mt-6 group w-full">
                  <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg animate-tilt"></div>

                  <button
                    type="submit"
                    className="relative flex items-center justify-center w-full px-10 py-4 text-base font-medium bg-gray-800 text-white rounded-xl"
                  >
                    Sign in
                  </button>
                </div>
                {/* <button
                  type="submit"
                  className="flex items-center justify-center w-full px-10 py-4 text-base font-medium bg-gray-800 text-white rounded-xl"
                >
                  Sign in
                </button> */}
              </div>
            </form>
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-neutral-600 bg-white">
                  {" "}
                  Or continue with{" "}
                </span>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center justify-center w-full px-10 py-4 text-base font-medium border border-gray-800 text-gray-800 rounded-xl"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
