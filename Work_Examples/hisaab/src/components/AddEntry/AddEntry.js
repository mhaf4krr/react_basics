import React, { Component } from "react";
import "./AddEntry.css";

import SubCategory from "./SubCategory";

let categories = [
  { main: "Choose", sub: null },
  { main: "Flesh", sub: ["Mutton", "Chicken", "Fish"], unit: "KG" },
  {
    main: "Vegetables",
    sub: ["Green Veg.", "Non Green", "Mixed"],
    unit: "KG",
  },
  {
    main: "Fruits",
    sub: ["Citric", "Sweet", "Water Filled"],
    unit: "KG",
  },

  {
    main: "Dairy",
    sub: ["Cheese", "Butter", "Milk"],
    unit: "KG/L",
  },
];

export default class AddEntry extends Component {
  state = {
    selected_main_cat: null,
    sub_list: null,
    selected_sub_cat: null,
    selected_unit: null,
    selected_quantity: null,
    selected_price: null,
    selected_date: null,
  };

  renderAddButton() {
    if (
      this.state.selected_main_cat &&
      this.state.selected_sub_cat &&
      this.state.selected_quantity &&
      this.state.selected_price &&
      this.state.selected_date
    ) {
      return <button className='add-btn'>Add</button>;
    }
    return (
      <button className='add-btn disabled' disabled>
        Add
      </button>
    );
  }

  renderQuantityPrice() {
    if (this.state.selected_main_cat && this.state.selected_sub_cat) {
      return (
        <div style={{ height: "auto" }}>
          <div className='form-group'>
            <span className='form-group-label'>Date</span>
            <input
              type='date'
              className='date-picker'
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({ selected_date: e.target.value });
              }}
            />
          </div>

          <div className='form-group'>
            <span className='form-group-label'>Quantity</span>
            <input
              type='number'
              className='input-element-entry'
              onChange={(e) => {
                this.setState({ selected_quantity: e.target.value });
              }}
            />
            <span className='quantity'>{this.state.selected_unit}</span>
          </div>

          <div className='form-group'>
            <span className='form-group-label'>Price</span>
            <span className='quantity'>Rs.</span>
            <input
              type='number'
              className='input-element-entry input-price'
              onChange={(e) => {
                this.setState({ selected_price: e.target.value });
              }}
            />
          </div>

          <div className='form-group'>{this.renderAddButton()}</div>
        </div>
      );
    } else return null;
  }

  handleSubCatSelection = (value) => {
    this.setState({ selected_sub_cat: value });
  };

  handleMainCatChange = (main_cat) => {
    let selectedCategory = categories.find((category) => {
      return category["main"] === main_cat;
    });

    this.setState({
      selected_main_cat: selectedCategory.main,
      selected_sub_cat: null,
      selected_unit: selectedCategory.unit,
      sub_list: selectedCategory.sub,
    });
  };

  renderMainCategories = () => {
    let renderedList = categories.map((category) => {
      return (
        <option key={category.main} value={category.main}>
          {category.main}
        </option>
      );
    });

    return (
      <select
        className='entry-select'
        onChange={(e) => {
          this.handleMainCatChange(e.target.value);
        }}>
        {renderedList}
      </select>
    );
  };

  render() {
    return (
      <div className='wrapper dark'>
        <header className='entry_header'>
          <div className='entry_header_text'>add entry</div>
        </header>

        <main className='entry_main'>
          <form>
            <div className='form-group'>
              <span className='form-group-label'>Main Category</span>
              {this.renderMainCategories()}
            </div>

            <SubCategory
              list={this.state.sub_list}
              handleSubCatSelection={this.handleSubCatSelection}
            />

            {this.renderQuantityPrice()}
          </form>
        </main>
      </div>
    );
  }
}
