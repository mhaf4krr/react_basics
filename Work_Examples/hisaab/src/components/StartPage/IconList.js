import React, { Component } from "react";

import Icon from "./Icon";

import icon_add from "./icons/add_icon.svg";
import search_icon from "./icons/search_icon.svg";

export default class IconList extends Component {
  render() {
    return (
      <section className='icon_list_wrapper'>
        <Icon label={"Add"} icon={icon_add} path='/addEntry' />

        <Icon label={"History"} icon={search_icon} path='/' />
      </section>
    );
  }
}
