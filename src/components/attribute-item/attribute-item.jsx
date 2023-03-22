import "./attribute-item.styles.scss";

const AttributeItem = ({ attribute }) => {
  const { items, name } = attribute;

  const getItemClass = (name) => {
    if (name === "Color") {
      return "attribute-color-container";
    } else {
      return "attribute-selector-container";
    }
  };

  return (
    <div className="attribute-item">
      <h4 className="attribute-title">{name}</h4>
      <div className={getItemClass(name)}>
        {items.map((item) => {
          const itemStyle =
            getItemClass(name) === "attribute-color-container"
              ? { backgroundColor: item.value }
              : {};
          return (
            <span
              key={item.id}
              className="attribute-selector-box"
              style={itemStyle}
            >
              {item.value}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default AttributeItem;
