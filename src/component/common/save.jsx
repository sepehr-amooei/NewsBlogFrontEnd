import React from "react";
import PropTypes from "prop-types";

const Save = ({ saved, onSave }) => {
  let classes = "fa  btn btn-primary btn-sm fa-bookmark";
  if (!saved) classes += "-o";
  return (
    <button
      className={classes}
      aria-hidden="true"
      style={{
        marginLeft: "10px",
      }}
      onClick={onSave}
    ></button>
  );
};

Save.propTypes = {
  saved: PropTypes.bool,
  onSave: PropTypes.func.isRequired,
};

export default Save;
