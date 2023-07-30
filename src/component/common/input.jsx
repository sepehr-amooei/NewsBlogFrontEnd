import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        autoFocus
        id={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
