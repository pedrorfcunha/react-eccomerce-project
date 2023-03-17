import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <h3>My bag</h3>
      <div className="cart-items">
        cart items
        <p>Total</p>
      </div>
      <div className="buttons-container">
        <Button buttonType="inverted">VIEW BAG</Button>
        <Button>CHECK OUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
