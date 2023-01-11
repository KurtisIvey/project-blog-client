import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 py-3.5 tracking-tight dark:bg-gray-900 text-gray-500">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <h2 className=" text-slate-800 text-3xl text-base md:text-2xl">
          <a href="#" className="hover:underline">
            {" "}
            Project Blog
          </a>
        </h2>
        <div className=" flex ">
          <div className="pl-2 pr-2 text-sm md:text-lg">
            <Link className="hover:underline" to="/login">
              Log In
            </Link>
          </div>
          <div className="pl-2   text-sm md:text-lg">
            <Link className="hover:underline" to="/register">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
