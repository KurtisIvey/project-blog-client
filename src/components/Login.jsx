import React, { useEffect } from "react";
import Footer from "./small_components/Footer.jsx";
import Navbar from "./small_components/Navbar.jsx";
import Input from "./small_components/Input.jsx";

const Login = () => {
  useEffect(() => {
    document.title = "Blog | Login";
  }, []);
  return (
    <div className=" h-screen  bg-slate-100 overflow-hidden">
      <Navbar />
      <form className="flex h-full ">
        <div className=" flex flex-col m-auto pb-28 md:">
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="name@email.com"
          />
          <Input name="password" label="Your password" type="password" />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
