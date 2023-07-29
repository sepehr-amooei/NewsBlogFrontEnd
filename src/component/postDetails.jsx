import React from "react";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import { getNewsById } from "../services/fakeNewsService";
import blogPicture from "../img/2-1.jpg";

export async function loader({ params }) {
  const post = await getNewsById(params.id);
  return post;
}

const PostDetails = () => {
  let params = useParams();
  let history = useNavigate();
  const post = useLoaderData();
  console.log(post);
  return (
    <div style={{ width: "80vw", margin: "20px auto 20px auto" }}>
      <h3>{post.title}</h3>
      <p
        class="text-body-secondary"
        style={{ display: "block", marginBottom: "20px" }}
      >
        Release Date: {formatDate(post.date)}
      </p>
      <img
        src={post.image || blogPicture}
        alt=""
        style={{ display: "block", margin: "20px auto" }}
      />
      <h6>{post.intro}</h6>
      <p>{post.body}</p>

      <button
        className="btn btn-primary mg-3"
        onClick={() => history("/posts")}
      >
        Save
      </button>
    </div>
  );
};
function formatDate(date) {
  return `${date.month} ${date.day}, ${date.year}`;
}
export default PostDetails;
