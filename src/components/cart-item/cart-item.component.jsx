import { useState, useEffect, useContext } from "react";

import { CurrencySwitcherContext } from "../../contexts/currency-switcher.context";
import { CartContext } from "../../contexts/cart.context";

import CartAttributeItem from "../cart-attribute-item/cart-attribute-item.component";

import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { attributes, name, prices, gallery, quantity, selectedAttributes } =
    cartItem;

  const { addItemToCart, removeItemToCart } = useContext(CartContext);
  const { currencySymbol, checkCurrency } = useContext(CurrencySwitcherContext);

  const [convertedPrice, setConvertedPrice] = useState();

  useEffect(() => {
    if (prices) {
      const filteredPrice = checkCurrency(prices);
      setConvertedPrice(filteredPrice[0].amount);
    }
  }, [currencySymbol, prices]);

  return (
    <div className="cart-item-container">
      <div className="item-details-container">
        <div className="item-details">
          <div className="title-box">
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
                display={"cart"}
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
