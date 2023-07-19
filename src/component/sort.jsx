import React, { Component } from "react";
import SortButton from "./common/sortButton";

class Sort extends Component {
  handleRaiseSort = (path) => {
    const sortOption = { ...this.props.sortOption };
    if (sortOption.path === path) {
      sortOption.order = sortOption.order === "desc" ? "asc" : "desc";
    } else {
      sortOption.path = path;
      sortOption.order = "desc";
    }
    this.props.onSort(sortOption);
  };
  sortItems = [
    { path: "time", icon: "fa fa-clock-o" },
    { path: "views", icon: "fa fa-eye" },
  ];
  render() {
    const { sortOption } = this.props;
    return (
      <div className="child-one">
        <SortButton
          sortOption={sortOption}
          sortItems={this.sortItems}
          onRaiseSort={this.handleRaiseSort}
        />
      </div>
    );
  }
}

export default Sort;
