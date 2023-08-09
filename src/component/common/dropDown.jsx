import React from "react";
import PropTypes from "prop-types";

const DropDown = ({
  dropDownItems,
  selectedItem,
  textProperty,
  valueProperty,
  onSelectItem,
  id,
}) => {
  return (
    <div id={id}>
      <button
        className="btn btn-dark dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {!selectedItem ? (
          <span>filter</span>
        ) : (
          <span>{selectedItem[textProperty]}</span>
        )}
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        {dropDownItems.map((item) => (
          <li key={item[valueProperty]}>
            <button
              className={
                selectedItem === item ? "dropdown-item active" : "dropdown-item"
              }
              onClick={() => onSelectItem(item)}
            >
              {item[textProperty]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

DropDown.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

DropDown.propTypes = {
  dropDownItems: PropTypes.array.isRequired,
  textProperty: PropTypes.string.isRequired,
  valueProperty: PropTypes.string.isRequired,
  onSelectItem: PropTypes.func.isRequired,
};

export default DropDown;
