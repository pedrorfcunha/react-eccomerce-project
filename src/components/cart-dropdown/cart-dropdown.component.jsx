import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import { CurrencySwitcherContext } from "../../contexts/currency-switcher.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, cartCount, cartTotalPrice, isCartOpen, setIsCartOpen } =
    useContext(CartContext);

  const { currencySymbol } = useContext(CurrencySwitcherContext);

  const navigate = useNavigate();
  const goToCheckoutPage = () => {
    navigate("/checkout");
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="bag-container">
        <h3 className="my-bag">
          My bag, {cartCount} {cartCount === 1 ? "item" : "items"}
        </h3>
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={JSON.stringify(item.selectedAttributes)}
              cartItem={item}
              display={"cart"}
            />
          ))}
        </div>
        <div className="total-price-container">
          <span className="total">Total</span>
          <span className="total-price">
            {currencySymbol} {cartTotalPrice}
          </span>
        </div>
      </div>
      <div className="buttons-container">
        <Button buttonType="inverted" onClick={goToCheckoutPage}>
          VIEW BAG
        </Button>
        <Button onClick={goToCheckoutPage}>CHECK OUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
