import React, { useEffect, useState } from "react";
import Footer from "./small_components/Footer.jsx";
import Navbar from "./small_components/Navbar.jsx";
import Input from "./small_components/Input.jsx";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    document.title = "Blog | Register";
  }, []);

  async function registerUser(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://project-blog-api.herokuapp.com/api/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );
      //
      const data = await response.json();
      if (response.status !== 201) {
        setErrMessage(data.errors);
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className=" h-screen  bg-slate-100 overflow-hidden">
      <Navbar />
      <form onSubmit={(e) => registerUser(e)} className="flex h-full">
        <div className=" flex flex-col m-auto pb-28 md:">
          <Input
            name="username"
            label="Username"
            type="text"
            placeholder="enter a username"
            onChange={setUsername}
            value={username}
          />{" "}
          <span className="text-xs mb-2 text-red-500">{errMessage.email}</span>
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="name@email.com"
            onChange={setEmail}
            value={email}
          />
          <span className="text-xs mb-2 text-red-500"></span>
          <Input
            name="password"
            label="Your password"
            type="password"
            onChange={setPassword}
            value={password}
            minlength={6}
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Register;
