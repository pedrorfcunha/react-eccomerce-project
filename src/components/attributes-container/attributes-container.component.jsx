import ReactHtmlParser from "react-html-parser";
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import AttributeItem from "../attribute-item/attribute-item.component";
import Button from "../../components/button/button.component";

import "./attributes-container.styles.scss";

const AttributesContainer = ({ product }) => {
  const { attributes, brand, description, name, prices } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="attributes-container">
      <h2 className="product-brand">{brand}</h2>
      <h3 className="product-name">{name}</h3>
      <div className="attribute-items">
        {attributes?.map((attribute) => (
          <AttributeItem key={attribute.id} attribute={attribute} />
        ))}
      </div>
      <div>
        <p className="price-title">PRICE:</p>
        <p className="price-value">$50.00</p>
      </div>
      <Button onClick={addProductToCart}>ADD TO CART</Button>
      <div className="product-description">{ReactHtmlParser(description)}</div>
    </div>
  );
};

export default AttributesContainer;
