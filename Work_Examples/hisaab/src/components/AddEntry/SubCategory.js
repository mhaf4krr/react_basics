import React from "react";

export default function SubCategory({ list, handleSubCatSelection }) {
  function renderSubCatList(list) {
    let renderedList;
    if (!list) {
      renderedList = <option value='null'>Choose</option>;
    } else {
      renderedList = list.map((category) => {
        return (
          <option key={category} value={category}>
            {category}
          </option>
        );
      });
    }

    return (
      <select
        className='entry-select'
        onClick={(e) => {
          handleSubCatSelection(e.target.value);
        }}>
        {renderedList}
      </select>
    );
  }

  return (
    <div className='form-group'>
      <span className='form-group-label'>Sub Category</span>
      {renderSubCatList(list)}
    </div>
  );
}
