import React, { Component } from "react";
import { getNews } from "../services/fakeNewsService";
import blogPicture from "../img/2-1.jpg";
import formatDate from "../functions/formatDate";

class News extends Component {
  state = {
    news: getNews(),
  };
  handleSave = (n) => {
    const news = [...this.state.news];
    const index = news.indexOf(n);
    news[index] = { ...n };
    news[index].saved = !news[index].saved;
    this.setState({ news });
  };
  handleClick = (n) => {
    const news = [...this.state.news];
    const index = news.indexOf(n);
    news[index] = { ...n };
    news[index].views++;
    this.setState({ news });
  };
  render() {
    return this.state.news.map((n) => (
      <div
        className="card"
        style={{ width: "50vw", margin: "20px auto 20px auto" }}
        key={n._id}
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
            <a
              href="#/"
              onClick={() => this.handleClick(n)}
              className="btn btn-primary btn-sm"
            >
              Read More
            </a>
            <button
              className={
                n.saved === false
                  ? "fa fa-bookmark btn btn-primary btn-sm"
                  : "fa fa-bookmark-o btn btn-primary btn-sm"
              }
              aria-hidden="true"
              style={{
                marginLeft: "10px",
              }}
              onClick={() => this.handleSave(n)}
            ></button>
          </div>
        </div>
      </div>
    ));
  }
}

export default News;
