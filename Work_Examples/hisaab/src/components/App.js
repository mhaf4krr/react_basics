import React from "react";
import StartPage from "../components/StartPage/StartPage";
import AddEntry from "../components/AddEntry/AddEntry";

import { BrowserRouter, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={StartPage} />
        <Route exact path='/addEntry' component={AddEntry} />
      </BrowserRouter>
    );
  }
}
