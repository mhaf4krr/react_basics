import React, { Component } from "react";
import "./StartPage.css";

import IconList from "./IconList";
export default class StartPage extends Component {
  render() {
    return (
      <div className='wrapper'>
        <header className='header'>
          <span className='header_text'>hisaab</span>
        </header>
        <IconList />
      </div>
    );
  }
}
