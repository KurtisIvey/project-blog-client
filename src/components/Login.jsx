import React, { useEffect, useState } from "react";
import Footer from "./small_components/Footer.jsx";
import Navbar from "./small_components/Navbar.jsx";
import Input from "./small_components/Input.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    document.title = "Blog | Login";
  }, []);

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data.errors);
    console.log(response.status);
    if (data.user) {
      localStorage.setItem("token", data.token);
      alert("Login successful");
      navigate("/");
    } else {
      setErrMessage(data.errors);
      if (data.errors.password) {
        setPassword("");
      } else if (data.errors.email) {
        setPassword("");
        setEmail("");
      }
    }
  }
  return (
    <div className=" h-screen  bg-slate-100 overflow-hidden">
      <Navbar />
      <form className="flex h-full " onSubmit={(e) => loginUser(e)}>
        <div className=" flex flex-col m-auto pb-28 md:">
          <span className="text-xs mb-2 text-red-500">{errMessage.email}</span>

          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="name@email.com"
            onChange={setEmail}
            value={email}
          />
          <span className="text-xs mb-2 text-red-500">
            {errMessage.password}
          </span>

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
            Login
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
