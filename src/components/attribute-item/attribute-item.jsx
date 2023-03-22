import { useState } from "react";

import "./attribute-item.styles.scss";

const AttributeItem = ({ attribute }) => {
  const { items, name } = attribute;

  const [selectedBox, setSelectedBox] = useState();

  const toggleSelectedBox = (item) => {
    setSelectedBox(item);
    console.log(item);
    console.log(selectedBox);
  };

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
              className={
                "attribute-selector-box" +
                (selectedBox === item.id ? " selected-box" : "")
              }
              style={itemStyle}
              onClick={() => toggleSelectedBox(item.id)}
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
