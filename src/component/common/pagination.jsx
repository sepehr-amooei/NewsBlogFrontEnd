import React from "react";
import _ from "lodash";

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

export default Pagination;
