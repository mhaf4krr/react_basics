import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends React.Component {
  state = {
    images: [],
  };

  handleSearch = async (term) => {
    console.log(term);
    const response = unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
    });

    this.setState({ images: (await response).data.results });
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.handleSearch} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
