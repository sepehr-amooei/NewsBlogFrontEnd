import React from "react";
import Save from "./common/save";
import { Link } from "react-router-dom";

const PostCards = ({ news, blogPicture, formatDate, onClick, onSave }) => {
  return news.map((n) => (
    <div className="card" style={{ margin: "20px auto 20px auto" }} key={n._id}>
      <img
        src={blogPicture}
        className="card-img-top"
        style={{ height: "300px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5 className="card-title"> {n.title} </h5>
        <div
          style={{
            margin: "10px 0",
          }}
        >
          <span className="badge text-bg-dark">{n.category.name}</span>
          <span className="badge text-bg-dark" style={{ marginLeft: "5px" }}>
            <i className="fa fa-eye" aria-hidden="true"></i>
            <span style={{ marginLeft: "5px" }}>{n.views}</span>
          </span>
        </div>

        <h6 className="card-subtitle mb-2 text-body-secondary">
          {formatDate(n.date)}
        </h6>
        <p className="card-text">{n.intro}</p>
        <div>
          <Link
            to={`/posts/${n._id}`}
            onClick={() => onClick(n)}
            className="btn btn-primary btn-sm"
          >
            Read More
          </Link>
          <Save saved={n.saved} onSave={() => onSave(n)} />
        </div>
      </div>
    </div>
  ));
};

export default PostCards;
