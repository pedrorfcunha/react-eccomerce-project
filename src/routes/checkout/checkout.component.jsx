import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import CartModal from "../../components/cart-modal/cart-modal.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import CartSummary from "../../components/cart-summary/cart-summary.component";

import { ReactComponent as BackLogo } from "./../../assets/backlogo.svg";

import "./checkout.styles.scss";

const Checkout = () => {
  const { isCartOpen } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCartPage = () => {
    navigate("/cart");
  };

  return (
    <div>
      {isCartOpen && (
        <CartModal>
          <CartDropdown />
        </CartModal>
      )}
      <div className="checkout-container">
        <div className="cart-summary-container">
          <h2>Your cart summary:</h2>
          <div className="cart-summary-box">
            <CartSummary />
          </div>
          <BackLogo className="back-symbol" onClick={goToCartPage} />
        </div>
        <div className="payments-container">
          <PaymentForm />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
