import AttributesContainer from "../attributes-container/attributes-container.component";

import "./product-detail-container.styles.scss";

const ProductDetail = ({ product }) => {
  const { gallery, name } = product;

  return (
    <div className="product-detail-container">
      <div className="product-img-album">
        {gallery?.map((image) => (
          <img className="mini-img" src={image} key={image}></img>
        ))}
      </div>
      <div className="image-container">
        <img className="main-img" src={gallery} alt={name}></img>
      </div>
      <AttributesContainer product={product}/>
    </div>
  );
};

export default ProductDetail;
