import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CartModal from "../../components/cart-modal/cart-modal.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

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
      <div>TESTE</div>
    </div>
  );
};

export default Checkout;
