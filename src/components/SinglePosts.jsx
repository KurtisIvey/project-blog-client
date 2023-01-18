import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./small_components/CommentForm";
import Comments from "./small_components/Comments";
import Footer from "./small_components/Footer";
import Navbar from "./small_components/Navbar";
const { DateTime } = require("luxon");

const SinglePosts = () => {
  let { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    document.title = "Blog | Home";
  }, []);

  async function fetchPost() {
    const response = await fetch(`http://localhost:3001/api/posts/${id}`);
    const postRes = await response.json();
    console.log(postRes);
    setPost(postRes.post);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  function dateTimeConvert(date) {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    return `${day}.${month}.${year}`;
  }

  return (
    <main className=" h-screen overflow-scroll">
      <Navbar />
      <div className="container flex flex-col mx-auto p-5 md:p-4">
        <div className="md:min-h-[400px] mt-5">
          <h2 className="text-2xl">{post && post.title}</h2>
          <div className=" mt-1 flex text-center items-end">
            <div className="text-base">By {post && post.author.username}</div>
            <div className="ml-10 text-sm  text-gray-500">
              {post && dateTimeConvert(post.timestamp)}
            </div>
          </div>
          <p className=" mt-10  mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
            {post && post.textContent}
          </p>
        </div>
        <div className="container mx-auto border-t-8 flex flex-col md:pr-20 md:pl-20">
          <div>Comments</div>
          {window.localStorage.token && <CommentForm />}
          <Comments />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default SinglePosts;
