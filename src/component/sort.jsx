import React from "react";

const Sort = () => {
  return (
    <div className="child-one">
      <button
        type="button"
        className="btn btn-outline-dark position-relative active"
      >
        <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>
        <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </span>
      </button>
      <button
        type="button"
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
};

export default Sort;
