import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/cart-item.component";

import "./cart-container.styles.scss";

const CartContainer = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-container">
      <hr className="line-breaker"></hr>
        {cartItems.map((item) => (
          <div>
            <CartItem
              key={JSON.stringify(item.selectedAttributes)}
              cartItem={item}
              display="checkout"
            />
            <hr className="line-breaker"></hr>
          </div>
        ))}
    </div>
  );
};

export default CartContainer;
