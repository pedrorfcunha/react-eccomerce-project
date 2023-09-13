import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { CurrencySwitcherContext } from "../../contexts/currency-switcher.context";

import "./cart-summary.styles.scss";

const CartSummary = () => {
  const { cartCount, cartTotalPrice } = useContext(CartContext);
  const { currencySymbol } = useContext(CurrencySwitcherContext);

  const formattedCartTotalPrice = cartTotalPrice.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const cartTotalTax = (cartTotalPrice * 0.21).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div>
      <div className="cart-summary">
        <ol className="ol-title">
          <li className="li-title">Tax 21%:</li>
          <li className="li-title">Quantity:</li>
          <li className="li-title total">Total:</li>
        </ol>
        <ol className="ol-data">
          <li className="li-data">
            {currencySymbol}
            {cartTotalTax}
          </li>
          <li className="li-data">{cartCount}</li>
          <li className="li-data">
            {currencySymbol}
            {formattedCartTotalPrice}
          </li>
        </ol>
      </div>      
    </div>
  );
};

export default CartSummary;
