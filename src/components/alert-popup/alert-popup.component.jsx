import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import { ReactComponent as ExclamationLogo } from "../../assets/exclamationlogo.svg";
import "./alert-popup.styles.scss";

const AlertPopUp = ({ message }) => {
  const { isAlertOpen, setIsAlertOpen } = useContext(CartContext);

  const toggleIsAlertOpen = () => setIsAlertOpen(!isAlertOpen);

  return (
    <div className="alert-popup">
      <div className="alert-popup-container">
        <div className="alert-message-container">
          <h2 className="alert-message">{message}</h2>
          <div className="alert-btn-container">
            <Button onClick={toggleIsAlertOpen}>Ok</Button>
          </div>
        </div>
        <div className="alert-logo-container">
          <ExclamationLogo className="exclamation-logo"></ExclamationLogo>
        </div>
      </div>
    </div>
  );
};

export default AlertPopUp;
