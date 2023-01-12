import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./small_components/Footer";
import Navbar from "./small_components/Navbar";

const SinglePosts = () => {
  let { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    document.title = "Blog | Home";
  }, []);

  async function fetchPost() {
    const response = await fetch(`http://localhost:3001/posts/${id}`);
    const postRes = await response.json();
    console.log(postRes.post);
  }

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div>
      <Navbar />
      <div>{id}</div>
      <button onClick={() => console.log(id)}>console log id</button>
      <Footer />
    </div>
  );
};

export default SinglePosts;
