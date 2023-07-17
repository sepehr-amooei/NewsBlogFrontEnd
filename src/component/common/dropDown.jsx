import { filter } from "lodash";
import React from "react";

const DropDown = ({
  dropDownItems,
  selectedItem,
  textProperty,
  valueProperty,
  onSelectItem,
}) => {
  return (
    <div>
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

export default DropDown;
