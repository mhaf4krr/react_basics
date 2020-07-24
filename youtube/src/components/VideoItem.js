import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className='item'>
      <img src={video.snippet.thumbnails.medium.url} className='ui image' />
      <div className='content'>
        <div className='header'> {video.snippet.title} </div>
      </div>
    </div>
  );
};

export default VideoItem;
