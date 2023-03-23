import { useState } from "react";

import "./attribute-item.styles.scss";

const AttributeItem = ({ attribute }) => {
  const { items, name } = attribute;

  const [selectedBox, setSelectedBox] = useState();

  const toggleSelectedBox = (item) => {
    setSelectedBox(item);
  };

  return (
    <div className="attribute-item">
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
              (selectedBox === item.id ? " selected-box" : "")
            }
            style={name === "Color" ? { backgroundColor: item.value } : {}}
            onClick={() => toggleSelectedBox(item.id)}
          >
            {item.value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AttributeItem;
