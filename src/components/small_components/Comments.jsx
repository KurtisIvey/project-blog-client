import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dateTimeFullConvert from "../../utilities/dateTimeConvert";

const Comments = () => {
  const [comments, setComments] = useState(null);
  let { id } = useParams();

  async function fetchComments() {
    const response = await fetch(
      `http://localhost:3001/api/posts/${id}/comments`
    );
    const commentRes = await response.json();
    setComments(commentRes.comments);
    //setComments(co.post);
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      {comments &&
        comments.map((comment) => (
          <div
            key={comment._id}
            className="flex flex-col mb-5 shadow-md bg-white rounded"
          >
            <div className="flex items-center justify-between">
              <div className="text-base">{comment.author.username}</div>
              <div className="text-xs md:mr-2">
                {dateTimeFullConvert(comment.timestamp)}
              </div>
            </div>
            <p className="text-xs mt-3">{comment.comment}</p>
          </div>
        ))}
    </div>
  );
};

export default Comments;
