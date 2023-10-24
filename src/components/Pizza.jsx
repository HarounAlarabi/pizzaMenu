import React from "react";


function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h1>{pizzaObj.name}</h1>
        <p>{pizzaObj.ingredients}</p>
        <p>{pizzaObj.soldOut ? "SOLD OUT" : `price:£${pizzaObj.price}`}</p>
      </div>
    </li>
  );
}
export default Pizza;
