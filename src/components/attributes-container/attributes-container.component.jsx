import AttributeItem from "../attribute-item/attribute-item";
import Button from "../../components/button/button.component";

import "./attributes-container.styles.scss";

const AttributesContainer = ({ product }) => {
  const { attributes, brand, description, name, prices } = product;
  
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
      <Button>ADD TO CART</Button>
      <div
        className="product-description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default AttributesContainer;
