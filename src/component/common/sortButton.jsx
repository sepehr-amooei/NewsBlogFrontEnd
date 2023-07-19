import React, { Component } from "react";
import PropTypes from "prop-types";

class SortButton extends Component {
  render() {
    const { sortOption, sortItems, onRaiseSort } = this.props;
    return sortItems.map((item) => (
      <button
        key={item.path}
        style={{ marginLeft: "15px" }}
        type="button"
        onClick={() => onRaiseSort(item.path)}
        className={
          sortOption.path === item.path
            ? "btn btn-outline-dark position-relative active"
            : "btn btn-outline-dark position-relative"
        }
      >
        <i
          className={
            sortOption.order === "desc"
              ? "fa fa-sort-amount-desc"
              : "fa fa-sort-amount-asc"
          }
          aria-hidden="true"
        ></i>
        <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary">
          <i className={item.icon} aria-hidden="true"></i>
        </span>
      </button>
    ));
  }
}

SortButton.propTypes = {
  sortOption: PropTypes.object.isRequired,
  sortItems: PropTypes.array.isRequired,
  onRaiseSort: PropTypes.func.isRequired,
};

export default SortButton;
