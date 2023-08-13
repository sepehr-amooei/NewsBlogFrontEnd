import React from "react";

const SearchBox = ({ value, onChange, id }) => {
  return (
    <input
      id={id}
      type="text"
      name="query"
      placeholder="Search..."
      className="form-control"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
