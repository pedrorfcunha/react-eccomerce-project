import AttributeItem from "../attribute-item/attribute-item.component";

import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { attributes, name, price, gallery, quantity } = cartItem;
  console.log(cartItem);

  return (
    <div className="cart-item-container">
      <div className="item-details-container">
        <div className="item-details">
          <div className="title-box">
            <h3 className="name">{name}</h3>
            <span className="price">$50.00</span>
          </div>
          <div className="attributes-box">
            {attributes?.map((attribute) => (
              <AttributeItem
                key={attribute.id}
                attribute={attribute}
                display={"cart"}
              />
            ))}
          </div>
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
