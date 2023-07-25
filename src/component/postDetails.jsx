import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostDetails = () => {
  let params = useParams();
  let history = useNavigate();
  return (
    <div>
      <h1>Post details{params.id}</h1>
      <button className="btn btn-primary" onClick={() => history("/posts")}>
        Save
      </button>
    </div>
  );
};

export default PostDetails;
