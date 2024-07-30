import React, { useEffect, useState } from 'react';

function VideoCarousel({ videos }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 100000); // Change video every 10 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <video
      key={videos[currentVideoIndex].url}
      src={videos[currentVideoIndex].url}
      autoPlay
      muted
      loop
      className="w-full h-full"
    />
  );
}

export default VideoCarousel;
