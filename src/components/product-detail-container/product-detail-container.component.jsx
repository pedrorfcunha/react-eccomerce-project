import { useState, useEffect } from "react";

import AttributesContainer from "../attributes-container/attributes-container.component";

import "./product-detail-container.styles.scss";

const ProductDetail = ({ product }) => {
  const { gallery, name } = product;

  const [mainImage, setMainImage] = useState(null);  

  useEffect(() => {
    if (gallery) {
      setMainImage(gallery[0]);
    }
  }, [gallery]);

  const toggleMainImage = (image) => setMainImage(image);

  return (
    <div className="product-detail-container">
      <div className="product-img-album">
        {gallery?.map((image) => (
          <img
            className="mini-img"
            src={image}
            key={image}
            onClick={() => toggleMainImage(image)}
          ></img>
        ))}
      </div>
      <div className="image-container">
        <img className="main-img" src={mainImage} alt={name}></img>
      </div>
      <AttributesContainer product={product} />
    </div>
  );
};

export default ProductDetail;
