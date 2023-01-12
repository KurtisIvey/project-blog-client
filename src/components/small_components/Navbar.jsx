import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 py-3.5 tracking-tight dark:bg-gray-900 text-gray-500">
      <div className="container flex flex-col md:flex-row md:flex-wrap items-center justify-between mx-auto">
        <h2 className=" text-slate-800 text-3xl text-base md:text-2xl">
          <a href="#" className="hover:underline">
            {" "}
            Project Blog
          </a>
        </h2>
        <ul className=" flex mt-2 md:mt-0 ">
          <li className="pr-7 md:pl-2 md:pr-2 text-sm md:text-lg">
            <Link className="hover:underline" to="/login">
              Log In
            </Link>
          </li>
          <li className="pl-7 md:pl-2   text-sm md:text-lg">
            <Link className="hover:underline" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
