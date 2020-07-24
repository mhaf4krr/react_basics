import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div> ... Loading ...</div>;
  }

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSrc} />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
      </div>

      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
