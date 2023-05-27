import React from 'react';

const Video = () => {
  return (
    <div className="video-container">
      <iframe
        width="340"
        height="190"
        src="https://www.youtube.com/embed/TyGC-mGuPmo"
        title="YouTube Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
