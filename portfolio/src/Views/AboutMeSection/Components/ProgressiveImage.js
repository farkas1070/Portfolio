import React, { useState, useEffect } from 'react';

const ProgressiveImage = ({ lowQualitySrc, highQualitySrc, alt, ...rest }) => {
  const [imageSrc, setImageSrc] = useState(lowQualitySrc);

  useEffect(() => {
    // Create a new image element
    const img = new Image();
    img.src = highQualitySrc;

    img.onload = () => {
      // When the high-quality image is loaded, update the state with the high-quality source
      setImageSrc(highQualitySrc);
    };
  }, [highQualitySrc]);

  return <img src={imageSrc} alt={alt} {...rest} />;
};

export default ProgressiveImage;