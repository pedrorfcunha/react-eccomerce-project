import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./cart-modal.styles.scss";

const CartModal = ({ children }) => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <div className="nav-cart-backdrop" onClick={toggleIsCartOpen}></div>
      <div className="cart-backdrop" onClick={toggleIsCartOpen}></div>
      <dialog open={true} className="modal">
        {children}
      </dialog>
    </>
  );
};

export default CartModal;
