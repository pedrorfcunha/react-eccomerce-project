import { useState, useEffect, useContext } from "react";

import { CurrencySwitcherContext } from "../../contexts/currency-switcher.context";
import { CartContext } from "../../contexts/cart.context";

import CartAttributeItem from "../cart-attribute-item/cart-attribute-item.component";

import "./cart-item.styles.scss";

const CartItem = ({ cartItem, display }) => {
  const {
    attributes,
    name,
    brand,
    prices,
    gallery,
    quantity,
    selectedAttributes,
  } = cartItem;

  const { addItemToCart, removeItemToCart } = useContext(CartContext);
  const { currencySymbol, checkCurrency } = useContext(CurrencySwitcherContext);

  const [convertedPrice, setConvertedPrice] = useState();

  useEffect(() => {
    if (prices) {
      const filteredPrice = checkCurrency(prices);
      const formattedNumber = filteredPrice[0].amount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      setConvertedPrice(formattedNumber);
    }
  }, [currencySymbol, prices]);

  const selectAttributeComponentStyle = (display) => {
    if (display === "checkout") {
      return "checkout-item-container";
    } else if (display === "cart") {
      return "cart-item-container";
    }
  };

  return (
    <div className={selectAttributeComponentStyle(display)}>
      <div className="item-details-container">
        <div className="item-details">
          <div className="title-box">
            {display === "checkout" && <h3 className="brand">{brand}</h3>}
            <h3 className="name">{name}</h3>
            <span className="price">
              {currencySymbol} {convertedPrice}
            </span>
          </div>
          <div className="attributes-box">
            {attributes?.map((attribute) => (
              <CartAttributeItem
                key={attribute.id}
                attribute={attribute}
                display={display}
                selectedAttributes={selectedAttributes}
              />
            ))}
          </div>
        </div>
        <div className="quantity-display">
          <button
            className="quantity-btn"
            onClick={() => addItemToCart(cartItem)}
          >
            +
          </button>
          <span className="quantity">{quantity}</span>
          <button
            className="quantity-btn"
            onClick={() => removeItemToCart(cartItem)}
          >
            -
          </button>
        </div>
      </div>
      <img className="cart-image" src={gallery[0]} alt={name}></img>
    </div>
  );
};

export default CartItem;
