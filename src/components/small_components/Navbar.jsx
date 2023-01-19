import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userJwt = jwt.decode(token);
      if (!userJwt) {
        localStorage.removeItem("token");
      } else {
        setUser(userJwt);
      }
    }
  }, []);

  function logoutUser() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }

  return (
    <nav className="bg-white px-2 sm:px-4 py-3.5 tracking-tight dark:bg-gray-900 text-gray-500 ">
      <div className="container flex flex-col md:flex-row md:flex-wrap items-center md:pr-6 md:pl-6 justify-between mx-auto">
        <h2 className=" text-slate-800 text-3xl text-base md:text-2xl">
          <Link className="hover:underline" to="/">
            Project Blog
          </Link>
        </h2>
        <ul className=" flex mt-2 md:mt-0 ">
          {user ? (
            <li
              onClick={logoutUser}
              className="pr-7 md:pl-2 md:pr-2 text-sm md:text-lg hover:underline cursor-pointer"
            >
              Log Out
            </li>
          ) : (
            <>
              <li className="pr-7 md:pl-2 md:pr-2 text-sm md:text-lg">
                <Link className="hover:underline" to="/login">
                  Log In
                </Link>
              </li>
              <li className="pl-7 md:pl-6   text-sm md:text-lg">
                <Link className="hover:underline" to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
