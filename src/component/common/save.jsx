import React from "react";

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

export default Save;
