import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./small_components/Footer";
import Navbar from "./small_components/Navbar";

const HomePosts = () => {
  useEffect(() => {
    document.title = "Blog | Home";
  }, []);

  const [posts, setPosts] = useState(null);
  async function fetchPosts() {
    const response = await fetch("http://localhost:3001/posts/");
    const postsRes = await response.json();
    setPosts(postsRes.posts);
    console.log(posts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <Navbar />
      {posts &&
        posts.map((post) => (
          <div key={post._id}>
            <Link className="hover:underline" to={`/posts/${post._id}`}>
              {post.title}
            </Link>
          </div>
        ))}
      <Footer />
    </div>
  );
};

export default HomePosts;
