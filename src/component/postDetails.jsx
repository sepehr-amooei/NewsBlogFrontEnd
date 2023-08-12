import React from "react";
import { useParams, useNavigate, useLoaderData, Link } from "react-router-dom";
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
  return (
    <div className="postContainer">
      <div className="postTitle">
        <h3>{post.title}</h3>
        <p
          className="text-body-secondary"
          style={{ display: "block", marginBottom: "20px" }}
        >
          Release Date: {formatDate(post.date)}
        </p>
      </div>
      <img
        src={post.image || blogPicture}
        alt=""
        style={{ display: "block", margin: "20px auto" }}
        className="postImg img-fluid"
      />
      <h6 className="postIntro">{post.intro}</h6>
      <div className="postBody">
        <p>{post.body}</p>
        <Link className="btn btn-primary mg-3" to={`/posts/edit/${params.id}`}>
          Edit
        </Link>
      </div>
    </div>
  );
};
function formatDate(date) {
  return `${date.month} ${date.day}, ${date.year}`;
}
export default PostDetails;
