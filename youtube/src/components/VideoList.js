import React from "react";
import VideoItem from "./VideoItem";

// Destructuring using ES6
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });

  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default VideoList;
