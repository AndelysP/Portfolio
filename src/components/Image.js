import me from '../assets/img-me/me.webp';
import astronaut from '../assets/img-me/me-astronaut.webp';
import React, { useState } from 'react';

function Image() {
  const [images] = useState([me, astronaut]);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const currentImage = images[index];

  return <img src={currentImage} alt="Andélys" onClick={handleClick} />;
}

export default Image;
