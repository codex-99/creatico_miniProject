import React from 'react';
import Image from './Image';
import images from './images';

function Collage(){
    return(
        <div class="gallery">
        {images.map(imageItem => (
        <Image
          key={imageItem.key}
          class={imageItem.class}
          src={imageItem.src}
          alt={imageItem.alt}
        />
        ))}
      </div>
    )
}

export default Collage;