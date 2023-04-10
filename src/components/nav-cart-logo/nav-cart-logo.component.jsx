import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./nav-cart-logo.styles.scss";

import { ReactComponent as CartLogo } from "./../../assets/cartlogo.svg";

const NavCartLogo = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="action-container">
      <div className="action-logo" onClick={toggleIsCartOpen}>
        <CartLogo className="cart-symbol"/>
      </div>
    </div>
  );
};

export default NavCartLogo;
