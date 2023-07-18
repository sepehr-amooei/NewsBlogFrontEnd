import React, { Component } from "react";
import { getNews } from "../services/fakeNewsService";
import { getCategory } from "../services/fakeCategoryService";
import blogPicture from "../img/2-1.jpg";
import PostCards from "./postCards";
import Pagination from "./common/pagination";
import DropDown from "./common/dropDown";
import Sort from "./sort";
import paginate from "../functions/paginate";

class News extends Component {
  state = {
    news: [],
    categories: [],
    pageSize: 3,
    currentPage: 1,
  };
  componentDidMount() {
    const categories = [{ _id: "", name: "All Categories" }, ...getCategory()];
    this.setState({ news: getNews(), categories });
  }
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
  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category, currentPage: 1 });
  };

  render() {
    const {
      currentPage,
      pageSize,
      news: allNews,
      categories,
      selectedCategory,
    } = this.state;
    const filterd =
      selectedCategory && selectedCategory._id
        ? allNews.filter((news) => news.category._id === selectedCategory._id)
        : allNews;
    const news = paginate(filterd, currentPage, pageSize);
    const totalCount = filterd.length;
    if (totalCount === 0) return <p>there are no posts in the database</p>;
    return (
      <div className="center">
        <p>Showing {totalCount} posts in the database </p>
        <div className="parent">
          <Sort />
          <DropDown
            dropDownItems={categories}
            selectedItem={selectedCategory}
            onSelectItem={this.handleCategorySelect}
          />
        </div>
        <PostCards
          news={news}
          blogPicture={blogPicture}
          formatDate={this.formatDate}
          onClick={this.handleClick}
          onSave={this.handleSave}
        />
        <div className="parent">
          <div id="centerPaginate">
            <Pagination
              currentPage={currentPage}
              itemCount={totalCount}
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
