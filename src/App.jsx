import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PostCard from "./components/PostCard";
import { useEffect, useState } from "react";

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
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <button onClick={() => console.log(posts)}>see posts</button>
        <PostCard />
      </div>

      <Footer />
    </div>
  );
}

export default App;
