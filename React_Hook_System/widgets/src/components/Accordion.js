import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    console.log(index);
  };

  let renderedList = items.map((item, index) => {
    const active = index === activeIndex ? "show" : "";
    return (
      <div className='card' onClick={() => handleClick(index)}>
        <div className='card-header' id='headingOne'>
          <h2 className='mb-0'>
            <button
              className='btn btn-link btn-block text-left'
              type='button'
              data-toggle='collapse'
              data-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'>
              {item.title}
            </button>
          </h2>
        </div>

        <div
          id='collapseOne'
          className={`collapse ${active}`}
          aria-labelledby='headingOne'
          data-parent='#accordionExample'>
          <div className='card-body'>{item.desc}</div>
        </div>
      </div>
    );
  });

  return <React.Fragment>{renderedList}</React.Fragment>;
};

export default Accordion;
