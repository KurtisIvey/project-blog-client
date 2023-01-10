import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 py-3.5  dark:bg-gray-900 text-gray-400">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <h2 className=" text-slate-800 text-3xl text-base md:text-2xl">
          <a href="#" className="hover:underline">
            {" "}
            Project Blog
          </a>
        </h2>

        <div className=" flex ">
          <div className="pl-2 pr-2 text-sm md:text-lg">
            <a href="#" className="hover:underline">
              Log In
            </a>
          </div>
          <div className="pl-2   text-sm md:text-lg">
            <a href="#" className="hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
