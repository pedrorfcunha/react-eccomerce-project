import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { CurrencySwitcherContext } from "../../contexts/currency-switcher.context";

import CartModal from "../../components/cart-modal/cart-modal.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import Button from "../../components/button/button.component";
import CartContainer from "../../components/cart-container/cart-container.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { isCartOpen, cartCount, cartTotalPrice } = useContext(CartContext);
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
      {isCartOpen && (
        <CartModal>
          <CartDropdown />
        </CartModal>
      )}
      <div className="cart-page">
        <h1 className="cart-title">CART</h1>
        <CartContainer />
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
        <div className="btn-container">
          <Button>ORDER</Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
