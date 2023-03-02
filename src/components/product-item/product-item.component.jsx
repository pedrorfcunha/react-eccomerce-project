import "./product-item.styles.scss";

const ProductItem = ({ product }) => {
  const { imageUrl, title } = product;

  return (
    <div className="product-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="product-body-container">
        <h2>{title}</h2>
        <p>$50.00</p>
      </div>
    </div>
  );
};

export default ProductItem;
