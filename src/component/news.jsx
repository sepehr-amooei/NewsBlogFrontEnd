import React, { Component } from "react";
import { getNews } from "../services/fakeNewsService";
import blogPicture from "../img/2-1.jpg";
import Save from "./common/save";
import Pagination from "./common/pagination";
import Sort from "./sort";
import paginate from "../functions/paginate";

class News extends Component {
  state = {
    news: getNews(),
    pageSize: 4,
    currentPage: 1,
  };
  handleSave = (n) => {
    const news = [...this.state.news];
    const index = news.indexOf(n);
    news[index] = { ...news[index] };
    news[index].saved = !news[index].saved;
    this.setState({ news });
  };
  handleClick = (n) => {
    const news = [...this.state.news];
    const index = news.indexOf(n);
    news[index] = { ...news[index] };
    news[index].views++;
    this.setState({ news });
  };
  handlePageChange = (pageNumber) => {
    const currentPage = pageNumber;
    this.setState({ currentPage });
  };

  render() {
    const { currentPage, pageSize, news: allNews } = this.state;
    const news = paginate(allNews, currentPage, pageSize);

    const { length: count } = this.state.news;
    if (count === 0) return <p>there are no posts in the database</p>;
    return (
      <div className="center">
        <div className="parent">
          <Sort />
          <div>
            <p>Showing {count} posts in the database </p>
          </div>
        </div>

        {news.map((n) => (
          <div
            className="card"
            style={{ margin: "20px auto 20px auto" }}
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
                <span
                  className="badge text-bg-dark"
                  style={{ marginLeft: "5px" }}
                >
                  <i className="fa fa-eye" aria-hidden="true"></i>
                  <span style={{ marginLeft: "5px" }}>{n.views}</span>
                </span>
              </div>

              <h6 className="card-subtitle mb-2 text-body-secondary">
                {this.formatDate(n.date)}
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
                <Save saved={n.saved} onSave={() => this.handleSave(n)} />
              </div>
            </div>
          </div>
        ))}
        <div className="parent">
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
          >
            <Pagination
              currentPage={currentPage}
              itemCount={count}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
  formatDate(date) {
    return `${date.month} ${date.day}, ${date.year}`;
  }
}

export default News;
