import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./spinner";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
        console.log(err);
      }
    );
  }

  componentDidUpdate() {
    console.log("Component rerendered and Updated");
  }

  render() {
    if (!this.state.lat && this.state.errorMessage === "") {
      return <Spinner message='Please Accept Location Request' />;
    }

    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <div>Error : {this.state.errorMessage}</div>;
    }
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
