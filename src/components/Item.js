import React, { useState } from "react";

function Item({ name, category }) {
  const [style, setStyle] = useState("")

  const handleAdd = () => {
    setStyle("in-cart")
  }
  return (
    <li className={style}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>Add to Cart</button>
    </li>
  );
}

export default Item;
