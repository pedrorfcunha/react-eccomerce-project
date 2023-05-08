import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CartModal from "../../components/cart-modal/cart-modal.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import Button from "../../components/button/button.component";
import CartContainer from "../../components/cart-container/cart-container.component";
import CartSummary from "../../components/cart-summary/cart-summary.component";

import "./cart-page.styles.scss";

const CartPage = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <div>
      {isCartOpen && (
        <CartModal>
          <CartDropdown />
        </CartModal>
      )}
      <div className="cart-page">
        <h1 className="cart-title">CART</h1>
        <CartContainer />
        <CartSummary />
        <div className="btn-container">
          <Button>ORDER</Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
