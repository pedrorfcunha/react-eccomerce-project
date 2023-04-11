import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="bag-container">
        <h3 className="my-bag">My bag, X items</h3>
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        <div className="total-price-container">
          <span className="total">Total</span>
          <span className="total-price">$100.00</span>
        </div>
      </div>
      <div className="buttons-container">
        <Button buttonType="inverted">VIEW BAG</Button>
        <Button>CHECK OUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
