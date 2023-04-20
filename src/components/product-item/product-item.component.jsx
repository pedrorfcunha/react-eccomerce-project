import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { CurrencySwitcherContext } from "../../contexts/currency-switcher.context";

import "./product-item.styles.scss";

const ProductItem = ({ product }) => {
  const { gallery, name, id, prices } = product;

  const [productImage, setProductImage] = useState(null);
  const { currencySymbol, checkCurrency } = useContext(CurrencySwitcherContext);

  const [convertedPrice, setConvertedPrice] = useState();

  useEffect(() => {
    if (prices) {
      const filteredPrice = checkCurrency(prices);
      setConvertedPrice(filteredPrice[0].amount);
    }
  }, [currencySymbol, prices]);

  useEffect(() => {
    if (gallery) {
      setProductImage(gallery[0]);
    }
  }, [gallery]);

  return (
    <Link to={`/product/${id}`}>
      <div className="product-container">
        <img className="background-image" src={productImage}></img>
        <div className="product-body-container">
          <h2>{name}</h2>
          <p>
            {currencySymbol} {convertedPrice}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
