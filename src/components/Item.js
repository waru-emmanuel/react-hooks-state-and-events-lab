import React, { useState } from "react";

function Item({ name, category }) {

  const[inCart, setInCart] = useState(false);

  let toggleSelectStatus = () => {
    setInCart(!inCart);
  };

  let buttonText = inCart ? "Remove" : "Add";
  const buttonClass = inCart ? "remove" : "add"; // this  is a class name that will help once you click on the button, help define color change for remove/add text once the button is pressed
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
