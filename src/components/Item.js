import React, { useState } from "react";

function Item({ name, category }) {

  const[inCart, setInCart] = useState(false);

  let toggleSelectStatus = () => {
    setInCart(!inCart);
  };

  let buttonText = inCart ? "Remove" : "Add";
  const buttonClass = inCart ? "remove" : "add";
  const itemClass = inCart ? "in-cart" : "";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={toggleSelectStatus}>{buttonText}</button>
    </li>
  );
}

export default Item;
