import React from "react";

import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <p>Please Select a Song</p>;
  }

  return (
    <div className='card blue-grey darken-1'>
      <div className='card-content white-text'>
        <span className='card-title'>{song.title}</span>
        <p>Title : {song.title}</p>
      </div>
      <div className='card-action'>
        <a href='#'>Duration</a>
        <a href='#'>{song.duration}</a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
