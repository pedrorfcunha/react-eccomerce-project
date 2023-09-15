import { useState } from "react";

import "./attribute-item.styles.scss";

const AttributeItem = ({ attribute, onSelect }) => {
  const { items, name, id } = attribute;

  const [selectedBox, setSelectedBox] = useState();

  const toggleSelectedBox = (selectedValue) => {
    setSelectedBox(selectedValue);
    onSelect(id, selectedValue);
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
