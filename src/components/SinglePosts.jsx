import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./small_components/CommentForm";
import Comments from "./small_components/Comments";
import Footer from "./small_components/Footer";
import Navbar from "./small_components/Navbar";
import dateTimeFullConvert from "../utilities/dateTimeFullConvert";

const SinglePosts = () => {
  let { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (post) {
      document.title = `Blog | ${post.title}`;
    } else {
      document.title = "Blog | Post";
    }
  }, [post]);

  async function fetchPost() {
    const response = await fetch(
      `https://project-blog-api.herokuapp.com/api/posts/${id}`
    );
    const postRes = await response.json();
    setPost(postRes.post);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <main className=" h-screen overflow-scroll">
      <Navbar />
      {post && (
        <div className="container flex flex-col mx-auto p-5 md:p-4">
          <div className="min-h-[400px]  mt-5">
            <h2 className="text-xl md:text-2xl">{post.title}</h2>
            <div className=" mt-1 flex text-center items-end">
              <div className="text-base">By {post.author.username}</div>
              <div
                className="ml-10 text-sm  text-gray-500"
                onClick={() => console.log(post.timestamp)}
              >
                {dateTimeFullConvert(post.timestamp)}
              </div>
            </div>
            <p className="text-sm md:text-base mt-10  mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-5xl md:first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
              {post.textContent}
            </p>
          </div>
          <div className="container mx-auto border-t-8 flex flex-col md:pr-20 md:pl-20">
            <div className="mt-3">Comments</div>
            <CommentForm />

            <Comments />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default SinglePosts;
