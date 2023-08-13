import React, { Component } from "react";
import { getCategory } from "../services/fakeCategoryService";
import blogPicture from "../img/2-1.jpg";
import PostCards from "./postCards";
import Pagination from "./common/pagination";
import DropDown from "./common/dropDown";
import Sort from "./sort";
import paginate from "../functions/paginate";
import _ from "lodash";
import SearchBox from "./common/searchBox";
import SortButton from "./common/sortButton";
import { Link } from "react-router-dom";

class News extends Component {
  state = {
    news: [],
    categories: [],
    pageSize: 3,
    currentPage: 1,
    searchQuery: "",
    selectedCategory: null,
    sortOption: { path: "time", order: "desc" },
  };
  componentDidMount() {
    const categories = [{ _id: "", name: "All Categories" }, ...getCategory()];
    this.setState({ news: this.props.posts, categories });
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
    this.setState({
      selectedCategory: category,
      searchQuery: "",
      currentPage: 1,
    });
  };
  handleSort = (sortOption) => {
    this.setState({ sortOption, currentPage: 1 });
  };
  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };
  getPageData = () => {
    const {
      currentPage,
      pageSize,
      news: allNews,
      selectedCategory,
      sortOption,
      searchQuery,
    } = this.state;
    let filtered = allNews;
    if (searchQuery)
      filtered = allNews.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    else if (selectedCategory && selectedCategory._id)
      filtered = allNews.filter(
        (post) => post.category._id === selectedCategory._id
      );
    const sorted = _.orderBy(filtered, [sortOption.path], [sortOption.order]);
    const news = paginate(sorted, currentPage, pageSize);
    const totalCount = filtered.length;
    return { data: news, totalCount };
  };
  render() {
    const {
      currentPage,
      pageSize,
      categories,
      selectedCategory,
      sortOption,
      searchQuery,
    } = this.state;
    const { totalCount, data: news } = this.getPageData();
    if (totalCount === 0)
      return (
        <div className="center">
          <div className="alert alert-danger" role="alert">
            there are no posts in the database
          </div>
          <div className="header">
            <DropDown
              id="filterBox"
              dropDownItems={categories}
              selectedItem={selectedCategory}
              onSelectItem={this.handleCategorySelect}
            />
            <SearchBox
              value={searchQuery}
              onChange={this.handleSearch}
              id="searchBox"
            />
            <Link to={"/postform/new"} className="btn btn-primary" id="newBtn">
              New Post
            </Link>
            <Sort
              onSort={this.handleSort}
              sortOption={sortOption}
              id="sortBox"
            />
          </div>
        </div>
      );
    return (
      <div className="center">
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Showing {totalCount} posts in the database
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <div className="header">
          <DropDown
            id="filterBox"
            dropDownItems={categories}
            selectedItem={selectedCategory}
            onSelectItem={this.handleCategorySelect}
          />
          <SearchBox
            value={searchQuery}
            onChange={this.handleSearch}
            id="searchBox"
          />
          <Link to={"/postform/new"} className="btn btn-primary" id="newBtn">
            New Post
          </Link>
          <Sort onSort={this.handleSort} sortOption={sortOption} id="sortBox" />
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
