import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { ItemImage } from "../interface/itemInterface";

type Props = {
  images: Array<ItemImage>;
};

function PhotoGallery({ images }: Props) {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="App">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {images.map((img, i) => (
          <a
            data-lg-size="300-300"
            className="gallery-item"
            key={i}
            href={img.image}
          >
            <img alt={`img${i}`} src={img.thumbnail_image} />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

export default PhotoGallery;
