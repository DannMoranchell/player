import React, { useEffect, useState } from 'react';

function ImageCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <img
      src={images[currentImageIndex].url}
      alt="Product"
      className="w-full h-full"
    />
  );
}

export default ImageCarousel;
