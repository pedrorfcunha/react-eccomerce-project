import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./modal.styles.scss";

const Modal = ({ children }) => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <div className="backdrop" onClick={toggleIsCartOpen}></div>
      <dialog open={true} className="modal">
        {children}
      </dialog>
    </>
  );
};

export default Modal;
