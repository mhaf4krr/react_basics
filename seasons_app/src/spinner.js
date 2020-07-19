import React from "react";

const spinner = (props) => {
  return (
    <div class='ui segment' style={{ height: "100vh" }}>
      <div class='ui active dimmer'>
        <div class='ui text loader'>{props.message}</div>
      </div>
      <p></p>
    </div>
  );
};

//Provides Default Props

spinner.defaultProps = {
  message: "Loading ...",
};

export default spinner;
