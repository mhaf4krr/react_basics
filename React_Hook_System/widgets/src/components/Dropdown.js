import React from "react";

const Dropdown = ({ drops, selected, onSelectedChange }) => {
  const renderedList = drops.map((drop) => {
    return (
      <option className='dropdown-item' value={drop.value}>
        {drop.label}
      </option>
    );
  });

  return (
    <div className='container-sm'>
      <select
        onSelect={(value) => {
          console.log(value);
        }}>
        {renderedList}
      </select>

      <span>Selected Option: {selected.label}</span>
    </div>
  );
};

export default Dropdown;
