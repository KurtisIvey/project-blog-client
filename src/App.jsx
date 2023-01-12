import "./App.css";
// components
import Login from "./components/Login.jsx";
import Register from "./components/Register";
import HomePosts from "./components/HomePosts.jsx";

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState(null);
  async function fetchPost() {
    const response = await fetch("http://localhost:3001/posts/");
    const postsRes = await response.json();
    setPosts(postsRes.posts);
  }

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className=" h-full  bg-slate-100 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePosts />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
