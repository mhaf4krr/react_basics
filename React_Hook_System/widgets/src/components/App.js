import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";

const App = () => {
  const options = [
    { label: "The color Red", value: "red" },
    { label: "The color Yellow", value: "yellow" },
    { label: "The color Blue", value: "blue" },
  ];

  let items = [
    { title: "Learning React", desc: "Something" },
    { title: "Learning React part 2", desc: "Something" },
    { title: "Learning React part 3", desc: "Something" },
  ];

  const [optionSelected, setOption] = useState(options[0]);

  return (
    <div className='container-sm accordion'>
      {/* <Accordion items={items} />
      <Search /> */}
      <Dropdown
        selected={optionSelected}
        onSelectedChange={setOption}
        drops={options}
      />
    </div>
  );
};

export default App;
