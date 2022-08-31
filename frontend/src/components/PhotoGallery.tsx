import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function PhotoGallery({ images }: { images: Array<string> }) {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="App">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {images.map((img, i) => (
          <a className="gallery-item" key={i} href={img}>
            <img className="img-responsive" alt={`img${i}`} src={img} />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

export default PhotoGallery;
