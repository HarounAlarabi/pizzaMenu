import React from "react";
import Order from "./Order";

function Footer() {
  let openTime = 10;
  let closeTime = 22;
  let hours = new Date().getHours();
  let isOpen = hours >= openTime && hours <= closeTime;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeTime={closeTime} openTime={openTime} />
      ) : (
        <p> we are happy to welcome you between {openTime}:00 and {closeTime}:00</p>
      )}
    </footer>
  );
}

export default Footer;
