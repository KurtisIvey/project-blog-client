import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CommentForm = () => {
  let { id } = useParams();
  const [comment, setComment] = useState("");

  async function addComment(event) {
    event.preventDefault();

    const response = await fetch(
      `http://localhost:3001/api/posts/${id}/comments`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: window.localStorage.token,
        },

        body: JSON.stringify({
          comment,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="flex mt-10 mb-10  items-center justify-center shadow-lg max-w-lg">
      <form
        onSubmit={(e) => addComment(e)}
        className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
            Add a new comment
          </h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              onChange={(e) => setComment(e.target.value)}
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="comment"
              placeholder="Type Your Comment"
              value={comment}
              required
            ></textarea>
          </div>
          <div className="w-full md:w-full flex items-start px-3">
            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto"></div>
            <div className="-mr-1">
              <input
                type="submit"
                className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                value="Post Comment"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
