import "./cart-attribute-item.styles.scss";

const CartAttributeItem = ({ attribute, display, selectedAttributes }) => {
  const { items, name } = attribute;

  const selectAttributeComponentStyle = (display) => {
    if (display === "checkout") {
      return "checkout-attribute-item";
    } else if (display === "cart") {
      return "cart-attribute-item";
    }
  };

  return (
    <div className={selectAttributeComponentStyle(display)}>
      <h4 className="attribute-title">{name}</h4>
      <div
        className={
          name === "Color"
            ? "attribute-color-container"
            : "attribute-noncolor-container"
        }
      >
        {items.map((item) => (
          <span
            key={item.id}
            className={
              "attribute-selector-box" +
              (selectedAttributes[name] === item.id ? " selected-box" : "")
            }
            style={name === "Color" ? { backgroundColor: item.value } : {}}
          >
            {item.value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CartAttributeItem;
