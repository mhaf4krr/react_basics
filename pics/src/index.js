import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return "Hello World";
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
