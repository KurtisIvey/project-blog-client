import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./small_components/Footer";
import Navbar from "./small_components/Navbar";
import PostCard from "./small_components/PostCard";

const HomePosts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    document.title = "Blog | Home";
  }, []);

  async function fetchPosts() {
    const response = await fetch(
      "https://project-blog-api.herokuapp.com/api/posts"
    );

    const postsRes = await response.json();
    setPosts(postsRes.posts);
    //console.log(posts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 p-5">
        {posts &&
          posts.map((post) => (
            <div key={post._id}>
              <PostCard
                title={post.title}
                id={post._id}
                textContent={post.textContent}
              />
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default HomePosts;
