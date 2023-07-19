import React, { Component } from "react";

class Sort extends Component {
  raiseSort = (path) => {
    const sortOption = { ...this.props.sortOption };
    if (sortOption.path === path) {
      sortOption.order = sortOption.order === "desc" ? "asc" : "desc";
    } else {
      sortOption.path = path;
      sortOption.order = "desc";
    }
    this.props.onSort(sortOption);
  };
  render() {
    return (
      <div className="child-one">
        <button
          type="button"
          onClick={() => this.raiseSort("time")}
          className="btn btn-outline-dark position-relative "
        >
          <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>
          <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary">
            <i className="fa fa-clock-o" aria-hidden="true"></i>
          </span>
        </button>
        <button
          type="button"
          onClick={() => this.raiseSort("views")}
          className="btn btn-outline-dark position-relative"
          style={{ marginLeft: "2px" }}
        >
          <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
            <i className="fa fa-eye" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    );
  }
}

export default Sort;
