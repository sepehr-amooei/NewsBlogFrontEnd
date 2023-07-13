import React, { Component } from "react";
import { getNews } from "../services/fakeNewsService";
import blogPicture from "../img/2-1.jpg";
import formatDate from "../functions/formatDate";

class News extends Component {
  state = {
    news: getNews(),
  };
  render() {
    return this.state.news.map((n) => (
      <div
        className="card"
        style={{ width: "50vw", margin: "20px auto 20px auto" }}
      >
        <img
          src={blogPicture}
          className="card-img-top"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title"> {n.title} </h5>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p className="badge text-bg-dark">{n.category.name}</p>
          </div>

          <h6 className="card-subtitle mb-2 text-body-secondary">
            {formatDate(n.date)}
          </h6>
          <p className="card-text">{n.intro}</p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    ));
  }
}

export default News;
