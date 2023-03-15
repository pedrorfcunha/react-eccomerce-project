import "./product-item.styles.scss";

const ProductItem = ({ product }) => {
  const { gallery, name, id } = product;

  return (
    <div className="product-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${gallery})` }}
      ></div>
      <div className="product-body-container">
        <h2>
          {name} and {id}
        </h2>
        <p>$50.00</p>
      </div>
    </div>
  );
};

export default ProductItem;
