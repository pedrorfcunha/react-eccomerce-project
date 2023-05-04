import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CartModal from "../../components/cart-modal/cart-modal.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";

import "./authentication.styles.scss";

const Authentication = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      {isCartOpen && (
        <CartModal>
          <CartDropdown />
        </CartModal>
      )}
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
};

export default Authentication;
