import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CartModal from "../../components/cart-modal/cart-modal.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import CartSummary from "../../components/cart-summary/cart-summary.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <div>
      {isCartOpen && (
        <CartModal>
          <CartDropdown />
        </CartModal>
      )}
      <div className="checkout-container">
        <div className="payments-container">
          <PaymentForm />
        </div>
        <div className="cart-summary-container">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
