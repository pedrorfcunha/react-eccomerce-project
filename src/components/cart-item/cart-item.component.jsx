import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { brand, name, price, gallery, quantity } = cartItem;
  console.log(cartItem);

  return (
    <div className="cart-item-container">
      <div className="item-details-container">
        <div className="item-details">
          <div className="title-box">
            <h3 className="name">{name}</h3>
            <span className="price">$50.00</span>
          </div>
          <span className="attribute">atribute 1</span>
          <span className="attribute">atribute 2</span>
        </div>
        <div className="quantity-display">
          <button className="quantity-btn">+</button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-btn">-</button>
        </div>
      </div>
      <img className="cart-image" src={gallery[0]}></img>
    </div>
  );
};

export default CartItem;

// Cart Item
// {
//   id, brand, name, atributtes, price, gallery, quantity
// }
