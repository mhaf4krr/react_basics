import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  render() {
    const renderedList = this.props.songs.map((song) => {
      return (
        <li className='collection-item' key={song.title}>
          <div>
            {song.title}
            <a
              href='#!'
              className='secondary-content '
              onClick={(event) => {
                event.preventDefault();
                this.props.selectSong(song);
              }}>
              <i className='material-icons'>Select</i>
            </a>
          </div>
        </li>
      );
    });

    return (
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4>SongList</h4>
        </li>
        {renderedList}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
