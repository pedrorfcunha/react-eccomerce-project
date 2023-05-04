import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./alert-modal.styles.scss";

const AlertModal = ({ children }) => {
  const { isAlertOpen, setIsAlertOpen } = useContext(CartContext);

  const toggleIsAlertOpen = () => setIsAlertOpen(!isAlertOpen);

  return (
    <>
      <div className="alert-backdrop" onClick={toggleIsAlertOpen}></div>
      <dialog open={true} className="alert-modal">
        {children}
      </dialog>
    </>
  );
};

export default AlertModal;
