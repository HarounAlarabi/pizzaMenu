import React from "react";
import Pizza from "./Pizza";
import data from "../Data/data";
import "../index.css";
function Menu() {
  const pizzas = data.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzas > 0 ? (
        <>
          <p>
            Authentic Ttalian cuisine, 6 creative dishes to choose from. ALL from our store oven, all organic, all
            delicious.
          </p>
          <ul className="pizzas">
            {data.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we are still working in iur menu please come back later</p>
      )}
    </main>
  );
}

export default Menu;
