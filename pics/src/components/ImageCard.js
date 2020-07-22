import React from "react";

class ImageCard extends React.Component {
  render() {
    const { urls } = this.props.image;
    return (
      <div>
        <img alt='image' src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
