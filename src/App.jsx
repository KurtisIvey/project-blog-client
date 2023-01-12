import "./App.css";
// components
import Login from "./components/Login.jsx";
import Register from "./components/Register";
import HomePosts from "./components/HomePosts.jsx";
import SinglePost from "./components/SinglePosts.jsx";

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

function App() {
  let { id } = useParams();
  return (
    <div className=" h-full  bg-slate-100 ">
      <BrowserRouter>
        <Routes>
          <Route path="/posts" exact element={<HomePosts />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />

          {/*routes for individual posts */}
          <Route path="/posts/:id" element={<SinglePost id />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
