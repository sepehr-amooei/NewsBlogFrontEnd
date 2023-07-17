import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ currentPage, itemCount, pageSize, onPageChange }) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return null;
  const page = _.range(1, pageCount + 1);
  return (
    <ul className="pagination">
      {page.map((p) => (
        <li
          className={currentPage === p ? "page-item active" : "page-item "}
          key={p}
        >
          <a className="page-link" onClick={() => onPageChange(p)} href="#">
            {p}
          </a>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
